import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import "@testing-library/jest-dom";

import App from "./App";

describe("App", () => {
  test("navigation and routes work as expected", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(screen.getByText(/home page/i)).toBeInTheDocument();

    userEvent.click(screen.getByText("Reviews"), { button: 0 });
    expect(screen.getByText(/reviews page/i)).toBeInTheDocument();
    expect(screen.queryByText(/home page/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/contact page/i)).not.toBeInTheDocument();

    userEvent.click(screen.getByText("Contact"), { button: 0 });
    expect(screen.getByText(/contact page/i)).toBeInTheDocument();
    expect(screen.queryByText(/home page/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/reviews page/i)).not.toBeInTheDocument();

    userEvent.click(screen.getByText("Home"), { button: 0 });
    expect(screen.getByText(/home page/i)).toBeInTheDocument();
    expect(screen.queryByText(/reviews page/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/contact page/i)).not.toBeInTheDocument();
  });
});
