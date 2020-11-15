import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Header with 'Scoober team' text", () => {
  render(<App />);
  const element = screen.getByText("Scoober team");
  expect(element).toBeInTheDocument();
});
