import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("should renders the header", () => {
  render(<Header />);
  const titlePage = screen.getByText(/food app/i);
  const linkMenu = screen.getByText(/menu/i);
  const linkLogIn = screen.getByText(/log in/i);
  expect(titlePage).toBeInTheDocument();
  expect(linkMenu).toBeInTheDocument();
  expect(linkLogIn).toBeInTheDocument();
});
