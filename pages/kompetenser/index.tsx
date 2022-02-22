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
        <Chart
          name={competencies[0].name}
          data={{
            labels: competencies[0].ad_series.labels.concat(
              competencies[0].prediction_series.month_12.labels
            ),
            datasets: [
              {
                label: "Historisk data",
                data: competencies[0].ad_series.values,
                borderColor: "rgb(99, 99, 255)",
                backgroundColor: "rgba(99, 99, 255, 0.5)",
              },
              {
                label: "Prognos",
                data: competencies[0].prediction_series.month_12.values.map(
                  (y, index) => ({
                    y,
                    x: competencies[0].prediction_series.month_12.labels[index],
                  })
                ),
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
              },
            ],
          }}
        />
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

export async function getStaticProps() {
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
