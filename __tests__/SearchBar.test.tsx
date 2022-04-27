import { render, screen } from "@testing-library/react";
import SearchBar from "../components/SearchBar";

describe("SearchBar", () => {
	describe("search gets passed placeholder 'Sök kompetenser'", () => {
		it("Should be rendered with correct placeholder", () => {
			render(
				<SearchBar
					handleSearch={() => null}
					placeholder="Sök kompetenser"
				/>
			);

			const searchBar = screen.getByPlaceholderText("Sök kompetenser");
			expect(searchBar).toBeInTheDocument();
		});
	});
});
