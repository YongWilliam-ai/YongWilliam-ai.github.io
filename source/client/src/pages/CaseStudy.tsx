/** Signal Path case-study template: short, evidence-led project records with direct public resources. */
import { ArrowLeft, ArrowUpRight, FileText, Github, Globe2, Lightbulb, ShieldCheck, Wrench } from "lucide-react";
import WXYMark from "../components/WXYMark";

type CaseLink = { label: string; href: string; kind: "product" | "github" | "deck" };
type Study = { slug: string; index: string; profile: "Markets" | "AI Engineering"; eyebrow: string; title: string; status: string; summary: string; problem: string; implementation: string; evidence: string; note?: string; links: CaseLink[] };

const studies: Record<string, Study> = {
  rxcode: {
    slug: "rxcode", index: "01", profile: "AI Engineering", eyebrow: "AI agent operations / active open source", title: "RxCode", status: "Product + GitHub live",
    summary: "An AI-assisted development control layer for teams that need coding-agent tasks, reviewable changes, and explicit human approval to remain visible and accountable.",
    problem: "As coding agents become capable of longer-running work, teams need more than a terminal transcript. They need a control surface that keeps sessions, project context, tool approvals, and code changes visible without breaking the developer workflow.",
    implementation: "RxCode is positioned as a native macOS workspace around AI coding-agent sessions. The public product describes live session management, streamed output, diff review, tool-call approvals, project workflows, Agent Client Protocol support, and MCP configuration in one visual operating layer.",
    evidence: "William is Co-founder, AI Product & Growth, leading HKUST go-to-market, customer discovery, product positioning and commercialisation planning. The project is in HKUST Dream Builder Cohort #2 with HK$10,000 approved startup support and a 12-month validation roadmap; this page does not invent adoption, revenue, or performance metrics beyond public materials.",
    links: [{ label: "Open product", href: "https://code.rxlab.app/", kind: "product" }, { label: "View GitHub", href: "https://github.com/rxtech-lab/rxcode", kind: "github" }, { label: "Read pitch deck", href: "/decks/rxcode-dream-builder-pitch.pdf", kind: "deck" }],
  },
  "sport-ai": {
    slug: "sport-ai", index: "02", profile: "AI Engineering", eyebrow: "Multimodal evidence pipeline / applied AI", title: "Sport AI Evidence System", status: "Evidence review build",
    summary: "A Python evidence pipeline designed to ensure sport commentary is generated only when trajectory and event records support the claim.",
    problem: "Automated sport commentary can sound plausible even when the underlying event evidence is incomplete. The technical challenge is therefore not merely generation; it is connecting the generated narrative to evidence and preserving a conservative failure mode.",
    implementation: "The work combines ball-trajectory data with match-event records through modular Python matching logic. It produces offline review outputs and regression checks so edge cases can be inspected before a claim is used in content generation.",
    evidence: "The supplied experience evidence reports 63 events: 40 high-confidence commentary triggers, 23 rule-based safe fallbacks, and 10/10 passing unit and regression tests. The scope is an evidence-aware content system, not a general-purpose autonomous commentator.",
    links: [{ label: "View GitHub", href: "https://github.com/YongWilliam-ai/pickleball", kind: "github" }],
  },
  polyalpha: {
    slug: "polyalpha", index: "03", profile: "Markets", eyebrow: "Prediction-market research / backtested + testnet", title: "PolyAlpha Protocol", status: "Research prototype / testnet",
    summary: "A Polygon-oriented prediction-market research prototype that combines historical research, product architecture, and explicit testnet boundaries.",
    problem: "Prediction-market systems invite performance claims that are difficult to assess without clear data, validation, and deployment boundaries. The challenge was to frame the work as a research-backed product system without implying live-investment readiness.",
    implementation: "The project combines historical trade analysis, a DAO-governed vault concept, Polygon smart-contract architecture, and a testnet-oriented dashboard. The design records validation assumptions and separates research outputs from live-investment use.",
    evidence: "The project presentation reports 400M+ historical observations, a 62.9% reported win rate, and a 2.53 reported Sharpe ratio. Those figures are retained as database or research outputs only; they are not claims of live trading performance.",
    note: "Research / testnet disclosure: this is not an investment product, solicitation, or promise of future performance.",
    links: [{ label: "Open testnet", href: "https://polyalpha-dashboard.vercel.app/", kind: "product" }, { label: "View GitHub", href: "https://github.com/YongWilliam-ai/polyalpha-protocol", kind: "github" }, { label: "Read pitch deck", href: "/decks/polyalpha-protocol-pitch.pdf", kind: "deck" }],
  },
  stubase: {
    slug: "stubase", index: "04", profile: "AI Engineering", eyebrow: "Anti-fraud intelligence / MVP", title: "StuBase", status: "MVP + research direction",
    summary: "A student-focused anti-fraud intelligence MVP combining AI pre-screening with transparent evidence handling and Web3-based trust infrastructure.",
    problem: "Student scams are often underreported and handled reactively. The project explored how a product could surface risk signals earlier while giving users a more transparent record of evidence and community review than a single opaque central system.",
    implementation: "The MVP brings together AI pre-screening, Polygon Layer-2 components, token and Soulbound Token concepts, zero-knowledge-proof design, IPFS storage, and a dual blacklist/whitelist registry. Its governance concept uses a token-staked voting mechanism rather than presenting automated judgement as final.",
    evidence: "The project documents primary research on the Hong Kong student-scam problem, a working technical prototype, competition submission materials, and a public repository. The stated efficiency figure is treated as an assumption, not a deployed cost result.",
    links: [{ label: "Open product", href: "https://stubase.xyz/", kind: "product" }, { label: "View GitHub", href: "https://github.com/YongWilliam-ai/stubase2026", kind: "github" }],
  },
  "rmbi-alpha": {
    slug: "rmbi-alpha", index: "05", profile: "Markets", eyebrow: "Factor research / walk-forward evaluation", title: "RMBI 3110 Alpha Challenge", status: "Academic research build",
    summary: "A walk-forward long-only equity research model centred on out-of-sample evaluation, interpretability, and regime awareness rather than a single headline return figure.",
    problem: "Factor signals can look persuasive in-sample while failing to survive new periods or shifting regimes. The research question was how to combine interpretable factors with a disciplined validation workflow that kept the comparison visible.",
    implementation: "The work engineered six composite factors and evaluated a HistGradientBoostingRegressor using a walk-forward process with periodic retraining and a SPY regime filter. The build focused on testing across periods and clearly separating baseline comparison from model output.",
    evidence: "The research backtest reports a 1.33 out-of-sample Sharpe versus a 0.66 SPY baseline, using 19 years of out-of-sample data, with a 22.7% annualized return and -23.1% maximum drawdown. These are academic research results, not an investable strategy or future-performance claim.",
    note: "Academic out-of-sample research/backtest: results communicate method and evaluation discipline, not live investment performance, investment advice, or a managed strategy.",
    links: [{ label: "View public research evidence", href: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030260308/neehOIWFcJZJXzDM.html", kind: "product" }],
  },
};

function iconFor(kind: CaseLink["kind"]) {
  if (kind === "github") return <Github size={17} />;
  if (kind === "deck") return <FileText size={17} />;
  return <Globe2 size={17} />;
}

export default function CaseStudy() {
  const slug = typeof window === "undefined" ? "rxcode" : window.location.pathname.split("/").filter(Boolean).at(-1) || "rxcode";
  const study = studies[slug] ?? studies.rxcode;
  const backHref = study.profile === "Markets" ? "/" : "/ai/";
  const backLabel = study.profile === "Markets" ? "Back to Markets profile" : "Back to AI Operations profile";
  const artifact = { rxcode: ["SESSION", "DIFF", "APPROVE"], "sport-ai": ["TRAJECTORY", "MATCH", "FALLBACK"], polyalpha: ["DATA", "VALIDATE", "TESTNET"], stubase: ["REPORT", "SCREEN", "EVIDENCE"], "rmbi-alpha": ["FACTOR", "WALK-FORWARD", "OOS"] }[study.slug] ?? ["INPUT", "REVIEW", "OUTPUT"];
  const rxcodeVisual = typeof window !== "undefined" && window.location.hostname.endsWith("github.io") ? "/assets/rxcode-agent-control-demo.png" : "/manus-storage/rxcode-agent-control-demo_2b76d471.png";

  return <div className={`app-shell case-page ${study.profile === "AI Engineering" ? "case-ai" : "case-markets"}`}>
    <header className="case-header"><a className="brand" href={backHref}><span className="brand-sigil"><WXYMark variant={study.profile === "Markets" ? "markets" : "ai"} /></span><span className="brand-copy"><strong>William Yong</strong><small>Case Studies / Evidence Record</small></span></a><nav className="case-profile-nav" aria-label="Profile navigation"><a className={study.profile === "Markets" ? "is-active" : ""} href="/">Markets</a><a className={study.profile === "AI Engineering" ? "is-active" : ""} href="/ai/">AI Engineering</a></nav></header>
    <main className="case-main"><div className="case-route-rail" aria-hidden="true"><span /><i /><b /></div><a className="case-back" href={backHref}><ArrowLeft size={16} /> {backLabel}</a><section className="case-hero"><div><p className="case-kicker">CASE {study.index} / {study.eyebrow}</p><p className="case-coordinate">ROUTE NODE {study.index} / EVIDENCE RECORD / {study.profile === "Markets" ? "MARKETS" : "AI OPS"}</p><h1>{study.title}</h1><p className="case-summary">{study.summary}</p></div><aside className="case-status"><span>PROFILE</span><strong>{study.profile}</strong><span>STATUS</span><strong>{study.status}</strong><span>MATURITY</span><strong>{study.status.includes("testnet") ? "Research boundary" : "Public evidence linked"}</strong></aside></section><section className="case-instrument" aria-label={`${study.title} project instrument`}><div className="case-instrument-head"><span>PROJECT ARTIFACT</span><strong>{study.profile === "Markets" ? "Research route" : "Agent control route"}</strong><em>COORD {study.index}.02</em></div>{study.slug === "rxcode" ? <img src={rxcodeVisual} alt="Conceptual RxCode agent-control workspace visual" /> : null}<div className="case-artifact-chain">{artifact.map((item, index) => <span key={item}><b>{String(index + 1).padStart(2, "0")}</b>{item}</span>)}</div><p>{study.profile === "Markets" ? "A bounded research trail: source data, validation, and a clearly stated route to use." : "A bounded operating loop: system input, a visible review gate, and a traceable output state."}</p></section><section className="case-grid" aria-label={`${study.title} project record`}><article className="case-block"><span><Lightbulb size={16} /> Problem</span><p>{study.problem}</p></article><article className="case-block"><span><Wrench size={16} /> Implementation</span><p>{study.implementation}</p></article><article className="case-block"><span><ShieldCheck size={16} /> Evidence</span><p>{study.evidence}</p></article><article className="case-block case-links"><span><ArrowUpRight size={16} /> Links</span>{study.links.length ? <div>{study.links.map((link) => <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined}>{iconFor(link.kind)} {link.label} <ArrowUpRight size={14} /></a>)}</div> : <p>Research record is summarised on this page; no public project endpoint is linked.</p>}</article></section>{study.note ? <p className="case-disclosure"><FileText size={15} /> {study.note}</p> : null}</main>
    <footer className="case-footer"><span>William Yong / evidence-led project record</span><a href="mailto:yongwilliam15@gmail.com">Open a conversation <ArrowUpRight size={15} /></a></footer>
  </div>;
}
