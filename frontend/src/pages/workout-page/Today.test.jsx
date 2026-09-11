import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import React from "react";

import TodaysPlan from "./Today";
import { CurrentPlanContext } from "./WorkoutPlan";

describe("TodaysPlan Component", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    cleanup();
    vi.useRealTimers();
  });

  it("calculates the current weekday accurately and renders today's exercises", () => {
    const mockDate = new Date(2025, 9, 15);
    vi.setSystemTime(mockDate);

    const mockSelectedWorkout = {
      days: [
        {
          id: 1,
          day: "monday",
          exercises: [{ id: 10, exercise: "Squats", sets: 3, reps: 5 }],
        },
        {
          id: 3,
          day: "wednesday",
          exercises: [{ id: 30, exercise: "Barbell_Row", sets: 4, reps: 8 }],
        },
      ],
    };

    render(
      <CurrentPlanContext.Provider
        value={{ selectedWorkout: mockSelectedWorkout }}
      >
        <TodaysPlan />
      </CurrentPlanContext.Provider>,
    );

    expect(
      screen.getByRole("columnheader", { name: /todays plan/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("Barbell Row")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("8")).toBeInTheDocument();

    expect(screen.queryByText("Squats")).not.toBeInTheDocument();
  });

  it("renders a relaxing rest day message if today's exercises array is empty", () => {
    const mockDate = new Date(2025, 9, 15);
    vi.setSystemTime(mockDate);

    const mockSelectedWorkout = {
      days: [
        {
          id: 3,
          day: "wednesday",
          exercises: [],
        },
      ],
    };

    render(
      <CurrentPlanContext.Provider
        value={{ selectedWorkout: mockSelectedWorkout }}
      >
        <TodaysPlan />
      </CurrentPlanContext.Provider>,
    );

    expect(
      screen.getByText(/nothing to do today take a break and relax/i),
    ).toBeInTheDocument();
    expect(screen.queryByRole("table")).not.toBeInTheDocument();
  });
});
