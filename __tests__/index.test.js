// __tests__/index.test.jsx

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Navbar from "../components/navbar";
import Home from "../pages/index";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("Navbar", () => {
  it("renders login/register form if user do not logged in", () => {
    render(<Navbar email={""} />);

    const loginForm = screen.queryByTestId("login-form");

    expect(loginForm).toBeInTheDocument();
  });

  it("renders authenticated action buttons if user do not logged in", () => {
    render(<Navbar email={""} />);

    const actionButtons = screen.queryByTestId("authenticated-actions");

    expect(actionButtons).toBeNull();
  });

  it("no renders login/register form if user logged in", () => {
    render(<Navbar email={"nguyenhieuky@gmail.com"} />);

    const loginForm = screen.queryByTestId("login-form");

    expect(loginForm).toBeNull();
  });

  it("renders authenticated action buttons if user logged in", () => {
    render(<Navbar email={"nguyenhieuky@gmail.com"} />);

    const actionButtons = screen.queryByTestId("authenticated-actions");

    expect(actionButtons).toBeInTheDocument();
  });
});

describe("Login/Register", () => {
  it("cannot login if email and password are empty", () => {
    render(<Navbar email={""} />);
    const loginForm = screen.getByTestId("login-form");

    expect(loginForm).not.toBeValid();
  });

  it("cannot login if email is empty", () => {
    render(<Navbar email={""} />);

    const password = screen.getByPlaceholderText("password");
    const loginButton = screen.getByRole("login-button");
    const loginForm = screen.getByTestId("login-form");

    fireEvent.change(password, { target: { value: "password" } });

    expect(loginForm).not.toBeValid();
  });

  it("cannot login if email is invalid", async () => {
    render(<Navbar email={""} />);

    const email = screen.getByPlaceholderText("email");
    const password = screen.getByPlaceholderText("password");
    const loginForm = screen.getByTestId("login-form");

    fireEvent.change(password, { target: { value: "password" } });
    fireEvent.change(email, { target: { value: "" } });
    expect(loginForm).not.toBeValid();

    fireEvent.change(email, { target: { value: "email" } });
    expect(loginForm).not.toBeValid();

    fireEvent.change(email, { target: { value: "email@" } });
    expect(loginForm).not.toBeValid();

    fireEvent.change(email, { target: { value: " " } });
    expect(loginForm).not.toBeValid();

    fireEvent.change(email, { target: { value: "@" } });
    expect(loginForm).not.toBeValid();

    fireEvent.change(email, { target: { value: "@gmail" } });
    expect(loginForm).not.toBeValid();

    fireEvent.change(email, { target: { value: "@gmail.com" } });
    expect(loginForm).not.toBeValid();

    fireEvent.change(email, { target: { value: "@.com" } });
    expect(loginForm).not.toBeValid();

    fireEvent.change(email, { target: { value: "email@.com" } });
    expect(loginForm).not.toBeValid();

    fireEvent.change(email, { target: { value: "email@gmail" } });
    const mockLogin = jest.fn((email) => {
      return Promise.resolve({ email });
    });
    expect(mockLogin).not.toBeCalled();

    fireEvent.change(email, { target: { value: "email@gmail.com" } });
    expect(loginForm).toBeValid();
  });
});

describe("Logout", () => {
  it("renders login/register form", () => {
    const navbar = render(<Navbar email={"nguyenhieuky@gmail.com"} />);

    const logoutButton = screen.getByRole("logout-button");
    userEvent.click(logoutButton)
    expect(navbar).toMatchSnapshot();
  });
});

describe("Home - main content", () => {
  it("renders videos list", () => {
    render(<Home />);

    const videosList = screen.queryByTestId("videos-list");

    expect(videosList).toBeInTheDocument();
  });
});
