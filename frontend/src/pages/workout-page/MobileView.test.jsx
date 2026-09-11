import { describe, expect, it, vi, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import MobileView from "./MobileView";
import "@testing-library/jest-dom/vitest";

afterEach(() => {
  cleanup();
});

vi.mock("./Current", () => ({
  default: () => <div>Current Plan Component</div>,
}));

vi.mock("./Create", () => ({
  default: () => <div>Create Plan Component</div>,
}));

vi.mock("./Edit", () => ({
  default: () => <div>Edit Plan Component</div>,
}));

describe("MobileView", () => {
  it("renders the three tabs", () => {
    render(<MobileView />);

    expect(screen.getByLabelText("Current Plan")).toBeInTheDocument();
    expect(screen.getByLabelText("Create Plan")).toBeInTheDocument();
    expect(screen.getByLabelText("Edit Plan")).toBeInTheDocument();
  });

  it("renders all three plan components", () => {
    render(<MobileView />);

    expect(screen.getByText("Current Plan Component")).toBeInTheDocument();
    expect(screen.getByText("Create Plan Component")).toBeInTheDocument();
    expect(screen.getByText("Edit Plan Component")).toBeInTheDocument();
  });

  it("has Create Plan selected by default", () => {
    render(<MobileView />);

    const createPlanTab = screen.getByLabelText("Create Plan");

    expect(createPlanTab).toBeChecked();
  });

  it("puts all tabs in the same radio group", () => {
    render(<MobileView />);

    const current = screen.getByLabelText("Current Plan");
    const create = screen.getByLabelText("Create Plan");
    const edit = screen.getByLabelText("Edit Plan");

    expect(current).toHaveAttribute("name", "my_tabs_6");
    expect(create).toHaveAttribute("name", "my_tabs_6");
    expect(edit).toHaveAttribute("name", "my_tabs_6");
  });
});
