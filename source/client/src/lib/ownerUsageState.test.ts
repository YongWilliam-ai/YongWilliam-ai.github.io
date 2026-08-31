import { describe, expect, it } from "vitest";
import { getOwnerUsageDashboardState } from "./ownerUsageState";

describe("owner usage dashboard states", () => {
  it("keeps an unauthenticated visitor behind the access gate", () => {
    expect(getOwnerUsageDashboardState({ isAuthenticated: false, authLoading: false, queryLoading: false, hasError: false, hasData: false })).toBe("unauthenticated");
  });

  it("reports loading while authentication or a secure usage request is in progress", () => {
    expect(getOwnerUsageDashboardState({ isAuthenticated: false, authLoading: true, queryLoading: false, hasError: false, hasData: false })).toBe("loading");
    expect(getOwnerUsageDashboardState({ isAuthenticated: true, authLoading: false, queryLoading: true, hasError: false, hasData: false })).toBe("loading");
  });

  it("separates secure endpoint failure, an honest no-data result, and rendered live data", () => {
    expect(getOwnerUsageDashboardState({ isAuthenticated: true, authLoading: false, queryLoading: false, hasError: true, hasData: false })).toBe("error");
    expect(getOwnerUsageDashboardState({ isAuthenticated: true, authLoading: false, queryLoading: false, hasError: false, hasData: false })).toBe("no-data");
    expect(getOwnerUsageDashboardState({ isAuthenticated: true, authLoading: false, queryLoading: false, hasError: false, hasData: true })).toBe("ready");
  });
});
