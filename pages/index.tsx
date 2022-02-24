import type { NextPage } from "next";
import AttentionCard from "../components/AttentionCard";
import Toplist from "../components/Toplist";

import { getCompetencies, getOccupations, getIndustry } from "../lib/helpers";

import { DigspecData } from "../interfaces/Digspec";

interface HomePageProps {
  competencies: DigspecData[];
  occupations: DigspecData[];
  industry: any;
}

const Home: NextPage<HomePageProps> = ({
  competencies,
  occupations,
  industry,
}) => {
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
    <div className=" bg-[#fafafa] w-full h-full sm:px-4 lg:px-8">
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
              industry={industry}
              title="Namn"
              category="Topplista kompetenser"
            ></Toplist>
          </div>
          <div className="flex flex-col">
            <Toplist
              data={occupations}
              industry={industry}
              title="Namn"
              category="Topplista yrken"
            ></Toplist>
          </div>
        </div>
      </article>
    </div>
  );
};

export async function getStaticProps() {
  const competenciesRaw: DigspecData[] = await getCompetencies();
  const occupationsRaw: DigspecData[] = await getOccupations();
  const industry = await getIndustry();

  let competencies: DigspecData[] = [];
  if (!competenciesRaw.hasOwnProperty("error")) {
    competencies = competenciesRaw.sort((a, b) => b.num - a.num).slice(0, 100);
  }

  let occupations: DigspecData[] = [];
  if (!occupationsRaw.hasOwnProperty("error")) {
    occupations = occupationsRaw
      .filter((s) => s.model)
      .sort((a, b) => b.num - a.num)
      .slice(0, 100);
  }

  return {
    props: {
      competencies,
      occupations,
      industry,
    },
  };
}

export default Home;
