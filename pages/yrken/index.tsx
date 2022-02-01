import type { NextPage } from "next";

import SearchBar from "../../components/SearchBar";
import Chart from "../../components/Chart";
import StatsCard from "../../components/StatsCard";

import { mockupData } from "../../lib/mockupData";

const OccupationsOverview: NextPage = () => {
  return (
    <div className="bg-slate-200 w-full h-full min-h-screen py-12">
      <article className="max-w-6xl px-4 mx-auto pt-24">
        <SearchBar placeholder="Sök yrken" />
        <Chart name="Frontend-utvecklare" data={mockupData} />
        <StatsCard month={-12} year={26} name="Frontend-utvecklare" />
      </article>
    </div>
  );
};

export default OccupationsOverview;
