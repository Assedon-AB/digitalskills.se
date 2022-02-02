import type { NextPage, GetServerSideProps } from "next";

import Chart from "../../components/Chart";
import SmallCard from "../../components/SmallCard";
import { mockupData } from "../../lib/mockupData";

interface CompetencePageProps {
  competenceId: string;
}

const CompetencePage: NextPage<CompetencePageProps> = ({ competenceId }) => {
  return (
    <div className="bg-slate-200 w-full h-full min-h-screen py-12">
      <article className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-semibold mb-8">{competenceId}</h1>
        <h2 className="text-2xl mb-4">Beskrivning</h2>
        <p className="tracking-wide lg:w-3/4 font-light mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tellus
          nisi, sollicitudin ac dolor et, eleifend lacinia ex. Aenean eget
          aliquam augue, vitae elementum felis. Curabitur egestas feugiat velit
          quis molestie. Donec blandit sit amet justo fermentum gravida.
          Pellentesque sem est, pellentesque vitae eleifend porta, pretium
          condimentum felis. Suspendisse vel ultrices eros. Cras in sem libero.
          Ut dignissim id quam eget molestie. Fusce facilisis dolor risus, vitae
        </p>

        <Chart name={competenceId} data={mockupData} />

        <h2 className="text-2xl mb-4">Geografisk fördelning</h2>

        <h2 className="text-2xl mb-4">
          Yrken som ofta efterfrågar {competenceId}
        </h2>
        <SmallCard
          text="Frontend-utvecklare"
          href="/yrken/Frontend-utvecklare"
        />

        <h2 className="text-2xl mb-4">Relaterade kompetenser</h2>
        <SmallCard text="TypeScript" href="/kompetenser/TypeScript" />
        <SmallCard text="Angular.js" href="/kompetenser/Angularjs" />
        <SmallCard text="Vue.js" href="/kompetenser/Vuejs" />

        <h2 className="text-xl mb-4">Källor</h2>
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
  const competenceId = context.params?.competenceId;

  return {
    props: {
      competenceId,
    },
  };
};
