import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Header from "../Header";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("Should render the Restaurant menu component with cart 0 items", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianBtn = screen.getByText("Fries & Sides (17)");

  fireEvent.click(accordianBtn);

  const items = screen.getAllByTestId("foodItems");

  expect(items.length).toBe(17);

  const cartItems = screen.getByText("Cart-(0 items)");

  expect(cartItems).toBeInTheDocument();
});

test("Should render the Restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianBtn = screen.getByText("Fries & Sides (17)");

  fireEvent.click(accordianBtn);

  const items = screen.getAllByTestId("foodItems");

  expect(items.length).toBe(17);

  const addBtns = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addBtns[0]);

  const cartItems = screen.getByText("Cart-(1 items)");

  expect(cartItems).toBeInTheDocument();
});

test("Should render the Restaurant menu component with cart 2 items", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianBtn = screen.getByText("Fries & Sides (17)");

  fireEvent.click(accordianBtn);

  const items = screen.getAllByTestId("foodItems");

  expect(items.length).toBe(17);

  const addBtns = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addBtns[1]);

  const cartItems = screen.getByText("Cart-(2 items)");

  expect(cartItems).toBeInTheDocument();
});
