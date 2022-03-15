import type { NextPage } from "next";

import Chart from "../../components/Chart";
import StatsCard from "../../components/StatsCard";
import FullTable from "../../components/FullTable";

import { mockupData } from "../../lib/mockupData";
import { getOccupations, getIndustry } from "../../lib/helpers";

import { DigspecData } from "../../interfaces/Digspec";
import { useState } from "react";
import CompareTable from "../../components/CompareTable";
import CompareMissingInfo from "../../components/CompareMissingInfo";
import MetaTags from "../../components/MetaTags";

interface OccupationPageProps {
  occupations: DigspecData[];
  industry: any;
}

const OccupationsOverview: NextPage<OccupationPageProps> = ({
  occupations,
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
    return <><h1 className="pt-16 pl-2 text-xl">Uppdaterade grafer kommer snart.</h1><h1 className="pt-16 pl-2 text-xl">Jämförelsetabell</h1><CompareTable data={compareObjectList} title={"Namn"} category={"yrken"} industry={industry} /></> ;
  }

  const createCompareObjects = () => {
    var tempCompareObjectsList: DigspecData[] = []
    for (const dIndex in compareList) {
      var dId  = compareList[dIndex]
      console.log(dId)
      var index = occupations.findIndex(x => x._id === dId)
      console.log(index)
      tempCompareObjectsList.push(occupations[index])
    }
    console.log(compareList)
    console.log(tempCompareObjectsList)
    setCompareObjectList(tempCompareObjectsList);
  }
  return (
    <div className=" bg-[#fafafa] w-full h-full min-h-screen py-8">
        <MetaTags title="Yrken - Digitalspetskompetens" />
      <article className="max-w-6xl px-4 mx-auto pt-8">
      {compareList.length > 0 ? buildCompareComponent(): <CompareMissingInfo/>}
        <h1 className="pt-16 pl-2 text-xl">Alla yrken</h1>
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
