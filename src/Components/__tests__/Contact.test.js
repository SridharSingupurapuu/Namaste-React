import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Test Cases", () => {
  test("Should test the heading is rendered inside the component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should test the button is rendered inside the component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");
    //Assertion
    expect(button).toBeInTheDocument();
  });

  it("Should test the input name is rendered inside the component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Name");
    //Assertion
    expect(inputName).toBeInTheDocument();
  });

  it("Should test the input message is rendered inside the component", () => {
    render(<Contact />);

    const inputMessage = screen.getByPlaceholderText("Message");
    //Assertion
    expect(inputMessage).toBeInTheDocument();
  });

  it("Should test the 2 input textboxes are rendered inside the component", () => {
    render(<Contact />);

    const inputTextBox = screen.getAllByRole("textbox");
    //Assertion
    expect(inputTextBox.length).toBe(2);
  });
});
