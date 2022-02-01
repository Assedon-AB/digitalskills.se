import type { NextPage } from "next";

import SearchBar from "../../components/SearchBar";
import Chart from "../../components/Chart";
import StatsCard from "../../components/StatsCard";
import FullTable from "../../components/FullTable";

import { mockupData } from "../../lib/mockupData";

const CompetencesOverview: NextPage = () => {

  const skillData = [
    {
      name: 'React',
      num: 536,
      forecast: 637,
      trend: 19
    },
    {
      name: 'Javascript',
      num: 492,
      forecast: 594,
      trend: 20
    },
    {
      name: 'Cybersäkerhet',
      num: 457,
      forecast: 612,
      trend: 34
    },
    {
      name: 'Flutter',
      num: 249,
      forecast: 369,
      trend: 48
    },
    {
      name: 'Python',
      num: 399,
      forecast: 632,
      trend: 58
    },
    {
      name: 'Erlang',
      num: 200,
      forecast: 225,
      trend: 42
    },
    {
      name: '.Net',
      num: 159,
      forecast: 142,
      trend: -11
    },
    {
      name: 'C++',
      num: 143,
      forecast: 121,
      trend: -15
    },
    {
      name: 'F#',
      num: 96,
      forecast: 100,
      trend: 4
    },
    {
      name: 'Maskininlärning',
      num: 263,
      forecast: 600,
      trend: 228
    }

  ]
  return (
    <div className="bg-slate-200 w-full h-full min-h-screen py-12">
      <article className="max-w-6xl px-4 mx-auto pt-24">
        <SearchBar placeholder="Sök kompetenser" />
        <Chart name="React" data={mockupData} />
        <StatsCard month={-12} year={26} name="React" />
      </article>
    </div>
  );
};

export default CompetencesOverview;
