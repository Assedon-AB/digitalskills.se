import type { NextPage } from "next";
import AttentionCard from "../components/AttentionCard";
import Toplist from "../components/Toplist";

import { getCompetencies, getOccupations, getIndustry, SKILL_IDS_TO_HIDE, OCCUPATION_IDS_TO_HIDE } from "../lib/helpers";

import { DigspecData, IndustryData } from "../interfaces/Digspec";

import MetaTags from "../components/MetaTags";

interface HomePageProps {
  competencies: DigspecData[];
  occupations: DigspecData[];
  industry: IndustryData;
}

const Home: NextPage<HomePageProps> = ({
  competencies,
  occupations,
  industry,
}) => {

  return (
    <div className=" bg-[#fafafa] w-full h-full sm:px-4 lg:px-8">
        <MetaTags title="Startsida" />
      <article className="max-w-6xl flex flex-col min-h-screen mx-auto pt-16">
        <div className="flex flex-col sm:flex-row px-4">
          <div className="flex flex-col w-12/12 sm:w-6/12">
            <h1 className="text-4xl ">digitalskills.se</h1>
            <p className="pt-4 pb-4 pr-8 text-sm leading-relaxed">
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
              <div
                className="py-2 px4"
              >
                <AttentionCard/
                >
              </div>
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
      competencies = competenciesRaw
          .filter((s => !SKILL_IDS_TO_HIDE.includes(s._id)))
          .sort((a, b) => b.num - a.num)
          .slice(0, 100);
  }

  let occupations: DigspecData[] = [];
  if (!occupationsRaw.hasOwnProperty("error")) {
    occupations = occupationsRaw
      .filter((s) => s.model)
      .filter((o => !OCCUPATION_IDS_TO_HIDE.includes(o._id)))
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
