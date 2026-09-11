import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import {
  render,
  screen,
  cleanup,
  waitFor,
  fireEvent,
} from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import React from "react";

import EditPlan from "./Edit";
import { CurrentPlanContext } from "./WorkoutPlan";
import api from "../../api";

afterEach(() => {
  cleanup();
});

vi.mock("../../api", () => ({
  default: {
    put: vi.fn(),
    delete: vi.fn(),
  },
}));

describe("EditPlan Component", () => {
  const mockWorkoutPlans = [
    {
      id: 10,
      title: "Hypertrophy Push",
      days: [
        {
          id: 201,
          day: "monday",
          exercises: [{ id: 50, exercise: "Bench_Press", sets: 4, reps: 10 }],
        },
      ],
    },
  ];

  const mockExerciseData = [
    { id: "ex-1", name: "Incline Dumbbell Press" },
    { id: "ex-2", name: "Tricep Pushdowns" },
  ];

  const mockSetLoading = vi.fn();
  const mockSetError = vi.fn();
  const mockFetchWorkoutPlans = vi.fn();

  const contextValue = {
    workoutPlans: mockWorkoutPlans,
    exerciseData: mockExerciseData,
    setLoading: mockSetLoading,
    setError: mockSetError,
    fetchWorkoutPlans: mockFetchWorkoutPlans,
  };

  beforeEach(() => {
    vi.restoreAllMocks();

    vi.spyOn(window, "alert").mockImplementation(() => {});
  });

  afterEach(() => {
    cleanup();
  });

  it("renders form elements and maps initial selection options correctly", () => {
    render(
      <CurrentPlanContext.Provider value={contextValue}>
        <EditPlan />
      </CurrentPlanContext.Provider>,
    );

    expect(
      screen.getByRole("heading", { name: /edit plan/i }),
    ).toBeInTheDocument();

    const workoutDropdown = screen.getByLabelText("Workout");
    expect(workoutDropdown).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: "Hypertrophy Push" }),
    ).toBeInTheDocument();
  });

  it("handles selecting a workout and conditionally unlocks subsequent dropdown segments", async () => {
    render(
      <CurrentPlanContext.Provider value={contextValue}>
        <EditPlan />
      </CurrentPlanContext.Provider>,
    );

    const workoutSelect = screen.getByLabelText("Workout");
    const daySelect = screen.getByLabelText("Workout day");

    expect(daySelect).toBeDisabled();

    fireEvent.change(workoutSelect, { target: { value: "10" } });

    expect(daySelect).not.toBeDisabled();
    expect(screen.getByRole("option", { name: "monday" })).toBeInTheDocument();
  });

  it("triggers a PUT request payload and alerts user when saving standard changes", async () => {
    api.put.mockResolvedValue({ data: { success: true } });

    render(
      <CurrentPlanContext.Provider value={contextValue}>
        <EditPlan />
      </CurrentPlanContext.Provider>,
    );

    fireEvent.change(screen.getByLabelText("Workout"), {
      target: { value: "10" },
    });

    fireEvent.change(screen.getByLabelText("Workout day"), {
      target: { value: "monday" },
    });

    const saveButton = screen.getByRole("button", { name: "save workout" });
    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(api.put).toHaveBeenCalledWith(
        "/api/updateworkout/",
        expect.objectContaining({
          id: 10,
          title: "Hypertrophy Push",
        }),
      );

      expect(mockFetchWorkoutPlans).toHaveBeenCalled();
      expect(window.alert).toHaveBeenCalledWith(
        "Workout plan updated succesfully!",
      );
    });
  });

  it("executes an API DELETE call when removing an entire routine selection", async () => {
    api.delete.mockResolvedValue({ data: { success: true } });

    render(
      <CurrentPlanContext.Provider value={contextValue}>
        <EditPlan />
      </CurrentPlanContext.Provider>,
    );

    fireEvent.change(screen.getByLabelText("Workout"), {
      target: { value: "10" },
    });

    const deleteButton = screen.getByRole("button", { name: "delete workout" });
    fireEvent.click(deleteButton);

    await waitFor(() => {
      expect(api.delete).toHaveBeenCalledWith("/api/deleteworkout/10");
      expect(mockFetchWorkoutPlans).toHaveBeenCalled();
    });
  });
});
