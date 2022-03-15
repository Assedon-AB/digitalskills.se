import type { NextPage } from "next";

import Chart from "../../components/Chart";
import StatsCard from "../../components/StatsCard";
import FullTable from "../../components/FullTable";

import { getCompetencies, getIndustry } from "../../lib/helpers";
import { mockupData } from "../../lib/mockupData";
import { DigspecData } from "../../interfaces/Digspec";
import { useEffect, useState } from "react";
import CompareMissingInfo from "../../components/CompareMissingInfo";
import CompareTable from "../../components/CompareTable";
import MetaTags from "../../components/MetaTags";

interface CompetencesPageProps {
  competencies: DigspecData[];
  industry: any;
}

const CompetencesOverview: NextPage<CompetencesPageProps> = ({
  competencies,
  industry,
}) => {
  const [compareList, setCompareList] = useState<any[]>([]);
  const [compareObjectList, setCompareObjectList] = useState<DigspecData[]>([])
  const [shomCompare, setShowCompare] = useState(false)
  const changeCompareList = (arg: string[]) => {
    console.log(compareList);
    setCompareList(arg);
    createCompareObjects()
    if (compareList.length > 0) {
      setShowCompare(true)
    }
    else {
      setShowCompare(false)
    }
  };

  const buildCompareComponent = () => {
    return <><h1 className="pt-8 pl-2 text-xl">Jämförelsetabell</h1><CompareTable data={compareObjectList} title={"Namn"} category={"kompetenser"} industry={industry} /></> ;
  }

  const createCompareObjects = () => {
    var tempCompareObjectsList: DigspecData[] = []
    for (const dIndex in compareList) {
      var dId  = compareList[dIndex]
      console.log(dId)
      var index = competencies.findIndex(x => x._id === dId)
      console.log(index)
      tempCompareObjectsList.push(competencies[index])
    }
    console.log(compareList)
    console.log(tempCompareObjectsList)
    setCompareObjectList(tempCompareObjectsList);
  }

  const buildCompareChart = () => {
    
    
    var name = ""
    const historyColorsBorder = ["rgb(99, 99, 255)", "rgb(200, 140, 200)"]
    const historyColorsBackground = ["rgba(99, 99, 255, 0.5)", "rgba(200, 140, 200, 0.5)"]
    const forecastColorsBorder = ["rgb(255, 99, 132)","rgb(140, 200, 132)"]
    const forecastColorsBackground = ["rgba(255, 99, 132, 0.5)","rgba(140, 200, 132, 0.5)"]
    var finalLables  = compareObjectList[0].ad_series.labels.concat(
      compareObjectList[0].prediction_series.month_12.labels
    )
    var datasetObjects = []

    for (let i = 0; i < compareObjectList.length; i++){
      if(i === 0) {
        name = compareObjectList[i].name
      }
      else{
        name = name + ", " + compareObjectList[i].name
      }
      var tempLabels = compareObjectList[i].ad_series.labels.concat(
        compareObjectList[i].prediction_series.month_12.labels
      )
      if(tempLabels.length > finalLables.length) {
        finalLables = [...tempLabels]
      }
      datasetObjects.push(
        {
          label: "Historisk data " + compareObjectList[i].name,
          data: compareObjectList[i].ad_series.values.map(
            (y, index) => ({
              y,
              x: compareObjectList[i].ad_series.labels[index],
            })),
          borderColor:historyColorsBorder[i],
          backgroundColor: historyColorsBackground[i],
        }
      )
      datasetObjects.push(
        {
          label: "Prognos " + compareObjectList[i].name,
          data: compareObjectList[i].prediction_series.month_12.values.map(
            (y, index) => ({
              y,
              x: compareObjectList[i].prediction_series.month_12.labels[index],
            })
          ),
          borderColor: forecastColorsBorder[i],
          borderDash: [20, 0],
          backgroundColor: forecastColorsBackground[i],
        }
      )

    }
    return <Chart
    name={name}
    data={{
      labels: finalLables,
      datasets: datasetObjects,
    }}
  />
  }

  

  return (
    <div className=" bg-[#fafafa] w-full h-full min-h-screen py-8">
        <MetaTags title="Kompetenser - Digitalspetskompetens" />
      <article className="max-w-6xl px-4 mx-auto pt-8">
      {compareList.length > 0 ? buildCompareChart(): null}
        {compareList.length > 0 ? buildCompareComponent(): <CompareMissingInfo/>}
        <h1 className="pt-16 pl-2 text-xl">Alla kompetenser</h1>
        <FullTable
          data={competencies}
          title="Namn"
          industry={industry}
          category="kompetenser"
          updateCompareList={changeCompareList}
          compareList={compareList}
        ></FullTable>
      </article>
    </div>
  );
};

export async function getStaticProps() {
  const competenciesRaw = await getCompetencies();
  const industry = await getIndustry();

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
      industry,
    },
  };
}

export default CompetencesOverview;
