import { render, screen } from "@testing-library/react";
import SmallCard from "../components/SmallCard";

describe("SmallCard", () => {
	describe("card gets passed href", () => {
		it("Should render corect text", () => {
			render(<SmallCard text="React" href="http://localhost/" />);

			const text = screen.getByText("React");
			expect(text).toBeInTheDocument();
		});

		it("Should render läs mer link with correct href", () => {
			render(<SmallCard text="React" href="http://localhost/" />);

			const text = screen.getByText("Läs mer");
			const href = text.getAttribute("href");
			expect(text).toBeInTheDocument();
			expect(href).toEqual("http://localhost/");
		});
	});

	describe("card gets passed no href", () => {
		it("Should render corect text", () => {
			render(<SmallCard text="React" />);

			const text = screen.getByText("React");
			expect(text).toBeInTheDocument();
		});

		it("Should not render läs mer link", () => {
			render(<SmallCard text="React" />);

			const text = screen.queryByText("Läs mer");
			expect(text).toBeNull();
		});
	});
});
