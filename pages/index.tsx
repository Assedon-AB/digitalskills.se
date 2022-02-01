import type { NextPage } from "next";
import AttentionCard from "../components/AttentionCard";
import Toplist from "../components/Toplist";

const Home: NextPage = () => {

  const skillData = [
    {
      name: 'React',
      num: 536,
      forecast3: 637,
      forecast6: 612,
      forecast12: 644,
      trend3: 19,
      trend6: 12,
      trend12: 6
    },
    {
      name: 'Javascript',
      num: 492,
      forecast3: 594,
      forecast6: 546,
      forecast12: 563,
      trend3: 20,
      trend6: 12,
      trend12: 22,
    },
    {
      name: 'Cybersäkerhet',
      num: 457,
      forecast3: 612,
      forecast6: 590,
      forecast12: 601,
      trend3: 14,
      trend6: 20,
      trend12: 19,
    },
    {
      name: 'Flutter',
      num: 249,
      forecast3: 369,
      forecast6: 373,
      forecast12: 375,
      trend3: -6,
      trend6: 20,
      trend12: 48,
    },
    {
      name: 'Python',
      num: 399,
      forecast3: 590,
      forecast6: 493,
      forecast12: 632,
      trend3: 15,
      trend6: 31,
      trend12: 58,
    },
    {
      name: 'Erlang',
      num: 200,
      forecast3: 206,
      forecast6: 213,
      forecast12: 225,
      trend3: 8,
      trend6: 19,
      trend12: 42,
    },
    {
      name: '.Net',
      num: 159,
      forecast3: 131,
      forecast6: 150,
      forecast12: 142,
      trend3: -8,
      trend6: -16,
      trend12: -11,
    },
    {
      name: 'C++',
      num: 143,
      forecast3: 121,
      forecast6: 134,
      forecast12: 111,
      trend3: -1,
      trend6: 2,
      trend12: -15,
    },
    {
      name: 'F#',
      num: 96,
      forecast3: 100,
      forecast6: 113,
      forecast12: 109,
      trend3: 4,
      trend6: 20,
      trend12: 20,
    },
    {
      name: 'Maskininlärning',
      num: 263,
      forecast3: 313,
      forecast6: 363,
      forecast12: 398,
      trend3: 20,
      trend6: 26,
      trend12: 34,
    }

  ]

  const occupationData = [
    {
      name: 'Databasadministratör',
      num: 141,
      forecast3: 243,
      forecast6: 269,
      forecast12: 255,
      trend3: 21,
      trend6: 53,
      trend12: 72,
    },
    {
      name: 'Front-endutvecklare',
      num: 499,
      forecast3: 512,
      forecast6: 509,
      forecast12: 527,
      trend3: 12,
      trend6: -1,
      trend12: 5,
    },
    {
      name: 'IT-supporttekniker',
      num: 200,
      forecast3: 183,
      forecast6: 200,
      forecast12: 212,
      trend3: -3,
      trend6: -12,
      trend12: -8,
    },
    {
      name: 'Back-endutvecklare',
      num: 233,
      forecast3: 328,
      forecast6: 361,
      forecast12: 390,
      trend3: 26,
      trend6: 39,
      trend12: 41,
    },
    {
      name: 'Projektledare',
      num: 401,
      forecast3: 412,
      forecast6: 426,
      forecast12: 399,
      trend3: 11,
      trend6: 16,
      trend12: 13,
    },
    {
      name: 'Full-stackutvecklare',
      num: 436,
      forecast3: 539,
      forecast6: 501,
      forecast12: 496,
      trend3: 20,
      trend6: 26,
      trend12: 24,
    },
    {
      name: 'Systemadministratör',
      num: 212,
      forecast3: 67,
      forecast6: 363,
      forecast12: 398,
      trend3: 12,
      trend6: -26,
      trend12: -69,
    },
    {
      name: 'QA-expert',
      num: 196,
      forecast3: 178,
      forecast6: 363,
      forecast12: 398,
      trend3: 14,
      trend6: -12,
      trend12: -10,
    },
    {
      name: 'Användbarhetsexpert',
      num: 75,
      forecast3: 236,
      forecast6: 212,
      forecast12: 197,
      trend3: 8,
      trend6: 16,
      trend12: 14,
    },
    {
      name: 'IT-säkerhetsspecialist',
      num: 33,
      forecast3: 145,
      forecast6: 112,
      forecast12: 90,
      trend3: 23,
      trend6: 19,
      trend12: 24,
    }
  ]

  const attentionCardData = [
    {title: "Trend", description: "Jämför senaste månadsdata historisk bakåt."},
    {title: "Prognos", description: "Framskrivning görs med hjälp av exponentiell utjämning."},
    {title: "Hämtad senast", description: "Datan hämtades senast 2022-01-01 och sträcker sig till 2021-12-31."}
  ]


  return (
    <div className=" bg-slate-200 w-full h-full sm:px-4 lg:px-8">
      <article className="max-w-6xl flex flex-col min-h-screen mx-auto pt-16">
        <div className="flex flex-col sm:flex-row"><div className="flex flex-col w-12/12 sm:w-6/12"><h2 className="text-4xl ">Översikt</h2><p className="py-8 pr-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p></div>
        <div className="flex flex-col w-12/12 sm:w-6/12">
          {attentionCardData.map((dataObject) => (
            <div className="py-2 px4"><AttentionCard title={dataObject.title} description={dataObject.description}></AttentionCard></div>
    ))}
        
     </div>
        </div>
        
       
        <div className="flex flex-col xl:flex-row justify-between">
          <div className="flex flex-col">

            <Toplist data={skillData} title="Namn" category="Topplista kompetenser"></Toplist></div>
          <div className="flex flex-col">

            <Toplist data={occupationData} title="Namn" category="Topplista yrken"></Toplist></div>
        </div>
      </article>
    </div>
  )
};

export default Home;
