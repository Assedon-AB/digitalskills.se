import { render, screen } from "@testing-library/react";
import StatsCard from "../components/StatsCard";

describe("StatsCard", () => {
  describe("stats card gets 'React' as name passed", () => {
    it("should render correct box headlines", () => {
      render(<StatsCard month={10} month6={20} year={30} industryYear={31} industryMonth={11} industryMonth6={21} name={"React"} />);

      const monthText = screen.getByText((_, node) => {
        if (node) {
          const hasText = (node: Element) =>
            node.textContent === "React senaste 3 mån.";
          const nodeHasText = hasText(node);
          const childrenDontHaveText = Array.from(node.children).every(
            (child) => !hasText(child)
          );

          return nodeHasText && childrenDontHaveText;
        }
        return false;
      });

      const month6Text = screen.getByText((_, node) => {
        if (node) {
          const hasText = (node: Element) =>
            node.textContent === "React senaste 6 mån.";
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
            node.textContent === "React senaste 12 mån.";
          const nodeHasText = hasText(node);
          const childrenDontHaveText = Array.from(node.children).every(
            (child) => !hasText(child)
          );

          return nodeHasText && childrenDontHaveText;
        }
        return false;
      });

      const industryMonthText = screen.getByText((_, node) => {
        if (node) {
          const hasText = (node: Element) =>
            node.textContent === "Branschen senaste 3 mån.";
          const nodeHasText = hasText(node);
          const childrenDontHaveText = Array.from(node.children).every(
            (child) => !hasText(child)
          );

          return nodeHasText && childrenDontHaveText;
        }
        return false;
      });

      const industryMonth6Text = screen.getByText((_, node) => {
        if (node) {
          const hasText = (node: Element) =>
            node.textContent === "React senaste 6 mån.";
          const nodeHasText = hasText(node);
          const childrenDontHaveText = Array.from(node.children).every(
            (child) => !hasText(child)
          );

          return nodeHasText && childrenDontHaveText;
        }
        return false;
      });

      const industryYearText = screen.getByText((_, node) => {
        if (node) {
          const hasText = (node: Element) =>
            node.textContent === "React senaste 12 mån.";
          const nodeHasText = hasText(node);
          const childrenDontHaveText = Array.from(node.children).every(
            (child) => !hasText(child)
          );

          return nodeHasText && childrenDontHaveText;
        }
        return false;
      });

      expect(monthText).toBeInTheDocument();
      expect(month6Text).toBeInTheDocument();
      expect(yearText).toBeInTheDocument();

      expect(industryMonthText).toBeInTheDocument();
      expect(industryMonth6Text).toBeInTheDocument();
      expect(industryYearText).toBeInTheDocument();
    });
  });

  describe("Stats card gets positive year and month values", () => {
    it("should add a + before value", () => {
      render(<StatsCard month={10} month6={20} year={30} industryYear={31} industryMonth={11} industryMonth6={21} name={"React"} />);

      const monthValueText = screen.getByText("+10.0%");
      const month6ValueText = screen.getByText("+20.0%");
      const yearValueText = screen.getByText("+30.0%");

      const industryMonthValueText = screen.getByText("+11.0%");
      const industryMonth6ValueText = screen.getByText("+21.0%");
      const industryYearValueText = screen.getByText("+31.0%");

      expect(industryMonthValueText).toBeInTheDocument();
      expect(industryMonth6ValueText).toBeInTheDocument();
      expect(industryYearValueText).toBeInTheDocument();

      expect(monthValueText).toBeInTheDocument();
      expect(month6ValueText).toBeInTheDocument();
      expect(yearValueText).toBeInTheDocument();
    });

    it("should display value with green text", () => {
      render(<StatsCard month={10} month6={20} year={30} industryYear={31} industryMonth={11} industryMonth6={21} name={"React"} />);

      const monthValueTextClass = screen
        .getByText("+10.0%")
        .getAttribute("class");
      const month6ValueTextClass = screen
        .getByText("+20.0%")
        .getAttribute("class");
      const yearValueTextClass = screen.getByText("+30.0%").getAttribute("class");

      const industryMonthValueTextClass = screen
        .getByText("+11.0%")
        .getAttribute("class");
      const industryMonth6ValueTextClass = screen
        .getByText("+21.0%")
        .getAttribute("class");
      const industryYearValueTextClass = screen.getByText("+31.0%").getAttribute("class");

      expect(industryMonthValueTextClass).toContain("text-green-500");
      expect(industryMonth6ValueTextClass).toContain("text-green-500");
      expect(industryYearValueTextClass).toContain("text-green-500");

      expect(monthValueTextClass).toContain("text-green-500");
      expect(month6ValueTextClass).toContain("text-green-500");
      expect(yearValueTextClass).toContain("text-green-500");
    });
  });

  describe("Stats card gets negative year and month values", () => {
    it("should display value with - before value", () => {
      render(<StatsCard month={-10} month6={-20} year={-30} industryYear={-31} industryMonth={-11} industryMonth6={-21} name={"React"} />);


      const monthValueText = screen.getByText("-10.0%");
      const month6ValueText = screen.getByText("-20.0%");
      const yearValueText = screen.getByText("-30.0%");

      const industryMonthValueText = screen.getByText("-11.0%");
      const industryMonth6ValueText = screen.getByText("-21.0%");
      const industryYearValueText = screen.getByText("-31.0%");

      expect(industryMonthValueText).toBeInTheDocument();
      expect(industryMonth6ValueText).toBeInTheDocument();
      expect(industryYearValueText).toBeInTheDocument();

      expect(monthValueText).toBeInTheDocument();
      expect(month6ValueText).toBeInTheDocument();
      expect(yearValueText).toBeInTheDocument();
    });

    it("should display value with red text", () => {
      render(<StatsCard month={-10} month6={-20} year={-30} industryYear={-31} industryMonth={-11} industryMonth6={-21} name={"React"} />);

      const monthValueTextClass = screen
        .getByText("-10.0%")
        .getAttribute("class");
      const month6ValueTextClass = screen
        .getByText("-20.0%")
        .getAttribute("class");
      const yearValueTextClass = screen.getByText("-30.0%").getAttribute("class");

      const industryMonthValueTextClass = screen
        .getByText("-11.0%")
        .getAttribute("class");
      const industryMonth6ValueTextClass = screen
        .getByText("-21.0%")
        .getAttribute("class");
      const industryYearValueTextClass = screen.getByText("-31.0%").getAttribute("class");

      expect(industryMonthValueTextClass).toContain("text-red-500");
      expect(industryMonth6ValueTextClass).toContain("text-red-500");
      expect(industryYearValueTextClass).toContain("text-red-500");

      expect(monthValueTextClass).toContain("text-red-500");
      expect(month6ValueTextClass).toContain("text-red-500");
      expect(yearValueTextClass).toContain("text-red-500");
    });
  });
});
