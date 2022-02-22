const API_URL = process.env.API_URL ?? "http://localhost:4000/api/v1/";
const API_KEY = process.env.API_KEY ?? "";
const ORIGIN = process.env.ORIGIN ?? "http://locahost:3000";

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
      console.log(err);
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
      console.log(err);
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

export { getCompetencies, getOccupations, getOccupation, getCompetence };
