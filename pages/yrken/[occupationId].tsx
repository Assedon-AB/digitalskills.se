import type { NextPage, GetServerSideProps } from "next";

import Chart from "../../components/Chart";
import SmallCard from "../../components/SmallCard";
import GeoTable from "../../components/GeoTable";
import { mockupData, geoMockupData } from "../../lib/mockupData";

interface OccupationPageProps {
  occupationId: string;
}
const OccupationPage: NextPage<OccupationPageProps> = ({ occupationId }) => {
  return (
    <div className="bg-slate-200 w-full h-full min-h-screen py-12">
      <article className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-semibold mb-8">{occupationId}</h1>
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

        <Chart name={occupationId} data={mockupData} />

        <h2 className="text-2xl mb-4">Geografisk fördelning</h2>
        <GeoTable data={geoMockupData} title="Kommun" />

        <h2 className="text-2xl mb-4 mt-8">
          Vanligt efterfrågade kompetenser för {occupationId}
        </h2>
        <SmallCard text="TypeScript" href="/kompetenser/TypeScript" />
        <SmallCard text="Angular.js" href="/kompetenser/Angularjs" />
        <SmallCard text="Vue.js" href="/kompetenser/Vuejs" />

        <h2 className="text-2xl mb-4 mt-8">
          Vanligt efterfrågade egenskaper för {occupationId}
        </h2>
        <SmallCard text="Noggranhet" />
        <SmallCard text="Logiskt tänkande" />

        <h2 className="text-2xl mb-4 mt-8">Relaterade yrken</h2>
        <SmallCard text="Backend-utvecklare" href="/yrken/Backend-utvecklare" />

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

export default OccupationPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const occupationId = context.params?.occupationId;

  return {
    props: {
      occupationId,
    },
  };
};
