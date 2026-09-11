import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import React from "react";

import TomorrowsPlan from "./Tomorrow";
import { CurrentPlanContext } from "./WorkoutPlan";

describe("TomorrowsPlan Component", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    cleanup();
    vi.useRealTimers();
  });

  it("calculates tomorrow's weekday accurately and renders those exercises", () => {
    const mockDate = new Date(2025, 9, 15);
    vi.setSystemTime(mockDate);

    const mockSelectedWorkout = {
      days: [
        {
          id: 1,
          day: "wednesday",
          exercises: [{ id: 10, exercise: "Bench_Press", sets: 3, reps: 10 }],
        },
        {
          id: 2,
          day: "thursday",
          exercises: [{ id: 20, exercise: "Overhead_Press", sets: 4, reps: 6 }],
        },
      ],
    };

    render(
      <CurrentPlanContext.Provider
        value={{ selectedWorkout: mockSelectedWorkout }}
      >
        <TomorrowsPlan />
      </CurrentPlanContext.Provider>,
    );

    expect(
      screen.getByRole("columnheader", { name: /tomorrows plan/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("Overhead Press")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("6")).toBeInTheDocument();

    expect(screen.queryByText("Bench Press")).not.toBeInTheDocument();
  });

  it("displays fallback resting text if tomorrow contains an empty exercises list", () => {
    const mockDate = new Date(2025, 9, 15);
    vi.setSystemTime(mockDate);

    const mockSelectedWorkout = {
      days: [
        {
          id: 2,
          day: "thursday",
          exercises: [],
        },
      ],
    };

    render(
      <CurrentPlanContext.Provider
        value={{ selectedWorkout: mockSelectedWorkout }}
      >
        <TomorrowsPlan />
      </CurrentPlanContext.Provider>,
    );

    expect(
      screen.getByText(/nothing to do today take a break and relax/i),
    ).toBeInTheDocument();
    expect(screen.queryByRole("table")).not.toBeInTheDocument();
  });
});
