import type { NextPage } from "next";

import SearchBar from "../../components/SearchBar";
import Chart from "../../components/Chart";
import StatsCard from "../../components/StatsCard";

const OccupationsOverview: NextPage = () => {
  return (
    <article className="max-w-6xl px-4 mx-auto pt-24">
      <SearchBar />
      <Chart />
      <StatsCard month={-12} year={26} name="React" />
    </article>
  );
};

export default OccupationsOverview;
