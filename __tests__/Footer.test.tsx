import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

describe("Footer", () => {
	it("Should be rendered with correct text and links", () => {
		render(<Footer />);

		expect(screen.getByText("<Digitalspetskompetens>")).toBeInTheDocument();
		expect(
			screen.getByText(
				"Tillväxtverket och Universitetskanslersämbetet har av regeringen fått i uppdrag att tillsammans analysera och föreslå hur kompetensförsörjningen av digital spetskompetens kan utvecklas både kort- och långsiktigt. Vi ska starta en dialog om samverkan mellan berörda aktörer, i syfte att öka tillgången på digital spetskompetens."
			)
		).toBeInTheDocument();

		const home = screen.getByText("Hem");
		expect(home).toBeInTheDocument();
		expect(home.getAttribute("href")).toEqual("/");

		const skills = screen.getByText("Kompetenser");
		expect(skills).toBeInTheDocument();
		expect(skills.getAttribute("href")).toEqual("/kompetenser");

		const occupations = screen.getByText("Yrken");
		expect(occupations).toBeInTheDocument();
		expect(occupations.getAttribute("href")).toEqual("/yrken");

		const about = screen.getByText("Om digitalspetskompetens");
		expect(about).toBeInTheDocument();
		expect(about.getAttribute("href")).toEqual("/om-digspec");

		const api = screen.getByText("API");
		expect(api).toBeInTheDocument();
		expect(api.getAttribute("href")).toEqual("/om-digspec");

		const github = screen.getByText("Github");
		expect(github).toBeInTheDocument();
		expect(github.getAttribute("href")).toEqual("/om-digspec");
	});
});
