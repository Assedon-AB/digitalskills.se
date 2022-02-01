import { render, screen } from "@testing-library/react";
import StatsCard from "../components/StatsCard";

describe("StatsCard", () => {
  describe("stats card gets 'React' as name passed", () => {
    it("should render correct box headlines", () => {
      render(<StatsCard year={30} month={20} name={"React"} />);

      const monthText = screen.getByText((_, node) => {
        if (node) {
          const hasText = (node: Element) =>
            node.textContent === "Tillväxt React senaste månaden.";
          const nodeHasText = hasText(node);
          const childrenDontHaveText = Array.from(node.children).every(
            (child) => !hasText(child)
          );

          return nodeHasText && childrenDontHaveText;
        }
        return false;
      });

      const yearText = screen.getByText((_, node) => {
        if (node) {
          const hasText = (node: Element) =>
            node.textContent === "Tillväxt React senaste året.";
          const nodeHasText = hasText(node);
          const childrenDontHaveText = Array.from(node.children).every(
            (child) => !hasText(child)
          );

          return nodeHasText && childrenDontHaveText;
        }
        return false;
      });

      expect(monthText).toBeInTheDocument();
      expect(yearText).toBeInTheDocument();
    });
  });

  describe("Stats card gets positive year and month values", () => {
    it("should add a + before value", () => {
      render(<StatsCard year={30} month={20} name={"React"} />);

      const monthValueText = screen.getByText("+20%");

      const yearValueText = screen.getByText("+30%");

      expect(monthValueText).toBeInTheDocument();

      expect(yearValueText).toBeInTheDocument();
    });

    it("should display value with green text", () => {
      render(<StatsCard year={30} month={20} name={"React"} />);

      const monthValueTextClass = screen
        .getByText("+20%")
        .getAttribute("class");
      const yearValueTextClass = screen.getByText("+30%").getAttribute("class");

      expect(monthValueTextClass).toContain("text-green-500");
      expect(yearValueTextClass).toContain("text-green-500");
    });
  });

  describe("Stats card gets negative year and month values", () => {
    it("should display value with - before value", () => {
      render(<StatsCard year={-30} month={-20} name={"React"} />);

      const monthValueText = screen.getByText("-20%");

      const yearValueText = screen.getByText("-30%");

      expect(monthValueText).toBeInTheDocument();

      expect(yearValueText).toBeInTheDocument();
    });

    it("should display value with red text", () => {
      render(<StatsCard year={-30} month={-20} name={"React"} />);

      const monthValueTextClass = screen
        .getByText("-20%")
        .getAttribute("class");
      const yearValueTextClass = screen.getByText("-30%").getAttribute("class");

      expect(monthValueTextClass).toContain("text-red-500");
      expect(yearValueTextClass).toContain("text-red-500");
    });
  });
});
