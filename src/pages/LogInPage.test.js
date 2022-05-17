import { render, screen } from "@testing-library/react";
import LogInPage from "./LogInPage";
test("should render the login page", () => {
  render(<LogInPage />);
  const titlePage = screen.getByText(/log in/i);
  expect(titlePage).toBeInTheDocument();
});
