import type { NextPage } from "next";

import Chart from "../../components/Chart";
import StatsCard from "../../components/StatsCard";
import FullTable from "../../components/FullTable";

import { mockupData } from "../../lib/mockupData";
import { getOccupations, getIndustry } from "../../lib/helpers";

import { DigspecData } from "../../interfaces/Digspec";
import { useState } from "react";

interface OccupationPageProps {
  occupations: DigspecData[];
  industry: any;
}

const OccupationsOverview: NextPage<OccupationPageProps> = ({
  occupations,
  industry,
}) => {
  const [compareList, setCompareList] = useState<any[]>([]);
  const changeCompareList = (arg: string[]) => {
    setCompareList(arg);
  };
  return (
    <div className=" bg-[#fafafa] w-full h-full min-h-screen py-8">
      <article className="max-w-6xl px-4 mx-auto pt-8">
        <Chart
          name={occupations[0] ? occupations[0]?.name : "Yrken"}
          data={
            occupations[0]
              ? {
                  labels: occupations[0].ad_series.labels.concat(
                    occupations[0].prediction_series.month_12.labels
                  ),
                  datasets: [
                    {
                      label: "Historisk data",
                      data: occupations[0].ad_series.values,
                      borderColor: "rgb(99, 99, 255)",
                      backgroundColor: "rgba(99, 99, 255, 0.5)",
                    },
                    {
                      label: "Prognos",
                      data: occupations[0].prediction_series.month_12.values.map(
                        (y, index) => ({
                          y,
                          x: occupations[0].prediction_series.month_12.labels[
                            index
                          ],
                        })
                      ),
                      borderColor: "rgb(255, 99, 132)",
                      borderDash: [10, 5],
                      backgroundColor: "rgba(255, 99, 132, 0.5)",
                    },
                  ],
                }
              : mockupData
          }
        />
        <StatsCard
          month={occupations[0].trend_percentages.month_3}
          month6={occupations[0].trend_percentages.month_6}
          year={occupations[0].trend_percentages.month_12}
          industryYear={industry.trend_percentages.month_12}
          industryMonth6={industry.trend_percentages.month_6}
          industryMonth={industry.trend_percentages.month_6}
          name={occupations[0].name}
        />
        <FullTable
          data={occupations}
          industry={industry}
          title="Namn"
          category="yrken"
          updateCompareList={changeCompareList}
          compareList={compareList}
        ></FullTable>
      </article>
    </div>
  );
};

export async function getStaticProps() {
  const occupationsRaw = await getOccupations();
  const industry = await getIndustry();

  let occupations = [];
  if (!occupationsRaw.hasOwnProperty("error")) {
    occupations = occupationsRaw.map((occupation: any) => ({
      ...occupation,
      num:
        occupation.ad_series.values[occupation.ad_series.values.length - 1] ??
        null,
    }));
  }

  return {
    props: {
      occupations,
      industry,
    },
  };
}

export default OccupationsOverview;
