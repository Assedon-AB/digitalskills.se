import type { NextPage } from "next";

import SearchBar from "../../components/SearchBar";
import Chart from "../../components/Chart";
import StatsCard from "../../components/StatsCard";
import FullTable from "../../components/FullTable";

import { mockupData } from "../../lib/mockupData";

const CompetencesOverview: NextPage = () => {
  const skillData = [
    {
      name: "React",
      num: 536,
      forecast3: 637,
      forecast6: 612,
      forecast12: 644,
      trend3: 19,
      trend6: 12,
      trend12: 6,
    },
    {
      name: "Javascript",
      num: 492,
      forecast3: 594,
      forecast6: 546,
      forecast12: 563,
      trend3: 20,
      trend6: 12,
      trend12: 22,
    },
    {
      name: "Cybersäkerhet",
      num: 457,
      forecast3: 612,
      forecast6: 590,
      forecast12: 601,
      trend3: 14,
      trend6: 20,
      trend12: 19,
    },
    {
      name: "Flutter",
      num: 249,
      forecast3: 369,
      forecast6: 373,
      forecast12: 375,
      trend3: -6,
      trend6: 20,
      trend12: 48,
    },
    {
      name: "Python",
      num: 399,
      forecast3: 590,
      forecast6: 493,
      forecast12: 632,
      trend3: 15,
      trend6: 31,
      trend12: 58,
    },
    {
      name: "Erlang",
      num: 200,
      forecast3: 206,
      forecast6: 213,
      forecast12: 225,
      trend3: 8,
      trend6: 19,
      trend12: 42,
    },
    {
      name: ".Net",
      num: 159,
      forecast3: 131,
      forecast6: 150,
      forecast12: 142,
      trend3: -8,
      trend6: -16,
      trend12: -11,
    },
    {
      name: "C++",
      num: 143,
      forecast3: 121,
      forecast6: 134,
      forecast12: 111,
      trend3: -1,
      trend6: 2,
      trend12: -15,
    },
    {
      name: "F#",
      num: 96,
      forecast3: 100,
      forecast6: 113,
      forecast12: 109,
      trend3: 4,
      trend6: 20,
      trend12: 20,
    },
    {
      name: "Maskininlärning",
      num: 263,
      forecast3: 313,
      forecast6: 363,
      forecast12: 398,
      trend3: 20,
      trend6: 26,
      trend12: 34,
    },
  ];
  return (
    <div className=" bg-[#fafafa] w-full h-full min-h-screen py-12">
      <article className="max-w-6xl px-4 mx-auto pt-24">
        <SearchBar placeholder="Sök kompetenser" />
        <Chart name="React" data={mockupData} />
        <StatsCard month={-12} year={26} name="React" />
        <FullTable
          data={skillData}
          title="Namn"
          category="kompetenser"
        ></FullTable>
      </article>
    </div>
  );
};

export default CompetencesOverview;
