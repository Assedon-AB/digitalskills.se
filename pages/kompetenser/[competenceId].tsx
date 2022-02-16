import type { NextPage, GetServerSideProps } from "next";

import Chart from "../../components/Chart";
import SmallCard from "../../components/SmallCard";
import GeoTable from "../../components/GeoTable";
import { mockupData, geoMockupData } from "../../lib/mockupData";

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
        <Chart name={competence.name} data={mockupData} />

        <h2 className="text-2xl mb-4">Geografisk fördelning</h2>
        <GeoTable data={geoMockupData} title="Kommun" />

        <h2 className="text-2xl mb-4 mt-8">
          Yrken som ofta efterfrågar {competence.name}
        </h2>
        {Object.keys(competence.jobs)
          .sort((a, b) => competence.jobs[b] - competence.jobs[a])
          .slice(0, 8)
          .map((name) => (
            <SmallCard text={name} />
          ))}

        <h2 className="text-2xl mb-4 mt-8">Relaterade kompetenser</h2>
        <SmallCard text="TypeScript" href="/kompetenser/TypeScript" />
        <SmallCard text="Angular.js" href="/kompetenser/Angularjs" />
        <SmallCard text="Vue.js" href="/kompetenser/Vuejs" />

        <h2 className="text-xl mb-4 mt-8">Källor</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.{" "}
        </p>
      </article>
    </div>
  );
};

export default CompetencePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const competenceId = context.params?.competenceId?.split("-")[1];

  const competence = await getCompetence(competenceId);

  return {
    props: {
      competence,
    },
  };
};
