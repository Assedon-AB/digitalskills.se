import type { NextPage } from "next";

import Chart from "../../components/Chart";
import FullTable from "../../components/FullTable";

import { getOccupations, getIndustry, OCCUPATION_IDS_TO_HIDE } from "../../lib/helpers";

import { DigspecData, IndustryData } from "../../interfaces/Digspec";
import { Fragment, useState } from "react";
import CompareTable from "../../components/CompareTable";
import CompareMissingInfo from "../../components/CompareMissingInfo";
import MetaTags from "../../components/MetaTags";
import { Dialog, Transition } from "@headlessui/react";

interface OccupationPageProps {
  occupations: DigspecData[];
  industry: IndustryData;
}

const OccupationsOverview: NextPage<OccupationPageProps> = ({
  occupations,
  industry,
}) => {
  const [compareList, setCompareList] = useState<string[]>([]);
  const [compareObjectList, setCompareObjectList] = useState<DigspecData[]>([])
  const [shomCompare, setShowCompare] = useState(false)
  let [isOpen, setIsOpen] = useState(false)
  const changeCompareList = (arg: string[]) => {
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
    return <><h1 className="pt-16 pl-2 text-xl">Jämförelsetabell</h1><CompareTable data={compareObjectList} title={"Namn"} category={"yrken"} industry={industry} /></> ;
  }

  function openModal() {
    setIsOpen(true)
  }

  const createCompareObjects = () => {
    var tempCompareObjectsList: DigspecData[] = []
    for (const dIndex in compareList) {
      var dId  = compareList[dIndex]
      var index = occupations.findIndex(x => x._id === dId)
      tempCompareObjectsList.push(occupations[index])
    }
    setCompareObjectList(tempCompareObjectsList);
  }

  const buildCompareChart = () => {
    var name = ""
    const historyColorsBorder = ["rgb(0,77,64)", "rgb(191,54,12)", "rgb(74,20,140)", "rgb(13,71,161)", "rgb(62,39,35)"]
    const historyColorsBackground = ["rgb(0,77,64, 0.5)", "rgb(191,54,12, 0.5)", "rgb(74,20,140, 0.5)", "rgb(13,71,161, 0.5)", "rgb(62,39,35, 0.5)"]
    const forecastColorsBorder = ["rgb(0,121,107)","rgb(221,44,0)", "rgb(171,71,188)", "rgb(25,118,210)", "rgb(109,76,65)"]
    const forecastColorsBackground = ["rgb(0,121,107, 0.5)","rgb(221,44,0, 0.5)", "rgb(171,71,188, 0.5)","rgb(25,118,210, 0.5)", "rgb(109,76,65, 0.5)"]
    var finalLables  = compareObjectList[0].ad_series.labels.concat(
      compareObjectList[0].prediction_series.month_18.labels
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
        compareObjectList[i].prediction_series.month_18.labels
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
          data: compareObjectList[i].prediction_series.month_18.values.map(
            (y, index) => ({
              y,
              x: compareObjectList[i].prediction_series.month_18.labels[index],
            })
          ),
          borderColor: forecastColorsBorder[i], borderDash: [5, 4],
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
        <MetaTags title="Yrken"/>
      <article className="max-w-6xl px-4 mx-auto pt-8">
     

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setIsOpen(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Maxantal för jämförelse uppnått
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    För tillfället är det möjligt att jämföra max 5 yrken. För att rensa jämförelsetabellen, klicka rensa under Jämför på huvudtabellen.
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={() => setIsOpen(false)}
                  >
                    OK!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      {compareList.length > 0 ? buildCompareChart(): null}
      {compareList.length > 0 ? buildCompareComponent(): <CompareMissingInfo category="yrken"/>}
        <h1 className="pt-16 pl-2 text-xl">Alla yrken</h1>
        <FullTable
          data={occupations}
          industry={industry}
          title="Namn"
          category="yrken"
          updateCompareList={changeCompareList}
          compareList={compareList}
          showModal = {openModal}
        ></FullTable>
      </article>
    </div>
  );
};

export async function getStaticProps() {
    const occupationsRaw: DigspecData[] = await getOccupations();
  const industry = await getIndustry();

    let occupations: DigspecData[] = [];
  if (!occupationsRaw.hasOwnProperty("error")) {
      occupations = occupationsRaw.filter((o => !OCCUPATION_IDS_TO_HIDE.includes(o._id))).sort((a, b) => b.num - a.num).slice(0, 5000);
  }

  return {
    props: {
      occupations,
      industry,
    },
  };
}

export default OccupationsOverview;
