import { render, screen } from "@testing-library/react";
import IndexPage from "../../pages/testing/index";
import "@testing-library/jest-dom";

describe("Testing Home", () => {
  it("renders a heading", () => {
    render(<IndexPage />);

    const heading = screen.getByRole("heading", {
      name: /Landing Page/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
