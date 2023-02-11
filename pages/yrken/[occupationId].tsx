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
	getOccupation,
	getOccupations,
} from "../../lib/helpers";

const Chart = dynamic(() => import("../../components/Chart"), {
	ssr: false,
});

const LATEST_DATA_POINT = "2022-10-30";

interface OccupationPageProps {
	occupation: DigspecData;
}
const OccupationPage: NextPage<OccupationPageProps> = ({ occupation }) => {
	const [viewMode, setViewMode] = useState<"faRegion" | "citys">("faRegion");

	if (!occupation) {
		return null;
	}

	return (
		<div className="bg-[#fafafa] w-full h-full min-h-screen py-12">
			<MetaTags title={occupation.name} />
			<article className="max-w-6xl mx-auto px-4">
				<h1 className="text-4xl capitalize font-semibold mb-8">
					{occupation.name}
				</h1>

				{occupation.ad_series && occupation.ad_series.labels ? (
					<Chart
						name={occupation.name}
						data={{
							labels: occupation.ad_series.labels.concat(
								occupation.prediction_series?.month_18
									? occupation.prediction_series.month_18
											.labels
									: []
							),
							datasets: [
								{
									label: "Historisk data",
									data: occupation.ad_series.values,
									borderColor: "rgb(0,77,64)",
									backgroundColor: "rgb(0,77,64, 0.5)",
								},
								{
									label: "Prognos",
									data: occupation.prediction_series?.month_18
										? occupation.prediction_series.month_18.values.map(
												(y, index) => ({
													y,
													x: occupation
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

				{occupation.geos ? (
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
									data={Object.keys(occupation.geos[viewMode])
										.map((geoName: string) => ({
											name: geoName,
											num:
												occupation.geos[viewMode][
													geoName
												][LATEST_DATA_POINT]["num"] ??
												0,
											organisations_num:
												occupation.geos[viewMode][
													geoName
												][LATEST_DATA_POINT][
													"organisations_num"
												] ?? 0,
											details: Object.keys(
												occupation.geos[viewMode][
													geoName
												][LATEST_DATA_POINT][
													"details"
												] ?? []
											).map((employerName) => ({
												name: employerName,
												num: occupation.geos[viewMode][
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
									geodata={occupation.geos.faRegion}
									date={LATEST_DATA_POINT}
								/>
							</div>
						</div>
					</div>
				) : null}

				{occupation.skills ? (
					<>
						<div className="mb-4 mt-8 flex items-center">
							<h2 className="text-2xl">
								Vanligt efterfrågade kompetenser för{" "}
								{occupation.name}
							</h2>
							<InfoPopover
								title="Relaterade kompetenser"
								text="Yrket och kompetensen har ofta förekommit i samma annons. Listan är rangordnad efter flest antal förekomster"
							/>
						</div>
						{Object.keys(occupation.skills)
							.sort(
								(a, b) =>
									occupation.skills[b] - occupation.skills[a]
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

				{occupation.traits ? (
					<>
						<div className="mb-4 mt-8 flex items-center">
							<h2 className="text-2xl">
								Vanligt efterfrågade egenskaper för{" "}
								{occupation.name}
							</h2>
							<InfoPopover
								title="Relaterade egenskaper"
								text="Egenskaper som har efterfrågats i annonser med följande yrkestitel. Listan är rangordnat efter flest antal förekomster"
							/>
						</div>
						{Object.keys(occupation.traits)
							.sort(
								(a, b) =>
									occupation.traits[b] - occupation.traits[a]
							)
							.slice(0, 8)
							.map((name) => (
								<SmallCard
									key={"related-traits-" + name}
									text={name}
								/>
							))}
					</>
				) : null}

				{occupation.jobs ? (
					<>
						<div className="mb-4 mt-8 flex items-center">
							<h2 className="text-2xl">Relaterade yrken</h2>
							<InfoPopover
								title="Relaterade yrken"
								text="Andra yrken som jobad enrichment tagit fram som alternativ yrkestitel för samma annons. Listan är rangordnad efter flest antal förekomster"
							/>
						</div>
						{Object.keys(occupation.jobs)
							.sort(
								(a, b) =>
									occupation.jobs[b] - occupation.jobs[a]
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
			</article>
		</div>
	);
};

export default OccupationPage;

export async function getStaticPaths() {
	const occupationsRaw: DigspecData[] = await getOccupations();
	let paths: { params: { occupationId: string } }[] = [];
	if (!occupationsRaw.hasOwnProperty("error")) {
		paths = occupationsRaw.map((occupation) => ({
			params: {
				occupationId: `${transformLink(
					occupation?.name,
					occupation._id
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
	const param = context.params?.occupationId;
	const occupationIdSplitted =
		typeof param === "string" ? param.split("-") : "";

	let occupation = await getOccupation(
		occupationIdSplitted[occupationIdSplitted.length - 1]
	);

	if (occupation.hasOwnProperty("error")) {
		occupation = null;
	}

	return {
		props: {
			occupation,
		},
	};
};
