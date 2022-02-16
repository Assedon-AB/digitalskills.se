import type { NextPage } from "next";

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
  const competenciesRaw = await getCompetencies();

  let competencies = [];
  if (!competenciesRaw.hasOwnProperty("error")) {
    competencies = competenciesRaw.map((skill: any) => ({
      ...skill,
      num: skill.ad_series.values[skill.ad_series.values.length - 1] ?? null,
    }));
  }

  return {
    props: {
      competencies,
    },
  };
}

export default CompetencesOverview;
