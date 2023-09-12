import { render, screen } from "@testing-library/react";
import Option from "./Option";

test("Test if the option is rendered", () => {
  render(<Option options={["Test option"]} />);
  const optionText = screen.getByText(/Test option/i);
  expect(optionText).toBeInTheDocument();
});
