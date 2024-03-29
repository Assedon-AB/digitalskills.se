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
	"637d95f358ae119c35da7dea",
	"63f572aeddf2065353dfce32",
	"644ef6ae35fbf3882c4fd2a9",
	"64dcd061cbad1e5c138e0e48",
	"64dcd029cbad1e5c138e0934",
	"64dcd010cbad1e5c138e072c",
	"65a732322a7a0d3c14e79850",
	"65a732652a7a0d3c14e79dc8",
	"65c189ed5ed5103ff7eb145f",
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
	"64dcd1c7cbad1e5c138e41e0",
	"65a733d12a7a0d3c14e7d566",
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
			return err;
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
			return err;
		});

	if (!competence.num) {
		return { error: "No num" };
	}

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
			return err;
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
			return err;
		});

	if (!occupation.num) {
		return { error: "No num" };
	}

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
			return err;
		});

	if (!industry.num) {
		return { error: "No num" };
	}

	return industry;
};

const transformLink = (name: string, id: string) =>
	`${encodeURIComponent(
		name
			.replace(/\s*/g, "")
			.replace(/#/g, "")
			.replace(/\+/g, "")
			.replace(/å/g, "a")
			.replace(/ä/g, "a")
			.replace(/ö/g, "o")
	)}-${id}`;

export {
	getCompetencies,
	getOccupations,
	getOccupation,
	getCompetence,
	getIndustry,
	transformLink,
};
