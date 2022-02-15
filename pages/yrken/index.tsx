import type { NextPage } from "next";

import SearchBar from "../../components/SearchBar";
import Chart from "../../components/Chart";
import StatsCard from "../../components/StatsCard";
import FullTableListRow from "../../components/FullTableListRow";
import FullTable from "../../components/FullTable";

import { mockupData } from "../../lib/mockupData";

const OccupationsOverview: NextPage = () => {
  const occupationData = [
    {
      name: "Databasadministratör",
      num: 141,
      forecast3: 243,
      forecast6: 269,
      forecast12: 255,
      trend3: 21,
      trend6: 53,
      trend12: 72,
    },
    {
      name: "Front-endutvecklare",
      num: 499,
      forecast3: 512,
      forecast6: 509,
      forecast12: 527,
      trend3: 12,
      trend6: -1,
      trend12: 5,
    },
    {
      name: "IT-supporttekniker",
      num: 200,
      forecast3: 183,
      forecast6: 200,
      forecast12: 212,
      trend3: -3,
      trend6: -12,
      trend12: -8,
    },
    {
      name: "Back-endutvecklare",
      num: 233,
      forecast3: 328,
      forecast6: 361,
      forecast12: 390,
      trend3: 26,
      trend6: 39,
      trend12: 41,
    },
    {
      name: "Projektledare",
      num: 401,
      forecast3: 412,
      forecast6: 426,
      forecast12: 399,
      trend3: 11,
      trend6: 16,
      trend12: 13,
    },
    {
      name: "Full-stackutvecklare",
      num: 436,
      forecast3: 539,
      forecast6: 501,
      forecast12: 496,
      trend3: 20,
      trend6: 26,
      trend12: 24,
    },
    {
      name: "Systemadministratör",
      num: 212,
      forecast3: 67,
      forecast6: 363,
      forecast12: 398,
      trend3: 12,
      trend6: -26,
      trend12: -69,
    },
    {
      name: "QA-expert",
      num: 196,
      forecast3: 178,
      forecast6: 363,
      forecast12: 398,
      trend3: 14,
      trend6: -12,
      trend12: -10,
    },
    {
      name: "Användbarhetsexpert",
      num: 75,
      forecast3: 236,
      forecast6: 212,
      forecast12: 197,
      trend3: 8,
      trend6: 16,
      trend12: 14,
    },
    {
      name: "IT-säkerhetsspecialist",
      num: 33,
      forecast3: 145,
      forecast6: 112,
      forecast12: 90,
      trend3: 23,
      trend6: 19,
      trend12: 24,
    },
  ];

  return (
    <div className=" bg-[#fafafa] w-full h-full min-h-screen py-12">
      <article className="max-w-6xl px-4 mx-auto pt-24">
        <SearchBar placeholder="Sök yrken" />
        <Chart name="Frontend-utvecklare" data={mockupData} />
        <StatsCard month={-12} year={26} name="Frontend-utvecklare" />
        <FullTable
          data={occupationData}
          title="Namn"
          category="yrken"
        ></FullTable>
      </article>
    </div>
  );
};

export default OccupationsOverview;
