import { describe, expect, it, vi, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import DesktopView from "./DesktopView";
import "@testing-library/jest-dom/vitest";

import { CurrentPlanContext } from "./WorkoutPlan";

afterEach(() => {
  cleanup();
});

vi.mock("./Create", () => ({
  default: () => <div>Create Plan Component</div>,
}));
vi.mock("./Edit", () => ({
  default: () => <div>Edit Plan Component</div>,
}));
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
vi.mock("./ExerciseCarousel", () => ({
  default: () => <div>Exercise Carousel Component</div>,
}));

describe("DesktopView", async () => {
  const mockselectedWorkout = [{ id: "plan-101", title: "Hypertrophy Split" }];

  const contextValue = {
    selectedWorkout: mockselectedWorkout,
  };

  it("renders the six tabs", () => {
    render(
      <CurrentPlanContext.Provider value={contextValue}>
        <DesktopView />
      </CurrentPlanContext.Provider>,
    );

    expect(screen.getByLabelText("Create")).toBeInTheDocument();
    expect(screen.getByLabelText("Edit")).toBeInTheDocument();
    expect(screen.getByLabelText("Todays")).toBeInTheDocument();
    expect(screen.getByLabelText("Full")).toBeInTheDocument();
    expect(screen.getByLabelText("Previous")).toBeInTheDocument();
    expect(screen.getByLabelText("Tomorrows")).toBeInTheDocument();
  });

  it("renders the six tab components", () => {
    render(
      <CurrentPlanContext.Provider value={contextValue}>
        <DesktopView />
      </CurrentPlanContext.Provider>,
    );

    expect(screen.getByText("Create Plan Component")).toBeInTheDocument();
    expect(screen.getByText("Edit Plan Component")).toBeInTheDocument();
    expect(screen.getByText("Todays Plan Component")).toBeInTheDocument();
    expect(screen.getByText("Full Plan Component")).toBeInTheDocument();
    expect(screen.getByText("Previous Plan Component")).toBeInTheDocument();
    expect(screen.getByText("Tomorrows Plan Component")).toBeInTheDocument();
  });
});
