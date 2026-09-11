import { describe, expect, it, afterEach } from "vitest";
import { render, screen, cleanup as Cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import React from "react";

import FullPlan from "./Full";
import { CurrentPlanContext } from "./WorkoutPlan";

afterEach(() => {
  Cleanup();
});

describe("FullPlan Component", () => {
  it("renders days chronologically and displays exercise details or rest days correctly", () => {
    const mockSelectedWorkout = {
      title: "Sample Routine",
      days: [
        {
          id: 2,
          day: "tuesday",
          exercises: [],
        },
        {
          id: 1,
          day: "monday",
          exercises: [{ id: 101, exercise: "Bench_Press", sets: 3, reps: 10 }],
        },
      ],
    };

    render(
      <CurrentPlanContext.Provider
        value={{ selectedWorkout: mockSelectedWorkout }}
      >
        <FullPlan />
      </CurrentPlanContext.Provider>,
    );

    expect(
      screen.getByRole("columnheader", { name: /monday/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: /tuesday/i }),
    ).toBeInTheDocument();

    expect(screen.getByText("Bench Press")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();

    expect(screen.getByText("Rest Day")).toBeInTheDocument();

    const dayHeaders = screen
      .getAllByRole("columnheader")
      .map((th) => th.textContent.toLowerCase());

    const activeDays = dayHeaders.filter(
      (name) => name === "monday" || name === "tuesday",
    );

    expect(activeDays[0]).toBe("monday");
    expect(activeDays[1]).toBe("tuesday");
  });

  it("handles empty or unselected routines gracefully without breaking runtime", () => {
    render(
      <CurrentPlanContext.Provider value={{ selectedWorkout: null }}>
        <FullPlan />
      </CurrentPlanContext.Provider>,
    );

    const tables = screen.queryAllByRole("table");
    expect(tables).toHaveLength(0);
  });
});
