import type { NextPage, GetStaticProps} from "next";
import dynamic from "next/dynamic";

import SmallCard from "../../components/SmallCard";
import GeoTable from "../../components/GeoTable";
import MetaTags from "../../components/MetaTags";
import InfoPopover from "../../components/InfoPopover";

import { DigspecData } from "../../interfaces/Digspec";
import { transformLink, getOccupation, getOccupations } from "../../lib/helpers";

const Chart = dynamic(() => import("../../components/Chart"), {
    ssr: false
});

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
              data={{
                labels: occupation.ad_series.labels.concat(
                    occupation.prediction_series?.month_18 ? occupation.prediction_series.month_18.labels : []
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
                    data: occupation.prediction_series?.month_18 ? occupation.prediction_series.month_18.values.map(
                      (y, index) => ({
                        y,
                        x: occupation.prediction_series.month_18.labels[index],
                      })
                    ) : [],
                    borderColor: "rgb(0,121,107)",
                borderDash: [5, 4],
                backgroundColor: "rgb(0,121,107, 0.5)",
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
              num: occupation.geos[geoName]["2021-12-01"]["num"] ?? 0,
              organisations_num: occupation.geos[geoName]["2021-12-01"]["organisations_num"] ?? 0,
              details: Object.keys(occupation.geos[geoName]["2021-12-01"]["details"] ?? []).map(
                (employerName) => ({
                  name: employerName,
                  num: occupation.geos[geoName]["2021-12-01"]["details"][employerName],
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
            <div className="mb-4 mt-8 flex items-center">
                <h2 className="text-2xl">
                  Vanligt efterfrågade kompetenser för {occupation.name}
                </h2>
                <InfoPopover title="Relaterade kompetenser" text="Relaterade kompetenser är baserat på vilka kompetenser som efterfrågas i samma annons som yrket." />
            </div>
        {Object.keys(occupation.skills)
          .sort((a, b) => occupation.skills[b] - occupation.skills[a])
          .slice(0, 8)
          .map((name) => (
            <SmallCard
              key={"related-competence-" + name}
              text={name.split("__")[0]}
              href={
                name.split("__")[1] !== "noId"
                  ? "/kompetenser/" + `${transformLink(name.split("__")[0], name.split("__")[1])}`
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
                  Vanligt efterfrågade egenskaper för {occupation.name}
                </h2>
                <InfoPopover title="Relaterade egenskaper" text="Relaterade egenskaper är baserat på vilka egenskaper som efterfrågas i samma annons som yrket." />
            </div>
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
            <div className="mb-4 mt-8 flex items-center">
                <h2 className="text-2xl">
                    Relaterade yrken
                </h2>
                <InfoPopover title="Relaterade yrken" text="Relaterade yrken är baserat på vilka yrken som förekommer i samma annons som yrket." />
            </div>
                {Object.keys(occupation.jobs)
                  .sort((a, b) => occupation.jobs[b] - occupation.jobs[a])
                  .slice(0, 8)
                  .map((name) => (
                    <SmallCard
                      key={"related-occupation-" + name}
                      text={name.split("__")[0]}
                      href={
                        name.split("__")[1] !== "noId"
                          ? "/yrken/" + `${transformLink(name.split("__")[0], name.split("__")[1])}`
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
                    occupationId: `${transformLink(occupation?.name, occupation._id)}`
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
