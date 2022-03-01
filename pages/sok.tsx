import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { getCompetencies, getOccupations } from "../lib/helpers";
import { DigspecData } from "../interfaces/Digspec";

import SearchBar from "../components/SearchBar";
import SmallCard from "../components/SmallCard";

const levenshteinDistance = (s: string, t: string) => {
  if (!s.length) return t.length;
  if (!t.length) return s.length;
  const arr = [];
  for (let i = 0; i <= t.length; i++) {
    arr[i] = [i];
    for (let j = 1; j <= s.length; j++) {
      arr[i][j] =
        i === 0
          ? j
          : Math.min(
              arr[i - 1][j] + 1,
              arr[i][j - 1] + 1,
              arr[i - 1][j - 1] + (s[j - 1] === t[i - 1] ? 0 : 1)
            );
    }
  }
  return arr[t.length][s.length];
};

interface SearchPageProps {
  competencies: DigspecData[];
  occupations: DigspecData[];
}

const SearchPage: NextPage<SearchPageProps> = ({
  competencies,
  occupations,
}) => {
  const [results, setResults] = useState<DigspecData[]>([]);
  const router = useRouter();

  useEffect(() => {
    const { q } = router.query;
    if (q && typeof q === "string") {
      handleSearch(q);
    }
  }, [router]);

  const handleSearch = (q: string) => {
    const res: DigspecData[] = [];
    competencies.forEach((competence) => {
      if (
        levenshteinDistance(competence.name.toLowerCase(), q.toLowerCase()) <=
          2 ||
        competence.name.toLowerCase().includes(q)
      ) {
        res.push({
          ...competence,
          href: `/kompetenser/${competence.name}-${competence._id}`,
        });
      }
    });

    occupations.forEach((occupation) => {
      if (
        levenshteinDistance(occupation.name.toLowerCase(), q.toLowerCase()) <=
          2 ||
        occupation.name.toLowerCase().includes(q)
      ) {
        res.push({
          ...occupation,
          href: `/yrken/${occupation.name}-${occupation._id}`,
        });
      }
    });
    console.log(res);
    setResults(res);
  };

  return (
    <div className=" bg-[#fafafa] w-full h-full min-h-screen py-8">
      <article className="max-w-6xl px-4 mx-auto pt-8">
        <h1 className="text-3xl mb-8">Sök</h1>
        <SearchBar
          placeholder="Sök efter kompetens eller yrke"
          handleSearch={handleSearch}
        />
        <h2 className="text-2xl mb-4">Resultat</h2>
        {results.map((r) => (
          <SmallCard
            key={`search-result-${r._id}`}
            text={r.name}
            href={r.href}
          />
        ))}
      </article>
    </div>
  );
};

export default SearchPage;

export async function getStaticProps() {
  const competenciesRaw: DigspecData[] = await getCompetencies();
  const occupationsRaw: DigspecData[] = await getOccupations();

  let competencies: DigspecData[] = [];
  if (!competenciesRaw.hasOwnProperty("error")) {
    competencies = competenciesRaw.sort((a, b) => b.num - a.num).slice(0, 100);
  }

  let occupations: DigspecData[] = [];
  if (!occupationsRaw.hasOwnProperty("error")) {
    occupations = occupationsRaw
      .filter((s) => s.model)
      .sort((a, b) => b.num - a.num)
      .slice(0, 100);
  }

  return {
    props: {
      competencies,
      occupations,
    },
  };
}
