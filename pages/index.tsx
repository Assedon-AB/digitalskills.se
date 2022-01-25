import type { NextPage } from "next";
import Toplist from "../components/Toplist";

const Home: NextPage = () => {

  const data = [
    {
      name: 'Jane Cooper',
      num: '132',
      forecast: '247',
    },
    {
      name: 'Jane Cooper',
      num: '245',
      forecast: '329',
    },
    {
      name: 'Jane Cooper',
      num: '564',
      forecast: '632',
      }
    // More people...
  ]
  

  return (
  <div className=" bg-sky-200 w-full h-full px-8 lg:px-8">
    <article className="max-w-6xl flex flex-col min-h-screen mx-auto pt-16">
    <h2 className="text-4xl">Översikt</h2>
    <h3 className="text-2xl py-8">Info</h3>
    <div className="flex flex-col lg:flex-row justify-between">
      <div className="flex flex-col">
      <h3 className="text-2xl py-4">Topplista kompetenser</h3>
        <Toplist data={data} title="Namn"></Toplist></div>
        <div className="flex flex-col">
      <h3 className="text-2xl py-4">Topplista yrken</h3>
        <Toplist data={data} title="Namn"></Toplist></div>
      </div>
    </article>
  </div>
  )};

export default Home;
