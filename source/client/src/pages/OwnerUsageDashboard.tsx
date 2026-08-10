/** Owner-only API usage dashboard. This route is intentionally absent from public portfolio navigation. */
import DashboardLayout from "@/components/DashboardLayout";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import WXYMark from "../components/WXYMark";
import { Activity, ArrowUpRight, DatabaseZap, KeyRound, RefreshCw, ShieldCheck } from "lucide-react";

function number(value: number) {
  return new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(value);
}

function money(value: number | null, currency: string | null) {
  if (value === null || !currency) return "—";
  return new Intl.NumberFormat("en-US", { style: "currency", currency, maximumFractionDigits: 2 }).format(value);
}

export default function OwnerUsageDashboard() {
  const { isAuthenticated } = useAuth();
  const usage = trpc.openaiUsage.summary.useQuery(undefined, { retry: false, refetchOnWindowFocus: false, enabled: isAuthenticated });
  const data = usage.data;
  const peak = Math.max(1, ...(data?.daily.map((day) => day.inputTokens + day.outputTokens) ?? [1]));

  return (
    <DashboardLayout>
      <section className="owner-usage" aria-labelledby="owner-usage-title">
        <header className="owner-usage-header">
          <div className="owner-usage-title"><span className="owner-mark"><WXYMark variant="ai" decorative /></span><div><p>OWNER TOOLING / PRIVATE</p><h1 id="owner-usage-title">API activity ledger</h1></div></div>
          <div className="owner-usage-actions"><a href="/ai/">Return to AI profile <ArrowUpRight size={15} /></a><button type="button" onClick={() => usage.refetch()} disabled={usage.isFetching}><RefreshCw size={15} className={usage.isFetching ? "is-spinning" : ""} /> Refresh</button></div>
        </header>

        {usage.isLoading ? <div className="owner-usage-state">Loading secure organization usage…</div> : null}
        {usage.error ? <div className="owner-usage-state is-error">The private endpoint could not be read. Confirm that you are signed in as the project owner and that the server is running.</div> : null}
        {data ? <>
          <div className="owner-status"><span><ShieldCheck size={15} /> {data.configured ? "Server-side Admin key connected" : "Admin key not connected"}</span><time dateTime={new Date(data.generatedAt).toISOString()}>Updated {new Date(data.generatedAt).toLocaleString()}</time></div>
          <div className="usage-metrics" aria-label="30 day API usage totals"><article><span>Total tokens</span><strong>{number(data.totals.inputTokens + data.totals.outputTokens)}</strong><small>Input + output</small></article><article><span>Input tokens</span><strong>{number(data.totals.inputTokens)}</strong><small>30-day window</small></article><article><span>Output tokens</span><strong>{number(data.totals.outputTokens)}</strong><small>30-day window</small></article><article><span>Requests</span><strong>{number(data.totals.requests)}</strong><small>Organization API only</small></article><article><span>Recorded cost</span><strong>{money(data.costs.total, data.costs.currency)}</strong><small>{data.costs.available ? "Official cost buckets" : "Unavailable"}</small></article></div>
          <div className="usage-grid"><article className="usage-panel"><div className="usage-panel-head"><span><Activity size={15} /> Daily token activity</span><small>{data.daily.length ? `${data.daily.length} available days` : "Awaiting secure source"}</small></div>{data.daily.length ? <div className="usage-heatmap" aria-label="Daily API token heatmap">{data.daily.map((day) => { const total = day.inputTokens + day.outputTokens; return <span key={day.day} title={`${day.day}: ${total.toLocaleString()} tokens`} style={{ opacity: Math.max(0.14, total / peak) }}><i /></span>; })}</div> : <p className="usage-empty">Connect the Admin API key to load real daily usage. This page never fabricates token activity.</p>}</article><article className="usage-panel"><div className="usage-panel-head"><span><DatabaseZap size={15} /> Model requests</span><small>Grouped by API model</small></div>{data.models.length ? <div className="usage-models">{data.models.map((model) => <div key={model.model}><span>{model.model}</span><strong>{number(model.requests)}</strong></div>)}</div> : <p className="usage-empty">No model grouping is available until the API returns organization usage.</p>}</article></div>
          <aside className="usage-disclosure"><KeyRound size={17} /><p>{data.note}{data.costs.note ? ` ${data.costs.note}` : ""}</p></aside>
        </> : null}
      </section>
    </DashboardLayout>
  );
}
