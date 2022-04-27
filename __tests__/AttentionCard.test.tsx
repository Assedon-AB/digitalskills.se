import { render, screen } from "@testing-library/react";
import AttentionCard from "../components/AttentionCard";

describe("AttentionCard", () => {
	it("Should be rendered with correct text", () => {
		render(<AttentionCard />);

		expect(screen.getByText("Hämtad senast")).toBeInTheDocument();
		expect(
			screen.getByText(
				"Datan hämtades senast 2022-01-01 och sträcker sig till 2021-12-31."
			)
		).toBeInTheDocument();
		expect(screen.getByText("Vad menas med trend?")).toBeInTheDocument();
		expect(
			screen.getByText(
				"Trenden räknas fram genom att jämföra senast uppmätta månadsvärde historiskt över trendperioderna."
			)
		).toBeInTheDocument();
		expect(screen.getByText("Vad menas med prognos?")).toBeInTheDocument();
		expect(
			screen.getByText(
				"Prognosen görs med hjälp av exponentiell utjämning över prognosperioderna framåt sett från senast uppmätta månadsvärde."
			)
		).toBeInTheDocument();
	});
});
