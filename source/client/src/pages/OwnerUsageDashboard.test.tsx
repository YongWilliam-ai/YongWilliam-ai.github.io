// @vitest-environment jsdom
import React from "react";
import "@testing-library/jest-dom/vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { loadOpenAIUsage } from "../../../server/openaiUsage";

const state = vi.hoisted(() => ({
  auth: { isAuthenticated: true, loading: false },
  query: {} as Record<string, unknown>,
}));

vi.mock("@/components/DashboardLayout", () => ({
  default: ({ children }: { children: React.ReactNode }) => <main data-testid="dashboard-shell">{children}</main>,
}));

vi.mock("@/_core/hooks/useAuth", () => ({ useAuth: () => state.auth }));
vi.mock("@/lib/trpc", () => ({
  trpc: { openaiUsage: { summary: { useQuery: () => state.query } } },
}));

import OwnerUsageDashboard from "./OwnerUsageDashboard";

const refetch = vi.fn();
const summary = {
  configured: true,
  generatedAt: Date.UTC(2026, 7, 11),
  totals: { inputTokens: 1200, outputTokens: 300, requests: 8 },
  daily: [{ day: "2026-08-11", inputTokens: 1200, outputTokens: 300, requests: 8 }],
  models: [{ model: "gpt-5", requests: 8 }],
  costs: { available: true, currency: "USD", total: 12.5, daily: [{ day: "2026-08-11", value: 12.5 }], note: null },
  note: "Live organization usage.",
};

function setQuery(overrides: Record<string, unknown> = {}) {
  state.query = { data: undefined, isLoading: false, isFetching: false, error: null, refetch, ...overrides };
}

describe("OwnerUsageDashboard rendered states", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    state.auth = { isAuthenticated: true, loading: false };
    setQuery();
  });

  afterEach(cleanup);

  it("renders the secure loading, error, and truthful no-data states", () => {
    state.auth = { isAuthenticated: true, loading: true };
    const { rerender } = render(<OwnerUsageDashboard />);
    expect(screen.getByText(/Checking owner session/i)).toBeInTheDocument();

    state.auth = { isAuthenticated: true, loading: false };
    setQuery({ error: new Error("request failed") });
    rerender(<OwnerUsageDashboard />);
    expect(screen.getByText(/private endpoint could not be read/i)).toBeInTheDocument();

    setQuery();
    rerender(<OwnerUsageDashboard />);
    expect(screen.getByText(/No organization usage summary was returned/i)).toBeInTheDocument();
  });

  it("renders live token and official-cost metrics, and triggers a secure refresh", () => {
    setQuery({ data: summary });
    render(<OwnerUsageDashboard />);

    expect(screen.getByText("Recorded cost")).toBeInTheDocument();
    expect(screen.getByText("$12.50")).toBeInTheDocument();
    expect(screen.getByText("gpt-5")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /Refresh secure data/i }));
    expect(refetch).toHaveBeenCalledTimes(1);
  });

  it("renders a real server-side organization summary in the authenticated dashboard view", async () => {
    const liveSummary = await loadOpenAIUsage();
    setQuery({ data: liveSummary });
    render(<OwnerUsageDashboard />);

    expect(screen.getByText(/Server-side Admin key connected/i)).toBeInTheDocument();
    expect(screen.getByText("Total tokens")).toBeInTheDocument();
    expect(screen.getByText("Recorded cost")).toBeInTheDocument();
    const costMetric = screen.getByText("Recorded cost").closest("article");
    expect(costMetric).not.toBeNull();
    if (liveSummary.costs.available && liveSummary.costs.currency && liveSummary.costs.total !== null) {
      const displayedCost = new Intl.NumberFormat("en-US", { style: "currency", currency: liveSummary.costs.currency, maximumFractionDigits: 2 }).format(liveSummary.costs.total);
      expect(costMetric).toHaveTextContent(displayedCost);
    } else {
      expect(costMetric).toHaveTextContent(liveSummary.costs.available ? "No cost recorded" : "Unavailable");
    }
  });
});
