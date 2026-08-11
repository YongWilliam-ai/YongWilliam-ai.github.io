export type OwnerUsageDashboardState = "unauthenticated" | "loading" | "error" | "no-data" | "ready";

export function getOwnerUsageDashboardState(input: {
  isAuthenticated: boolean;
  authLoading: boolean;
  queryLoading: boolean;
  hasError: boolean;
  hasData: boolean;
}): OwnerUsageDashboardState {
  if (!input.isAuthenticated && !input.authLoading) return "unauthenticated";
  if (input.authLoading || (input.isAuthenticated && input.queryLoading)) return "loading";
  if (input.hasError) return "error";
  if (!input.hasData) return "no-data";
  return "ready";
}
