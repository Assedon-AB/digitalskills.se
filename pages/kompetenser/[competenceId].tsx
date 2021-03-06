import { useState } from "react";
import type { NextPage, GetStaticProps } from "next";
import dynamic from "next/dynamic";

import SmallCard from "../../components/SmallCard";
import GeoTable from "../../components/GeoTable";
import MetaTags from "../../components/MetaTags";
import InfoPopover from "../../components/InfoPopover";

import { DigspecData } from "../../interfaces/Digspec";
import {
	transformLink,
	getCompetence,
	getCompetencies,
} from "../../lib/helpers";

const Chart = dynamic(() => import("../../components/Chart"), {
	ssr: false,
});

interface CompetencePageProps {
	competence: DigspecData;
}

const CompetencePage: NextPage<CompetencePageProps> = ({ competence }) => {
	const [viewMode, setViewMode] = useState<"faRegion" | "citys">("faRegion");

	return (
		<div className="bg-[#fafafa] w-full h-full min-h-screen py-12">
			<MetaTags title={competence.name} />
			<article className="max-w-6xl mx-auto px-4">
				<h1 className="text-4xl capitalize font-semibold mb-8">
					{competence.name}
				</h1>
				{competence.ad_series && competence.ad_series.labels ? (
					<Chart
						name={competence.name}
						data={{
							labels: competence.ad_series.labels.concat(
								competence.prediction_series?.month_18
									? competence.prediction_series.month_18
											.labels
									: []
							),
							datasets: [
								{
									label: "Historisk data",
									data: competence.ad_series.values,
									borderColor: "rgb(0,77,64)",
									backgroundColor: "rgb(0,77,64, 0.5)",
								},
								{
									label: "Prognos",
									data: competence.prediction_series?.month_18
										? competence.prediction_series.month_18.values.map(
												(y, index) => ({
													y,
													x: competence
														.prediction_series
														.month_18.labels[index],
												})
										  )
										: [],
									borderColor: "rgb(0,121,107)",
									borderDash: [5, 4],
									backgroundColor: "rgb(0,121,107, 0.5)",
								},
							],
						}}
					/>
				) : null}

				{competence.geos ? (
					<>
						<h2 className="text-2xl mb-4">Geografisk f??rdelning</h2>
						<p className="mb-2 font-bold">
							Visa geografiskf??rdelning ??ver:
						</p>

						<div className="flex mb-2">
							<label htmlFor="faRegion">FA-region</label>
							<input
								checked={viewMode == "faRegion"}
								onClick={() => setViewMode("faRegion")}
								type="radio"
								value="faRegion"
								id="faRegion"
								className="mr-4 ml-2"
							/>

							<label htmlFor="citys">St??der</label>
							<input
								checked={viewMode == "citys"}
								onClick={() => setViewMode("citys")}
								type="radio"
								value="citys"
								id="citys"
								className="ml-2"
							/>
						</div>
						<a
							className="block mb-4 text-blue-600 hover:text-blue-900 underline"
							href="https://tillvaxtverket.se/statistik/regional-utveckling/regionala-indelningar/fa-regioner.html"
							target="_blank"
							rel="noreferrer"
						>
							Vad ??r en FA-region?
						</a>

						<GeoTable
							data={Object.keys(competence.geos[viewMode])
								.map((geoName: string) => ({
									name: geoName,
									num:
										competence.geos[viewMode][geoName][
											"2021-12-01"
										]["num"] ?? 0,
									organisations_num:
										competence.geos[viewMode][geoName][
											"2021-12-01"
										]["organisations_num"] ?? 0,
									details: Object.keys(
										competence.geos[viewMode][geoName][
											"2021-12-01"
										]["details"] ?? []
									).map((employerName) => ({
										name: employerName,
										num: competence.geos[viewMode][geoName][
											"2021-12-01"
										]["details"][employerName],
									})),
								}))
								.sort((a, b) => b.num - a.num)
								.slice(0, 15)}
							title={
								viewMode === "faRegion" ? "FA-region" : "Stad"
							}
						/>
					</>
				) : null}

				{competence.jobs ? (
					<>
						<div className="mb-4 mt-8 flex items-center">
							<h2 className="text-2xl">
								Yrken som ofta efterfr??gar {competence.name}
							</h2>
							<InfoPopover
								title="Relaterade yrken"
								text="Yrket och kompetensen har ofta f??rekommit i samma annons. Listan ??r rangordnad efter flest antal f??rekomster"
							/>
						</div>
						{Object.keys(competence.jobs)
							.sort(
								(a, b) =>
									competence.jobs[b] - competence.jobs[a]
							)
							.slice(0, 8)
							.map((name) => (
								<SmallCard
									key={"related-occupation-" + name}
									text={name.split("__")[0]}
									href={
										name.split("__")[1] !== "noId"
											? "/yrken/" +
											  `${transformLink(
													name.split("__")[0],
													name.split("__")[1]
											  )}`
											: undefined
									}
								/>
							))}
					</>
				) : null}

				{competence.skills ? (
					<>
						<div className="mb-4 mt-8 flex items-center">
							<h2 className="text-2xl">Relaterade kompetenser</h2>
							<InfoPopover
								title="Relaterade kompetenser"
								text="Andra kompetenser som har efterfr??gats i samma annons, dvs ??r ofta efterfr??gade tillsammans. Listan ??r rangordnat efter flest antal gemensamma f??rekomster"
							/>
						</div>
						{Object.keys(competence.skills)
							.sort(
								(a, b) =>
									competence.skills[b] - competence.skills[a]
							)
							.slice(0, 8)
							.map((name) => (
								<SmallCard
									key={"related-competence-" + name}
									text={name.split("__")[0]}
									href={
										name.split("__")[1] !== "noId"
											? "/kompetenser/" +
											  `${transformLink(
													name.split("__")[0],
													name.split("__")[1]
											  )}`
											: undefined
									}
								/>
							))}
					</>
				) : null}
			</article>
		</div>
	);
};

export default CompetencePage;

export async function getStaticPaths() {
	const competenciesRaw: DigspecData[] = await getCompetencies();
	let paths: { params: { competenceId: string } }[] = [];
	if (!competenciesRaw.hasOwnProperty("error")) {
		paths = competenciesRaw.map((competence) => ({
			params: {
				competenceId: `${transformLink(
					competence?.name,
					competence._id
				)}`,
			},
		}));
	}

	return {
		paths,
		fallback: false,
	};
}

export const getStaticProps: GetStaticProps = async (context) => {
	const param = context.params?.competenceId;
	const competenceIdSplitted =
		typeof param === "string" ? param.split("-") : "";

	const competence = await getCompetence(
		competenceIdSplitted[competenceIdSplitted.length - 1]
	);
	return {
		props: {
			competence,
		},
	};
};
