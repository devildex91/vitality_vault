import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import React from "react";

import PreviousPlan from "./Previous";
import { CurrentPlanContext } from "./WorkoutPlan";

describe("PreviousPlan Component", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    cleanup();
    vi.useRealTimers();
  });

  it("calculates yesterday correctly and renders that day's exercises", () => {
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
          id: 2,
          day: "tuesday",
          exercises: [{ id: 20, exercise: "Dumbbell_Curl", sets: 4, reps: 12 }],
        },
      ],
    };

    render(
      <CurrentPlanContext.Provider
        value={{ selectedWorkout: mockSelectedWorkout }}
      >
        <PreviousPlan />
      </CurrentPlanContext.Provider>,
    );

    expect(
      screen.getByRole("columnheader", { name: /yesterdays plan/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("Dumbbell Curl")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("12")).toBeInTheDocument();

    expect(screen.queryByText("Squats")).not.toBeInTheDocument();
  });
});
