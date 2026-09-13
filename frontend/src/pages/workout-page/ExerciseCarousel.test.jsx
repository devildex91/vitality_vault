import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import React from "react";

import ExerciseCarousel from "./ExerciseCarousel";
import { CurrentPlanContext } from "./WorkoutPlan";
import { useTheme } from "../../ThemeContext";
import api from "../../api";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

vi.mock("../../ThemeContext", () => ({
  useTheme: vi.fn(),
}));

vi.mock("../../api", () => ({
  default: {
    get: vi.fn(),
  },
}));

describe("ExerciseCarousel Component", () => {
  const mockSetLoading = vi.fn();
  const mockSetError = vi.fn();

  const mockSelectedWorkout = {
    days: [
      {
        id: 1,
        day: "wednesday",
        exercises: [
          { id: 101, exercise: "squat" },
          { id: 102, exercise: "bench-press" },
        ],
      },
    ],
  };

  const contextValue = {
    selectedWorkout: mockSelectedWorkout,
    setLoading: mockSetLoading,
    setError: mockSetError,
  };

  beforeEach(() => {
    vi.clearAllMocks();

    vi.spyOn(Date.prototype, "getDay").mockReturnValue(3);
  });

  it("successfully fires a GET request with query array and renders image nodes matching today's exercises", async () => {
    useTheme.mockReturnValue({ theme: "nord" });

    const mockApiResponse = {
      data: [
        { id: 1, public_id: "squat_v1", exercise: "squat" },
        { id: 2, public_id: "bench_v2", exercise: "bench-press" },
      ],
    };

    const apiGetSpy = vi.spyOn(api, "get").mockResolvedValue(mockApiResponse);

    render(
      <CurrentPlanContext.Provider value={contextValue}>
        <ExerciseCarousel />
      </CurrentPlanContext.Provider>,
    );

    await vi.waitFor(() => {
      expect(apiGetSpy).toHaveBeenCalledWith("/api/exerciseimages/", {
        params: { exercises: ["squat", "bench-press"] },
        paramsSerializer: { indexes: null },
      });

      const images = screen.getAllByRole("img");
      expect(images).toHaveLength(2);

      expect(images[0]).toHaveAttribute("alt", "squat");
      expect(images[0]).toHaveAttribute(
        "src",
        "https://res.cloudinary.com/dxhclnrp/image/upload/squat_v1",
      );

      expect(images[1]).toHaveAttribute("alt", "bench-press");
      expect(images[1]).toHaveAttribute(
        "src",
        "https://res.cloudinary.com/dxhclnrp/image/upload/bench_v2",
      );
    });

    expect(screen.getAllByLabelText("Previous Slide")).toHaveLength(2);
    expect(screen.getAllByLabelText("Next Slide")).toHaveLength(2);
  });

  it("renders the fallback default blue branding logo if no workouts are scheduled for today", async () => {
    useTheme.mockReturnValue({ theme: "nord" });
    const apiGetSpy = vi.spyOn(api, "get");

    const emptyContext = {
      ...contextValue,
      selectedWorkout: { days: [{ day: "wednesday", exercises: [] }] },
    };

    render(
      <CurrentPlanContext.Provider value={emptyContext}>
        <ExerciseCarousel />
      </CurrentPlanContext.Provider>,
    );

    await vi.waitFor(() => {
      expect(apiGetSpy).not.toHaveBeenCalled();
    });

    const fallbackImg = screen.getByRole("img", {
      name: /no exercises planned/i,
    });
    expect(fallbackImg).toBeInTheDocument();
    expect(fallbackImg).toHaveAttribute(
      "src",
      expect.stringContaining("VV-logo-blue-large.png"),
    );
  });

  it("renders the orange branding logo fallback if it is a rest day during halloween theme setting", async () => {
    useTheme.mockReturnValue({ theme: "halloween" });

    const emptyContext = {
      ...contextValue,
      selectedWorkout: null,
    };

    render(
      <CurrentPlanContext.Provider value={emptyContext}>
        <ExerciseCarousel />
      </CurrentPlanContext.Provider>,
    );

    const fallbackImg = screen.getByRole("img", {
      name: /no exercises planned/i,
    });
    expect(fallbackImg).toBeInTheDocument();
    expect(fallbackImg).toHaveAttribute(
      "src",
      expect.stringContaining("VV-logo-large.png"),
    );
  });

  it("handles catch errors gracefully and triggers error actions if the API request fails", async () => {
    useTheme.mockReturnValue({ theme: "nord" });
    const apiGetSpy = vi
      .spyOn(api, "get")
      .mockRejectedValue(new Error("Database offline"));

    render(
      <CurrentPlanContext.Provider value={contextValue}>
        <ExerciseCarousel />
      </CurrentPlanContext.Provider>,
    );

    await vi.waitFor(() => {
      expect(apiGetSpy).toHaveBeenCalled();
      expect(mockSetError).toHaveBeenCalledWith(
        "Failed to load images. Please try again.",
      );
      expect(mockSetLoading).toHaveBeenCalledWith(false);
    });
  });
});
