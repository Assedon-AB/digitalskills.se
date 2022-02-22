import type { NextPage } from "next";

import SearchBar from "../../components/SearchBar";
import Chart from "../../components/Chart";
import StatsCard from "../../components/StatsCard";
import FullTable from "../../components/FullTable";

import { mockupData } from "../../lib/mockupData";
import { getOccupations } from "../../lib/helpers";

import { DigspecData } from "../../interfaces/Digspec";

interface OccupationPageProps {
  occupations: DigspecData[];
}

const OccupationsOverview: NextPage<OccupationPageProps> = ({
  occupations,
}) => {
  return (
    <div className=" bg-[#fafafa] w-full h-full min-h-screen py-8">
      <article className="max-w-6xl px-4 mx-auto pt-8">
        <Chart
          name={occupations[0].name}
          data={{
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
                    x: occupations[0].prediction_series.month_12.labels[index],
                  })
                ),
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
              },
            ],
          }}
        />
        <StatsCard month={-12} year={26} name="Frontend-utvecklare" />
        <FullTable data={occupations} title="Namn" category="yrken"></FullTable>
      </article>
    </div>
  );
};

export async function getStaticProps() {
  const occupationsRaw = await getOccupations();

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
    },
  };
}

export default OccupationsOverview;
