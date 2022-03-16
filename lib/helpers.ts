const API_URL = process.env.API_URL ?? "http://localhost:4000/api/v1/";
const API_KEY = process.env.API_KEY ?? "";
const ORIGIN = process.env.ORIGIN ?? "http://locahost:3000";

export const SKILL_IDS_TO_HIDE = [
    "622c249b7d1e6c1e90b4b54c",
    "622c249a7d1e6c1e90b4b516",
    "622c24b47d1e6c1e90b4bb46",
    "622c249e7d1e6c1e90b4b609",
    "622c24af7d1e6c1e90b4b9e7",
    "622c24ab7d1e6c1e90b4b8e2",
    "622c249c7d1e6c1e90b4b58b",
]

export const OCCUPATION_IDS_TO_HIDE = [
    "622c2a0e7d1e6c1e90b71be6",
    "622c2a017d1e6c1e90b717a5",
    "622c2a037d1e6c1e90b71811",
    "622c2a0c7d1e6c1e90b71b44"
]


const getCompetencies = async () => {
  const competencies = await fetch(API_URL + "kompetenser", {
    headers: {
      "x-api-key": API_KEY,
      Origin: ORIGIN,
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log("Error:", err);
      return [];
    });

  return competencies;
};

const getCompetence = async (competenceId: string) => {
  const competence = await fetch(API_URL + "kompetenser/" + competenceId, {
    headers: {
      "x-api-key": API_KEY,
      Origin: ORIGIN,
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
      return [];
    });

  return competence;
};

const getOccupations = async () => {
  const competencies = await fetch(API_URL + "yrken", {
    headers: {
      "x-api-key": API_KEY,
      Origin: ORIGIN,
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log("Error:", err);
      return [];
    });

  return competencies;
};

const getOccupation = async (occupationId: string) => {
  const occupation = await fetch(API_URL + "yrken/" + occupationId, {
    headers: {
      "x-api-key": API_KEY,
      Origin: ORIGIN,
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
      return [];
    });

  return occupation;
};

const getIndustry = async () => {
  const industry = await fetch(API_URL + "bransch", {
    headers: {
      "x-api-key": API_KEY,
      Origin: ORIGIN,
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
      return null;
    });

  return industry;
};

export {
  getCompetencies,
  getOccupations,
  getOccupation,
  getCompetence,
  getIndustry,
};
