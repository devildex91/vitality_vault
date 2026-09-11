import { describe, expect, it, vi, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import CurrentPlan from "./Current";
import "@testing-library/jest-dom/vitest";

import { CurrentPlanContext } from "./WorkoutPlan";

afterEach(() => {
  cleanup();
});

vi.mock("./Today", () => ({
  default: () => <div>Todays Plan Component</div>,
}));
vi.mock("./Full", () => ({
  default: () => <div>Full Plan Component</div>,
}));
vi.mock("./Previous", () => ({
  default: () => <div>Previous Plan Component</div>,
}));
vi.mock("./Tomorrow", () => ({
  default: () => <div>Tomorrows Plan Component</div>,
}));

describe("CurrentPlan", async () => {
  const mockselectedWorkout = [{ id: "plan-101", title: "Hypertrophy Split" }];

  const contextValue = {
    selectedWorkout: mockselectedWorkout,
  };

  it("renders the four tabs", () => {
    render(
      <CurrentPlanContext.Provider value={contextValue}>
        <CurrentPlan />
      </CurrentPlanContext.Provider>,
    );

    expect(screen.getByLabelText("Todays")).toBeInTheDocument();
    expect(screen.getByLabelText("Full plan")).toBeInTheDocument();
    expect(screen.getByLabelText("Previous")).toBeInTheDocument();
    expect(screen.getByLabelText("Tomorrows")).toBeInTheDocument();
  });

  it("renders the four tab components", () => {
    render(
      <CurrentPlanContext.Provider value={contextValue}>
        <CurrentPlan />
      </CurrentPlanContext.Provider>,
    );

    expect(screen.getByText("Todays Plan Component")).toBeInTheDocument();
    expect(screen.getByText("Full Plan Component")).toBeInTheDocument();
    expect(screen.getByText("Previous Plan Component")).toBeInTheDocument();
    expect(screen.getByText("Tomorrows Plan Component")).toBeInTheDocument();
  });
});
