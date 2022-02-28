import type { NextPage, GetServerSideProps } from "next";

import Chart from "../../components/Chart";
import SmallCard from "../../components/SmallCard";
import GeoTable from "../../components/GeoTable";

import { DigspecData } from "../../interfaces/Digspec";
import { getCompetence } from "../../lib/helpers";

interface CompetencePageProps {
  competence: DigspecData;
}

const CompetencePage: NextPage<CompetencePageProps> = ({ competence }) => {
  return (
    <div className="bg-[#fafafa] w-full h-full min-h-screen py-12">
      <article className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-semibold mb-8">{competence.name}</h1>
        <Chart
          name={competence.name}
          data={{
            labels: competence.ad_series.labels.concat(
              competence.prediction_series.month_12.labels
            ),
            datasets: [
              {
                label: "Historisk data",
                data: competence.ad_series.values,
                borderColor: "rgb(99, 99, 255)",
                backgroundColor: "rgba(99, 99, 255, 0.5)",
              },
              {
                label: "Prognos",
                data: competence.prediction_series.month_12.values.map(
                  (y, index) => ({
                    y,
                    x: competence.prediction_series.month_12.labels[index],
                  })
                ),
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
              },
            ],
          }}
        />

        <h2 className="text-2xl mb-4">Geografisk fördelning</h2>
        <GeoTable
          data={Object.keys(competence.geos)
            .map((geoName: string) => ({
              name: geoName,
              num: competence.geos[geoName]["num"],
              organisations_num: competence.geos[geoName]["organisations_num"],
              details: Object.keys(competence.geos[geoName]["details"]).map(
                (employerName) => ({
                  name: employerName,
                  num: competence.geos[geoName]["details"][employerName],
                })
              ),
            }))
            .sort((a, b) => b.num - a.num)
            .slice(0, 15)}
          title="Område"
        />

        <h2 className="text-2xl mb-4 mt-8">
          Yrken som ofta efterfrågar {competence.name}
        </h2>
        {Object.keys(competence.jobs)
          .sort((a, b) => competence.jobs[b] - competence.jobs[a])
          .slice(0, 8)
          .map((name) => (
            <SmallCard
              key={"related-occupation-" + name}
              text={name.split("__")[0]}
              href={
                name.split("__")[1] !== "noId"
                  ? "/yrken/" + name.split("__")[1]
                  : undefined
              }
            />
          ))}

        <h2 className="text-2xl mb-4 mt-8">Relaterade kompetenser</h2>
        {Object.keys(competence.skills)
          .sort((a, b) => competence.skills[b] - competence.skills[a])
          .slice(0, 8)
          .map((name) => (
            <SmallCard
              key={"related-competence-" + name}
              text={name.split("__")[0]}
              href={
                name.split("__")[1] !== "noId"
                  ? "/kompetenser/" + name.split("__")[1]
                  : undefined
              }
            />
          ))}

        <h2 className="text-xl mb-4 mt-8">Källor</h2>
        <p>
          All annons data kommer ifrån Swedish Jobtech Dev. Därefter så körs
          annonserna genom Swedish Jobtech Dev's Enrichment API. Efter att
          kompetenser, yrken, geo-data, egenskaper och arbetsgivare är
          extraherat så genomgår det en framskrivning. Därefter så laddas datan
          upp till vårt API.
        </p>
      </article>
    </div>
  );
};

export default CompetencePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const param = context.params?.competenceId;
  const competenceId = typeof param === "string" ? param.split("-")[1] : "";

  const competence = await getCompetence(competenceId);
  return {
    props: {
      competence,
    },
  };
};
