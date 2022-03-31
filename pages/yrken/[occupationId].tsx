import type { NextPage, GetStaticProps} from "next";

import Chart from "../../components/Chart";
import SmallCard from "../../components/SmallCard";
import GeoTable from "../../components/GeoTable";
import MetaTags from "../../components/MetaTags";

import { DigspecData } from "../../interfaces/Digspec";
import { getOccupation, getOccupations } from "../../lib/helpers";

interface OccupationPageProps {
  occupation: DigspecData;
}
const OccupationPage: NextPage<OccupationPageProps> = ({ occupation }) => {
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
              digspecData={occupation}
              data={{
                labels: occupation.ad_series.labels.concat(
                    occupation.prediction_series?.month_12 ? occupation.prediction_series.month_12.labels : []
                ),
                datasets: [
                  {
                    label: "Historisk data",
                    data: occupation.ad_series.values,
                    borderColor: "rgb(99, 99, 255)",
                    backgroundColor: "rgba(99, 99, 255, 0.5)",
                  },
                  {
                    label: "Prognos",
                    data: occupation.prediction_series?.month_12 ? occupation.prediction_series.month_12.values.map(
                      (y, index) => ({
                        y,
                        x: occupation.prediction_series.month_12.labels[index],
                      })
                    ) : [],
                    borderColor: "rgb(255, 99, 132)",
                    borderDash: [10, 5],
                    backgroundColor: "rgba(255, 99, 132, 0.5)",
                  },
                ],
              }}
            />
        ) : null}

        {occupation.geos ? (
            <>
        <h2 className="text-2xl mb-4">Geografisk fördelning</h2>
        <GeoTable
          data={Object.keys(occupation.geos)
            .map((geoName: string) => ({
              name: geoName,
              num: occupation.geos[geoName]["num"],
              organisations_num: occupation.geos[geoName]["organisations_num"],
              details: Object.keys(occupation.geos[geoName]["details"]).map(
                (employerName) => ({
                  name: employerName,
                  num: occupation.geos[geoName]["details"][employerName],
                })
              ),
            }))
            .sort((a, b) => b.num - a.num)
            .slice(0, 15)}
          title="Område"
        />
</>
    ) : null}

        {occupation.skills ? (
            <>
        <h2 className="text-2xl mb-4 mt-8">
          Vanligt efterfrågade kompetenser för {occupation.name}
        </h2>
        {Object.keys(occupation.skills)
          .sort((a, b) => occupation.skills[b] - occupation.skills[a])
          .slice(0, 8)
          .map((name) => (
            <SmallCard
              key={"related-competence-" + name}
              text={name.split("__")[0]}
              href={
                name.split("__")[1] !== "noId"
                  ? "/kompetenser/"+ encodeURIComponent(name.split("__")[0]) + name.split("__")[1]
                  : undefined
              }
            />
          ))}
      </>
  ) : null}

        {occupation.traits ? (
            <>
        <h2 className="text-2xl mb-4 mt-8">
          Vanligt efterfrågade egenskaper för {occupation.name}
        </h2>
        {Object.keys(occupation.traits)
          .sort((a, b) => occupation.traits[b] - occupation.traits[a])
          .slice(0, 8)
          .map((name) => (
            <SmallCard key={"related-traits-" + name} text={name} />
          ))}
      </>
        ) : null}

        {occupation.jobs ? (
            <>
                <h2 className="text-2xl mb-4 mt-8">Relaterade yrken</h2>
                {Object.keys(occupation.jobs)
                  .sort((a, b) => occupation.jobs[b] - occupation.jobs[a])
                  .slice(0, 8)
                  .map((name) => (
                    <SmallCard
                      key={"related-occupation-" + name}
                      text={name.split("__")[0]}
                      href={
                        name.split("__")[1] !== "noId"
                          ? "/yrken/" + encodeURIComponent(name.split("__")[0]) + name.split("__")[1]
                          : undefined
                      }
                    />
                  ))}
              </>
        ) : null}

        <h2 className="text-xl mb-4 mt-8">Källor</h2>
        <p className="leading-relaxed">
          {`All annons data kommer ifrån Swedish Jobtech Dev. Därefter så körs
          annonserna genom Swedish Jobtech Dev's Enrichment API. Efter att
          kompetenser, yrken, geo-data, egenskaper och arbetsgivare är
          extraherat så genomgår det en framskrivning. Därefter så laddas datan
          upp till vårt API.`}
        </p>
      </article>
    </div>
  );
};

export default OccupationPage;

export async function getStaticPaths() {
    const occupationsRaw: DigspecData[] = await getOccupations();
    let paths: {params: {occupationId: string}}[] = [];
    if (!occupationsRaw.hasOwnProperty("error")) {
        paths = occupationsRaw.map((occupation) => (
            {
                params: {
                    occupationId: `${encodeURIComponent(occupation.name)}-${occupation._id}`
                }
            }
        ))
    }

    return {
        paths,
        fallback: false
    };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const param = context.params?.occupationId;
  const occupationIdSplitted =
    typeof param === "string" ? param.split("-") : "";

  const occupation = await getOccupation(
    occupationIdSplitted[occupationIdSplitted.length - 1]
  );

  return {
    props: {
      occupation,
    },
  };
};
