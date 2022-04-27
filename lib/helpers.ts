const API_URL = process.env.API_URL ?? "http://localhost:4000/api/v1/";
const API_KEY = process.env.API_KEY ?? "";
const ORIGIN = process.env.ORIGIN ?? "http://locahost:3000";

export const SKILL_IDS_TO_HIDE = [
	"623ba5e039d0d1cfd8c06638",
	"623ba5f039d0d1cfd8c0689c",
	"623ba5e139d0d1cfd8c06662",
	"623ba5df39d0d1cfd8c06614",
	"623ba5f939d0d1cfd8c06a34",
	"623ba5f439d0d1cfd8c0694a",
	"623ba5e939d0d1cfd8c06776",
];

export const OCCUPATION_IDS_TO_HIDE = [
	"623babd639d0d1cfd8c1fff4",
	"623babca39d0d1cfd8c1fd66",
	"623babd439d0d1cfd8c1ff88",
	"623babe139d0d1cfd8c20294",
	"623babd539d0d1cfd8c1ff94",
	"623babdb39d0d1cfd8c20114",
	"623babea39d0d1cfd8c204aa",
	"623babea39d0d1cfd8c204aa",
	"623babd139d0d1cfd8c1fee6",
];

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

const transformLink = (name: string, id: string) =>
	`${encodeURIComponent(
		name
			.replace(" ", "")
			.replace("#", "")
			.replace("å", "a")
			.replace("ä", "a")
			.replace("ö", "o")
	)}-${id}`;

export {
	getCompetencies,
	getOccupations,
	getOccupation,
	getCompetence,
	getIndustry,
	transformLink,
};
