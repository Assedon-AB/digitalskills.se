import type { NextPage } from "next";
import AttentionCard from "../components/AttentionCard";
import Toplist from "../components/Toplist";

const Home: NextPage = () => {

  const skillData = [
    {
      name: 'React',
      num: 536,
      forecast: 637,
      trend: 19
    },
    {
      name: 'Javascript',
      num: 492,
      forecast: 594,
      trend: 20
    },
    {
      name: 'Cybersäkerhet',
      num: 457,
      forecast: 612,
      trend: 34
    },
    {
      name: 'Flutter',
      num: 249,
      forecast: 369,
      trend: 48
    },
    {
      name: 'Python',
      num: 399,
      forecast: 632,
      trend: 58
    },
    {
      name: 'Erlang',
      num: 200,
      forecast: 225,
      trend: 42
    },
    {
      name: '.Net',
      num: 159,
      forecast: 142,
      trend: -11
    },
    {
      name: 'C++',
      num: 143,
      forecast: 121,
      trend: -15
    },
    {
      name: 'F#',
      num: 96,
      forecast: 100,
      trend: 4
    },
    {
      name: 'Maskininlärning',
      num: 263,
      forecast: 600,
      trend: 228
    }

  ]

  const occupationData = [
    {
      name: 'Databasadministratör',
      num: 141,
      forecast: 243,
      trend: 72
    },
    {
      name: 'Front-endutvecklare',
      num: 499,
      forecast: 512,
      trend: 3
    },
    {
      name: 'IT-supporttekniker',
      num: 200,
      forecast: 183,
      trend: -8
    },
    {
      name: 'Back-endutvecklare',
      num: 233,
      forecast: 328,
      trend: 41
    },
    {
      name: 'Projektledare',
      num: 401,
      forecast: 412,
      trend: 3
    },
    {
      name: 'Full-stackutvecklare',
      num: 436,
      forecast: 539,
      trend: 24
    },
    {
      name: 'Systemadministratör',
      num: 212,
      forecast: 67,
      trend: -69
    },
    {
      name: 'QA-expert',
      num: 196,
      forecast: 178,
      trend: -10
    },
    {
      name: 'Användbarhetsexpert',
      num: 75,
      forecast: 236,
      trend: 314
    },
    {
      name: 'IT-säkerhetsspecialist',
      num: 33,
      forecast: 145,
      trend: 466
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
        <div className="flex flex-col sm:flex-row"><div className="flex flex-col w-12/12 sm:w-6/12"><h2 className="text-4xl ">Översikt</h2></div>
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
