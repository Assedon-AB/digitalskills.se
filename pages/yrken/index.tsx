import type { NextPage } from "next";

import SearchBar from "../../components/SearchBar";
import Chart from "../../components/Chart";
import StatsCard from "../../components/StatsCard";
import FullTable from "../../components/FullTable";

import { mockupData } from "../../lib/mockupData";
import { getOccupations } from "../../lib/helpers";

import { DigspecData } from "../../interfaces/Digspec";

interface OccupationPageProps {
  occupations: DigspecData[];
}

const OccupationsOverview: NextPage<OccupationPageProps> = ({
  occupations,
}) => {
  return (
    <div className="bg-slate-200 w-full h-full min-h-screen py-12">
      <article className="max-w-6xl px-4 mx-auto pt-24">
        <SearchBar placeholder="Sök yrken" />
        <Chart name="Frontend-utvecklare" data={mockupData} />
        <StatsCard month={-12} year={26} name="Frontend-utvecklare" />
        <FullTable data={occupations} title="Namn" category="yrken"></FullTable>
      </article>
    </div>
  );
};

export async function getServerSideProps() {
  const occupations = await getOccupations();

  return {
    props: {
      occupations: occupations.map((occupation: any) => ({
        ...occupation,
        num:
          occupation.ad_series.values[occupation.ad_series.values.length - 1] ??
          null,
      })),
    },
  };
}

export default OccupationsOverview;
