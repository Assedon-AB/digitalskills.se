import type { NextPage } from "next";
import Toplist from "../components/Toplist";

const Home: NextPage = () => {

  const skillData = [
    {
      name: 'React',
      num: 536,
      forecast: 637,
    },
    {
      name: 'Javascript',
      num: 492,
      forecast: 594,
    },
    {
      name: 'Cybersäkerhet',
      num: 457,
      forecast: 612,
    },
    {
      name: 'Flutter',
      num: 249,
      forecast: 369,
    },
    {
      name: 'Python',
      num: 399,
      forecast: 632,
    },
    {
      name: 'Erlang',
      num: 200,
      forecast: 225,
    },
    {
      name: '.Net',
      num: 159,
      forecast: 142,
    },
    {
      name: 'C++',
      num: 143,
      forecast: 121,
    },
    {
      name: 'F#',
      num: 96,
      forecast: 100,
    },
    {
      name: 'Maskininlärning',
      num: 263,
      forecast: 600,
    }
    // More people...
  ]

  const occupationData = [
    {
      name: 'Databasadministratör',
      num: 141,
      forecast: 243,
    },
    {
      name: 'Front-endutvecklare',
      num: 499,
      forecast: 512,
    },
    {
      name: 'IT-supporttekniker',
      num: 200,
      forecast: 183,
    },
    {
      name: 'Back-endutvecklare',
      num: 233,
      forecast: 328,
    },
    {
      name: 'Projektledare',
      num: 401,
      forecast: 412,
    },
    {
      name: 'Full-stackutvecklare',
      num: 436,
      forecast: 539,
    },
    {
      name: 'Systemadministratör',
      num: 212,
      forecast: 67,
    },
    {
      name: 'QA-expert',
      num: 196,
      forecast: 178,
    },
    {
      name: 'Användbarhetsexpert',
      num: 75,
      forecast: 236,
    },
    {
      name: 'IT-säkerhetsspecialist',
      num: 33,
      forecast: 145,
    }
    // More people...
  ]


  return (
    <div className=" bg-slate-200 w-full h-full px-4 lg:px-8">
      <article className="max-w-6xl flex flex-col min-h-screen mx-auto pt-16">
        <h2 className="text-4xl px-4">Översikt</h2>
        <h3 className="text-2xl px-5 py-8">Info</h3>
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
