import { describe, expect, it, vi, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen, cleanup, waitFor } from "@testing-library/react";

import api from "../../api";
import WorkoutPlan from "./WorkoutPlan";

vi.mock("../../components/Navbar.jsx", () => ({
  default: () => <div data-testid="mock-navbar">Fake Navbar</div>,
}));
vi.mock("../../components/Footer.jsx", () => ({
  default: () => <div data-testid="mock-footer">Fake Footer</div>,
}));

vi.mock("./MobileView.jsx", () => ({
  default: () => <div data-testid="mobile" />,
}));
vi.mock("./DesktopView.jsx", () => ({
  default: () => <div data-testid="desktop" />,
}));

vi.mock("../../api", () => ({
  default: {
    get: vi.fn(),
  },
}));

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: () => ({
    matches: false,
    addEventListener: () => {},
    removeEventListener: () => {},
  }),
});

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

describe("WorkoutPlan", () => {
  it("fetches exercise data, workout plans, and user profile", async () => {
    const mockExercises = [
      { id: 1, name: "Squats" },
      { id: 2, name: "Bench Press" },
    ];
    const mockWorkoutPlans = [{ id: "plan-101", title: "Hypertrophy Split" }];
    const mockProfile = { current_workout: "plan-101" };

    api.get.mockImplementation((url) => {
      if (url.includes("/api/exercises")) {
        return Promise.resolve({ data: mockExercises });
      }
      if (url.includes("/api/fetchuserworkout/")) {
        return Promise.resolve({ data: mockWorkoutPlans });
      }
      if (url.includes("/api/profile/")) {
        return Promise.resolve({ data: mockProfile });
      }
      return Promise.reject(
        new Error(`Unhandled URL endpoint request: ${url}`),
      );
    });

    render(<WorkoutPlan />);

    await waitFor(() => {
      const calledUrls = api.get.mock.calls.map((call) => call[0]);

      expect(calledUrls).toContain("/api/exercises");
      expect(calledUrls).toContain("/api/profile/");
      expect(calledUrls).toContain("/api/fetchuserworkout/");
    });
    await waitFor(() => {
      const dropdownOption = screen.getByRole("option", {
        name: "Hypertrophy Split",
      });
      expect(dropdownOption).toBeInTheDocument();
    });
  });
});
