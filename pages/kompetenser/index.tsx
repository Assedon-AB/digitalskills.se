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
    return <><h1 className="pt-16 pl-2 text-xl">Uppdaterade grafer kommer snart.</h1><h1 className="pt-16 pl-2 text-xl">Jämförelsetabell</h1><CompareTable data={compareObjectList} title={"Namn"} category={"kompetenser"} industry={industry} /></> ;
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

  

  return (
    <div className=" bg-[#fafafa] w-full h-full min-h-screen py-8">
      <article className="max-w-6xl px-4 mx-auto pt-8">
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
