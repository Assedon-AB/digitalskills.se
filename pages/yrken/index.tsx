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
      name: 'Databasadministratör',
      num: 141,
      forecast: 243,
      trend: 72
    },
    {
      name: 'Front-endutvecklare',
      num: 499,
      forecast: 512,
      trend: 3
    },
    {
      name: 'IT-supporttekniker',
      num: 200,
      forecast: 183,
      trend: -8
    },
    {
      name: 'Back-endutvecklare',
      num: 233,
      forecast: 328,
      trend: 41
    },
    {
      name: 'Projektledare',
      num: 401,
      forecast: 412,
      trend: 3
    },
    {
      name: 'Full-stackutvecklare',
      num: 436,
      forecast: 539,
      trend: 24
    },
    {
      name: 'Systemadministratör',
      num: 212,
      forecast: 67,
      trend: -69
    },
    {
      name: 'QA-expert',
      num: 196,
      forecast: 178,
      trend: -10
    },
    {
      name: 'Användbarhetsexpert',
      num: 75,
      forecast: 236,
      trend: 314
    },
    {
      name: 'IT-säkerhetsspecialist',
      num: 33,
      forecast: 145,
      trend: 466
    }
  ]

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
