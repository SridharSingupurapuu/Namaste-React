import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

test("Should pass the props to the Restaurant card component", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("BOOM Sandwich - Sub of India");

  expect(name).toBeInTheDocument();
});
