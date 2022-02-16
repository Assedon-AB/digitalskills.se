import type { NextPage } from "next";

import SearchBar from "../../components/SearchBar";
import Chart from "../../components/Chart";
import StatsCard from "../../components/StatsCard";
import FullTable from "../../components/FullTable";

import { getCompetencies } from "../../lib/helpers";
import { mockupData } from "../../lib/mockupData";
import { DigspecData } from "../../interfaces/Digspec";

interface CompetencesPageProps {
  competencies: DigspecData[];
}

const CompetencesOverview: NextPage<CompetencesPageProps> = ({
  competencies,
}) => {
  return (
    <div className=" bg-[#fafafa] w-full h-full min-h-screen py-8">
      <article className="max-w-6xl px-4 mx-auto pt-8">
        {/* <SearchBar placeholder="Sök kompetenser" /> */}
        <Chart name="React" data={mockupData} />
        <StatsCard month={-12} year={26} name="React" />
        <FullTable
          data={competencies}
          title="Namn"
          category="kompetenser"
        ></FullTable>
      </article>
    </div>
  );
};

export async function getServerSideProps() {
  const competencies = await getCompetencies();

  return {
    props: {
      competencies: competencies.map((skill: any) => ({
        ...skill,
        num: skill.ad_series.values[skill.ad_series.values.length - 1] ?? null,
      })),
    },
  };
}

export default CompetencesOverview;
