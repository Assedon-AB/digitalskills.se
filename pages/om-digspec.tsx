import type { NextPage } from "next";
import MetaTags from "../components/MetaTags";

const Home: NextPage = () => {
  return (
    <div className=" bg-[#fafafa] w-full h-full ">
        <MetaTags title="Om digitalspetskompetens" />
    <article className="max-w-6xl mx-auto px-4 min-h-screen pt-16">
      <h1 className="text-4xl">Om Digspec</h1>
      <h2 className="text-2xl">Analytics</h2>
      <h2 className="text-2xl">Api-hälsa</h2>
    </article>
    </div>
  );
};

export default Home;
