import { render, screen } from "@testing-library/react";
import About from "../pages/om-digspec";

describe("About", () => {
  it("renders a heading", () => {
    render(<About />);

    const heading = screen.getByRole("heading", {
      name: /Om Digspec/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
