import type { NextPage } from "next";
import AttentionCard from "../components/AttentionCard";
import Toplist from "../components/Toplist";

import { getCompetencies, getOccupations } from "../lib/helpers";

import { DigspecData } from "../interfaces/Digspec";

interface HomePageProps {
  competencies: DigspecData[];
  occupations: DigspecData[];
}

const Home: NextPage<HomePageProps> = ({ competencies, occupations }) => {
  const attentionCardData = [
    {
      title: "Trend",
      description: "Jämför senaste månadsdata historisk bakåt.",
    },
    {
      title: "Prognos",
      description: "Framskrivning görs med hjälp av exponentiell utjämning.",
    },
    {
      title: "Hämtad senast",
      description:
        "Datan hämtades senast 2022-01-01 och sträcker sig till 2021-12-31.",
    },
  ];

  return (
    <div className=" bg-slate-200 w-full h-full sm:px-4 lg:px-8">
      <article className="max-w-6xl flex flex-col min-h-screen mx-auto pt-16">
        <div className="flex flex-col sm:flex-row px-4">
          <div className="flex flex-col w-12/12 sm:w-6/12">
            <h2 className="text-4xl ">Översikt</h2>
            <p className="pt-4 pb-4 pr-8 text-sm">
              Tillväxtverket och Universitetskanslersämbetet har av regeringen
              fått i uppdrag att tillsammans analysera och föreslå hur
              kompetensförsörjningen av digital spetskompetens kan utvecklas
              både kort- och långsiktigt. Vi ska starta en dialog om samverkan
              mellan berörda aktörer, i syfte att öka tillgången på digital
              spetskompetens.{" "}
            </p>
            <p className=" pr-8 text-sm">
              I uppdraget ingår också att så långt det är möjligt säkerställa en
              förbättrad tillgång till statistik och prognoser över efterfrågan
              och tillgången på digital spetskompetens på svensk arbetsmarknad.{" "}
            </p>
          </div>
          <div className="flex flex-col w-12/12 sm:w-6/12">
            {attentionCardData.map((dataObject) => (
              <div
                key={"attentionCard-" + dataObject.title}
                className="py-2 px4"
              >
                <AttentionCard
                  title={dataObject.title}
                  description={dataObject.description}
                ></AttentionCard>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col xl:flex-row justify-between">
          <div className="flex flex-col">
            <Toplist
              data={competencies}
              title="Namn"
              category="Topplista kompetenser"
            ></Toplist>
          </div>
          <div className="flex flex-col">
            <Toplist
              data={occupations}
              title="Namn"
              category="Topplista yrken"
            ></Toplist>
          </div>
        </div>
      </article>
    </div>
  );
};

export async function getServerSideProps() {
  const competencies: DigspecData[] = await getCompetencies();
  const occupations: DigspecData[] = await getOccupations();

  return {
    props: {
      competencies: competencies
        .map((skill) => ({
          ...skill,
          num:
            skill.ad_series.values[skill.ad_series.values.length - 1] ?? null,
        }))
        .filter((s) => s.num)
        .sort((a, b) => b.num - a.num),
      occupations: occupations
        .map((occupation) => ({
          ...occupation,
          num:
            occupation.ad_series.values[
              occupation.ad_series.values.length - 1
            ] ?? null,
        }))
        .filter((o) => o.num)
        .sort((a, b) => b.num - a.num),
    },
  };
}

export default Home;
