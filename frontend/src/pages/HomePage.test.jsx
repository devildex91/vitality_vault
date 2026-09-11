import { render } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { BrowserRouter } from "react-router";
import HomePage from "./HomePage"; 
import { useTheme } from "../ThemeContext";

vi.mock("../ThemeContext", () => ({
  useTheme: vi.fn(),
}));

vi.mock("../components/Navbar.jsx", () => ({
  default: () => <nav data-testid="mock-navbar">Navbar</nav>,
}));
vi.mock("../components/Footer.jsx", () => ({
  default: () => <footer data-testid="mock-footer">Footer</footer>,
}));

const renderHomePage = () => {
  return render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
};

describe("HomePage Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders layout structural elements like Navbar and Footer", () => {
    useTheme.mockReturnValue({ theme: "default" });
    const { container } = renderHomePage();
 
    expect(container.querySelector('[data-testid="mock-navbar"]')).not.toBeNull();
    expect(container.querySelector('[data-testid="mock-footer"]')).not.toBeNull();
  });

  it("displays the welcome message and login button text", () => {
    useTheme.mockReturnValue({ theme: "default" });
    const { container } = renderHomePage();

    expect(container.textContent).toContain("Welcome to Vitality Vault!");


    const loginLink = container.querySelector("a");
    expect(loginLink).not.toBeNull();
    expect(loginLink.getAttribute("href")).toBe("/login");
  });

  it("uses the default blue logo when the theme is not halloween", () => {
    useTheme.mockReturnValue({ theme: "light" });
    const { container } = renderHomePage();

    const logos = container.querySelectorAll("img");
    
    logos.forEach((logo) => {
      expect(logo.getAttribute("src")).toContain("VV-logo-blue-large.png");
    });
  });

  it("uses the orange logo when the theme is halloween", () => {
    useTheme.mockReturnValue({ theme: "halloween" });
    const { container } = renderHomePage();

    const logos = container.querySelectorAll("img");
    
    logos.forEach((logo) => {
      expect(logo.getAttribute("src")).toContain("VV-logo-large.png");
    });
  });
});
