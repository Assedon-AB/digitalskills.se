import type { NextPage } from "next";
import Image from "next/image";
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
        <h1 className="sr-only">digitalskills.se startsida</h1>
        <div className="flex flex-col items-center md:flex-row px-4">
          <div className="flex flex-col w-12/12 md:w-6/12">
              <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Mzj01h8XKYo" title="YouTube video spelare för digitalskills video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="md:pr-8 py-2"></iframe>
          </div>
          <div className="flex flex-col w-12/12 md:w-6/12">
              <div
                className="py-2 px-4"
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
