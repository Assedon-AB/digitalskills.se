import type { NextPage } from "next";
import Toplist from "../components/Toplist";

const Home: NextPage = () => {

  const people = [
    {
      name: 'Jane Cooper',
      title: '132',
     
      role: 'Admin',

      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Jane Cooper',
      title: '245',
     
      role: 'Admin',
   
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Jane Cooper',
      title: '564',
   
      role: 'Admin',

      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
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
        <Toplist people={people} title="Namn"></Toplist></div>
        <div className="flex flex-col">
      <h3 className="text-2xl py-4">Topplista yrken</h3>
        <Toplist people={people} title="Namn"></Toplist></div>
      </div>
    </article>
  </div>
  )};

export default Home;
