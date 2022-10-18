// __tests__/index.test.jsx

import { render, screen } from "@testing-library/react";
import Home from "../../src/pages/index";
import "@testing-library/jest-dom";

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    screen.getByRole("heading", { name: /Art of Banking/i });
  });
  it("renders a cascading sub heading", () => {
    render(<Home />);
    screen.getByText("The world economy is made from the fabric of global");
    screen.getByText("finance.");
    screen.getByText("The fabric of global finance is an");
    screen.getByText("interlocking matrix of corporate");
    screen.getByText("balance sheets.");
  });
  it("renders a slogan", () => {
    render(<Home />);
    screen.getByRole("heading", {
      name: /Understand What Money Is, Where It Goes, and Why It Matters./i,
    });
  });
  it("renders some descriptions", () => {
    render(<Home />);
    screen.getByRole("heading", { name: /See Behind the Number/i });
    screen.getByText(
      "Use the tools that economists use to give us all the figures we see everyday in the news. Find out how metrics such as inflation and GDP are worked out."
    );
    screen.getByRole("heading", {
      name: /Take Control of the Financial System/i,
    });
    screen.getByText(
      "Find out how money flows between banks and financial institutions using interactive tools and analysis."
    );
  });
});
