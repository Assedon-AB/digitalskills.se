import type { NextPage } from "next";

import SearchBar from "../../components/SearchBar";
import Chart from "../../components/Chart";
import StatsCard from "../../components/StatsCard";

const OccupationsOverview: NextPage = () => {
  return (
    <div className="bg-slate-200 w-full h-full ">
    <article className="max-w-6xl px-4 mx-auto pt-24 min-h-screen">
      <SearchBar />
      <Chart />
      <StatsCard month={-12} year={26} name="React" />
    </article>
    </div>
  );
};

export default OccupationsOverview;
