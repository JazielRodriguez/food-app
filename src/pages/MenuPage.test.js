import MenuPage from "./MenuPage";
import { render, screen } from "@testing-library/react";
test("should render the menu page", () => {
  render(<MenuPage />);
  const titlePage = screen.getByText(/menu/i);
  expect(titlePage).toBeInTheDocument();
});
