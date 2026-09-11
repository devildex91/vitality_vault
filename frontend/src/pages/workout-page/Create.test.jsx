import { describe, expect, it, vi, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen, cleanup, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import api from "../../api";
import CreatePlan from "./Create";
import { CurrentPlanContext } from "./WorkoutPlan";

afterEach(() => {
  cleanup();
});

vi.mock("../../api", () => ({
  default: {
    post: vi.fn(),
  },
}));

describe("CreatePlan", () => {
  it("adds an exercise to Monday's workout", async () => {
    const user = userEvent.setup();

    const contextValue = {
      exerciseData: [{ id: 1, name: "Push Up" }],
      loading: false,
      setLoading: vi.fn(),
      error: null,
      setError: vi.fn(),
      fetchWorkoutPlans: vi.fn(),
    };

    render(
      <CurrentPlanContext.Provider value={contextValue}>
        <CreatePlan />
      </CurrentPlanContext.Provider>,
    );

    const monday = screen
      .getByRole("heading", { name: "monday" })
      .closest("fieldset");

    await user.selectOptions(within(monday).getByLabelText("Exercise"), "1");

    await user.selectOptions(within(monday).getByLabelText("Sets"), "3");

    await user.selectOptions(within(monday).getByLabelText("Reps"), "10");

    await user.click(
      within(monday).getByRole("button", {
        name: /add exercise/i,
      }),
    );

    expect(within(monday).getByText("Push Up")).toBeInTheDocument();
    expect(within(monday).getByText(/Sets:\s*3/)).toBeInTheDocument();
    expect(within(monday).getByText(/Reps:\s*10/)).toBeInTheDocument();
  });

  it("submits a workout plan", async () => {
    const user = userEvent.setup();

    const contextValue = {
      exerciseData: [],
      loading: false,
      setLoading: vi.fn(),
      error: null,
      setError: vi.fn(),
      fetchWorkoutPlans: vi.fn(),
    };

    api.post.mockResolvedValue({ data: {} });

    render(
      <CurrentPlanContext.Provider value={contextValue}>
        <CreatePlan />
      </CurrentPlanContext.Provider>,
    );

    await user.type(screen.getByLabelText(/workout title/i), "Strength Plan");

    await user.click(
      screen.getByRole("button", {
        name: /submit plan/i,
      }),
    );

    expect(api.post).toHaveBeenCalledWith(
      "api/createworkout/",
      expect.objectContaining({
        title: "Strength Plan",
        days: expect.any(Array),
      }),
    );
  });
});
