import { useState } from "react";
import type { NextPage, GetStaticProps } from "next";
import dynamic from "next/dynamic";

import SmallCard from "../../components/SmallCard";
import GeoTable from "../../components/GeoTable";
import MetaTags from "../../components/MetaTags";
import InfoPopover from "../../components/InfoPopover";

import Heatmap from "../../components/Heatmap";

import { DigspecData } from "../../interfaces/Digspec";
import {
	transformLink,
	getCompetence,
	getCompetencies,
} from "../../lib/helpers";

const Chart = dynamic(() => import("../../components/Chart"), {
	ssr: false,
});

const LATEST_DATA_POINT = "2022-12-01";

interface CompetencePageProps {
	competence: DigspecData;
}

const CompetencePage: NextPage<CompetencePageProps> = ({ competence }) => {
	const [viewMode, setViewMode] = useState<"faRegion" | "citys">("faRegion");

	if (!competence) {
		return null;
	}

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
					<div className="flex flex-col">
						<h2 className="text-2xl mb-4">Geografisk fördelning</h2>
						<p className="mb-2 font-bold">
							Visa geografiskfördelning över:
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

							<label htmlFor="citys">Städer</label>
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
							Vad är en FA-region?
						</a>

						<div className="flex flex-col lg:flex-row">
							<div className="w-full lg:w-4/5 xl:w-4/5">
								<GeoTable
									data={Object.keys(competence.geos[viewMode])
										.map((geoName: string) => ({
											name: geoName,
											num:
												competence.geos[viewMode][
													geoName
												][LATEST_DATA_POINT]["num"] ??
												0,
											organisations_num:
												competence.geos[viewMode][
													geoName
												][LATEST_DATA_POINT][
													"organisations_num"
												] ?? 0,
											details: Object.keys(
												competence.geos[viewMode][
													geoName
												][LATEST_DATA_POINT][
													"details"
												] ?? []
											).map((employerName) => ({
												name: employerName,
												num: competence.geos[viewMode][
													geoName
												][LATEST_DATA_POINT]["details"][
													employerName
												],
											})),
										}))
										.sort((a, b) => b.num - a.num)
										.slice(0, 15)}
									title={
										viewMode === "faRegion"
											? "FA-region"
											: "Stad"
									}
								/>
							</div>
							<div className="mt-8 lg:ml-8 md:w-2/5 xl:w-1/5">
								<Heatmap
									label={
										"Geografisk överblick via FA-regioner"
									}
									geodata={competence.geos.faRegion}
									date={LATEST_DATA_POINT}
								/>
							</div>
						</div>
					</div>
				) : null}

				{competence.jobs ? (
					<>
						<div className="mb-4 mt-8 flex items-center">
							<h2 className="text-2xl">
								Yrken som ofta efterfrågar {competence.name}
							</h2>
							<InfoPopover
								title="Relaterade yrken"
								text="Yrket och kompetensen har ofta förekommit i samma annons. Listan är rangordnad efter flest antal förekomster"
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
								text="Andra kompetenser som har efterfrågats i samma annons, dvs är ofta efterfrågade tillsammans. Listan är rangordnat efter flest antal gemensamma förekomster"
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

	let competence = await getCompetence(
		competenceIdSplitted[competenceIdSplitted.length - 1]
	);

	if (competence.hasOwnProperty("error")) {
		competence = null;
	}

	return {
		props: {
			competence,
		},
	};
};
