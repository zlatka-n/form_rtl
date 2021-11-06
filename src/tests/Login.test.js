import React from "react";
import Login from "../components/Login";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

test("on initial render, the pay button is disabled", async () => {
  render(<Login />);
  expect(await screen.findByRole("button", { name: /Login/i })).toBeDisabled();
});
