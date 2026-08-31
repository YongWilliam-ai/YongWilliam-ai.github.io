/**
 * Agent Operations Console — William Yong's AI Engineering / AI Agents profile.
 * Style contract: independent orange-control visual system, modular command surfaces,
 * visible review gates, and concise evidence-led project narratives.
 */
import { useEffect, useMemo, useState } from "react";
import {
  Activity,
  ArrowDown,
  ArrowUpRight,
  Blocks,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  ChevronDown,
  ChevronRight,
  Code2,
  Cpu,
  FileText,
  Flag,
  Github,
  Globe2,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Network,
  Rocket,
  ShieldCheck,
  Share2,
  Sun,
  UsersRound,
  Workflow,
  X,
} from "lucide-react";
import WXYMark from "../components/WXYMark";

type AssetKey = "hero" | "rxcode";
type ExperienceTrack = "all" | "engineering" | "operations" | "leadership";
type AgentMode = "build" | "review" | "deploy";

const assetFiles: Record<AssetKey, string> = {
  hero: "/manus-storage/william-hero-signal-field_756afc4e.png",
  rxcode: "/manus-storage/rxcode-agent-control-demo_2b76d471.png",
};

const githubAssets: Record<AssetKey, string> = {
  hero: "william-hero-signal-field.png",
  rxcode: "rxcode-agent-control-demo.png",
};

const navItems = [
  { label: "Console", id: "home" },
  { label: "Method", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Builds", id: "projects" },
  { label: "Toolkit", id: "skills" },
];

const agentModes: Record<AgentMode, { label: string; code: string; headline: string; typed: string; detail: string; metric: string }> = {
  build: {
    label: "Build",
    code: "MODE 01 / BUILD",
    headline: "Build systems agents can operate.",
    typed: "From LLM workflows to agent controls, start with useful operating constraints.",
    detail: "Design the workspace, tools, and data path around the people who will actually depend on it.",
    metric: "Inputs → tools → working loop",
  },
  review: {
    label: "Review",
    code: "MODE 02 / REVIEW",
    headline: "Make every agent action inspectable.",
    typed: "Evidence, diff review, explicit approvals, and a safe fallback when certainty is not earned.",
    detail: "Keep the provenance visible so outputs can be challenged, corrected, and trusted at the right boundary.",
    metric: "Evidence → review → approval",
  },
  deploy: {
    label: "Deploy",
    code: "MODE 03 / DEPLOY",
    headline: "Ship the control loop, not just a model demo.",
    typed: "Turn agent capability into a workflow that fits real teams, decisions, and accountability.",
    detail: "Connect product context, agent runtime, and operational feedback into a system that can improve in use.",
    metric: "Intent → action → feedback",
  },
};

const experience = [
  {
    track: "engineering" as const,
    period: "Jun–Aug 2026",
    company: "KNQ Technology",
    role: "Sport AI Agent Intern",
    status: "Evidence pipeline",
    description: "Engineered modular Python evidence pipelines for a sports-commentary quality workflow, aligning ball-trajectory data with official match-event logs; classified 63 events into 40 high-confidence commentary triggers and 23 rule-based safe fallbacks, with 10/10 unit and regression tests passed.",
    evidence: "63 events · 40 triggers · 23 fallbacks · 10/10 tests",
  },
  {
    track: "operations" as const,
    period: "Mar 2026–Present",
    company: "Futu Securities",
    role: "Global Campus Ambassador, HKUST",
    status: "Investor education",
    description: "Supports campus community engagement, investor-education sessions, and responsible financial-literacy activities for an SFC-regulated digital brokerage platform, without implying investment advice or sales authority.",
    evidence: "Investor education · regulated-finance context",
  },
  {
    track: "engineering" as const,
    period: "Dec 2025–Jan 2026",
    company: "United Technologies (Int’l) Ltd.",
    role: "AI Business Transformation Engineer Trainee",
    status: "LLM operations",
    description: "Supported AI-enabled accounting-workflow adoption for 15+ SMEs, resolved 50+ operational or integration issues, and built Excel VBA CRM automations for 20+ accounts; team delivery reported 40% less manual work, 30% lower downtime, 95% client satisfaction, 10+ hours saved weekly and approximately 25% operational savings.",
    evidence: "15+ SME workflows · 50+ issues · 20+ accounts",
  },
  {
    track: "engineering" as const,
    period: "Jun–Aug 2025",
    company: "EgogoMall",
    role: "Data Analyst Intern",
    status: "Data + automation",
    description: "Built Python (pandas/NumPy) and SQL data pipelines across 100,000+ transaction records, with moving-average forecasts, Excel/Python sales dashboards, and n8n CRM/customer-service automations.",
    evidence: "100k+ records · 15% faster turnover · ~25% savings",
  },
  {
    track: "operations" as const,
    period: "Jun–Aug 2024",
    company: "CTM — Companhia de Telecomunicações de Macau",
    role: "Summer Intern — 4-Department Rotation Programme",
    status: "Cross-functional operations",
    description: "Completed a structured rotation across Big Data Analytics, Fibre Network Operations, Social Media & Live Stream, and CRM Customer Service, supporting operational reporting, internal documentation, system updates, and customer communication.",
    evidence: "Data, network, media & CRM operations exposure",
  },
  {
    track: "leadership" as const,
    period: "2025–Present",
    company: "HKUST Fencing Team",
    role: "President",
    status: "Team operating system",
    description: "Leads 30+ members, team operations, beginner and intermediate training, and events; has managed a HKD 50,000 budget and 5+ events for 300+ participants while applying 10+ years of competitive épée discipline.",
    evidence: "30+ members · HKD 50,000 budget · 5+ events",
  },
  {
    track: "leadership" as const,
    period: "Nov 2024–Nov 2025",
    company: "Federation of Macau Students in Hong Kong",
    role: "External Vice President",
    status: "Stakeholder operations",
    description: "Managed a HK$50,000+ budget, delivered five events for 300+ participants, and established partnerships across local businesses and universities.",
    evidence: "HK$50,000+ managed / 10+ partnerships",
  },
];

const skills = [
  { icon: Bot, label: "AI Quality & Reliability", items: ["Evidence pipelines", "Human approval gates", "Offline review outputs", "Unit & regression testing", "AI quality & localisation"] },
  { icon: ShieldCheck, label: "Data & Technical Systems", items: ["Python · pandas · NumPy · scikit-learn", "SQL & data pipelines", "Excel/VBA automation", "React · Solidity · Git/GitHub", "n8n workflow automation"] },
  { icon: Code2, label: "Product & Execution", items: ["Investor education", "Research communication", "Customer discovery", "U.S. equities product operations", "Team leadership"] },
];

function getAsset(key: AssetKey) {
  if (typeof window !== "undefined" && window.location.hostname.endsWith("github.io")) return `/assets/${githubAssets[key]}`;
  return assetFiles[key];
}

export default function AIProfile() {
  const [activeSection, setActiveSection] = useState("home");
  const [isLight, setIsLight] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [agentMode, setAgentMode] = useState<AgentMode>("build");
  const [experienceTrack, setExperienceTrack] = useState<ExperienceTrack>("all");
  const mode = agentModes[agentMode];

  const visibleExperience = useMemo(
    () => experience.filter((item) => experienceTrack === "all" || item.track === experienceTrack),
    [experienceTrack],
  );

  useEffect(() => { document.documentElement.dataset.theme = isLight ? "light" : "dark"; }, [isLight]);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-section]"));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActiveSection(visible.target.id);
    }, { rootMargin: "-22% 0px -62% 0px", threshold: [0.08, 0.3, 0.6] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reveals = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-revealed"); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    reveals.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }); setIsMenuOpen(false); };

  return (
    <div className="app-shell ai-profile ai-console-profile">
      <div className="ambient-orb ambient-orb-one" aria-hidden="true" />
      <div className="ambient-orb ambient-orb-two" aria-hidden="true" />
      <header className="site-header ai-site-header">
        <a className="brand" href="#home" onClick={() => scrollTo("home")}>
          <span className="brand-sigil"><WXYMark variant="ai" /></span>
          <span className="brand-copy"><strong>William Yong</strong><small>WXY / Agent Systems</small></span>
        </a>
        <nav className="desktop-nav" aria-label="AI profile navigation">{navItems.map((item) => <a key={item.id} href={`#${item.id}`} className={activeSection === item.id ? "is-active" : ""} onClick={(event) => { event.preventDefault(); scrollTo(item.id); }}>{item.label}</a>)}</nav>
        <nav className="profile-switch" aria-label="Portfolio profile"><a href="/">Markets</a><a className="is-active" href="/ai/" aria-current="page">AI Ops</a></nav>
        <div className="header-actions"><button className="icon-button theme-button" type="button" aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"} onClick={() => setIsLight((current) => !current)}>{isLight ? <Moon size={17} /> : <Sun size={17} />}</button><button className="icon-button mobile-menu-button" type="button" aria-label={isMenuOpen ? "Close navigation" : "Open navigation"} onClick={() => setIsMenuOpen((current) => !current)}>{isMenuOpen ? <X size={19} /> : <Menu size={19} />}</button><button className="header-contact" type="button" onClick={() => scrollTo("contact")}>Open channel <ArrowUpRight size={16} /></button></div>
        <nav className={`mobile-nav ${isMenuOpen ? "is-open" : ""}`} aria-label="AI profile mobile navigation">{navItems.map((item, index) => <button key={item.id} type="button" onClick={() => scrollTo(item.id)} style={{ transitionDelay: `${index * 35}ms` }}><span>0{index + 1}</span>{item.label}<ChevronRight size={17} /></button>)}</nav>
      </header>

      <main>
        <div className="signal-rail ai-signal-rail" aria-hidden="true"><span /></div>
        <section id="home" className="hero ai-console-hero section-anchor" data-section>
          <div className="ai-route-bar" data-reveal><span><Activity size={14} /> AI ENGINEERING &amp; AGENT SYSTEMS</span><span>PROFILE 02 / BUILD · REVIEW · DEPLOY</span><a href="/">Markets Research &amp; Operations <ArrowUpRight size={14} /></a></div>
          <div className="hero-layout ai-console-layout">
            <div className="hero-copy" data-reveal>
              <div className="eyebrow"><span className="pulse-dot" /> Hong Kong · AI systems</div>
              <p className="hero-discipline">AI ENGINEERING · AI AGENTS · REVIEWABLE WORKFLOWS · TECHNICAL PRODUCT</p>
              <p className="ai-mode-code">{mode.code}</p>
              <h1><span>William Yong</span><strong>{mode.headline}</strong></h1>
              <p className="typed-line" aria-live="polite">{mode.typed}<span className="typing-cursor" aria-hidden="true" /></p>
              <p className="hero-intro">HKUST RMBI student and technical product builder working across LLM-enabled operations, agent-control workflows, multimodal evidence systems, data automation, and AI-native developer tools.</p>
              <div className="agent-mode-tabs" role="tablist" aria-label="Agent operating modes">{(Object.keys(agentModes) as AgentMode[]).map((key) => <button className={agentMode === key ? "is-active" : ""} key={key} role="tab" aria-selected={agentMode === key} type="button" onClick={() => setAgentMode(key)}><span>{agentModes[key].code.split(" / ")[1]}</span>{agentModes[key].label}</button>)}</div>
              <div className="hero-actions"><button className="button button-primary" type="button" onClick={() => scrollTo("projects")}>Inspect AI work <ArrowDown size={16} /></button><a className="button button-secondary" href="https://github.com/YongWilliam-ai" target="_blank" rel="noreferrer">GitHub profile <Github size={16} /></a></div>
              <dl className="hero-credentials"><div><dt>Current profile</dt><dd>HKUST RMBI student</dd></div><div><dt>System posture</dt><dd>Evidence + review</dd></div><div><dt>Product route</dt><dd>RxCode co-founder</dd></div></dl>
            </div>
            <aside className="agent-console-panel" data-reveal aria-label="Interactive AI operations console">
              <div className="console-panel-top"><span><Network size={15} /> LIVE CONTROL SURFACE</span><span className="console-live-dot">ACTIVE</span></div>
              <div className="console-route-visual"><span className="route-node route-input">Input</span><i /><span className="route-node route-agent">Agent</span><i /><span className="route-node route-review">Review</span><i /><span className="route-node route-action">Action</span></div>
              <div className="console-readout"><span>MODE SUMMARY</span><strong>{mode.metric}</strong><p>{mode.detail}</p></div>
              <div className="console-stats"><div><small>01</small><span>Tool scope</span><strong>Visible</strong></div><div><small>02</small><span>Output state</span><strong>Reviewable</strong></div><div><small>03</small><span>Fallback</span><strong>Explicit</strong></div></div>
              <button type="button" className="console-jump" onClick={() => scrollTo("experience")}>See operating record <ChevronRight size={16} /></button>
            </aside>
          </div>
        </section>

        <section id="about" className="section about-section section-anchor" data-section>
          <div className="section-label" data-reveal><span>01</span><p>Method / operating thesis</p><em>NODE AI-01 / REVIEWABLE</em></div>
          <div className="about-layout"><div className="section-heading" data-reveal><p className="overline">An engineering-first view of autonomy</p><h2>Agents should earn the right to act.</h2></div><div className="about-copy" data-reveal><p>I build AI workflows where output quality is visible, traceable, and open to review. That means grounding action in structured evidence, designing a clear fallback when certainty is insufficient, and keeping human approval available at the moments that matter.</p><p>From sport-event evidence matching to coding-agent control surfaces and LLM-enabled operations, I focus on the bridge between model capability and systems people can actually trust.</p><div className="about-links"><a href="https://github.com/YongWilliam-ai/pickleball" target="_blank" rel="noreferrer">Sport AI evidence repo <ArrowUpRight size={15} /></a><a href="https://github.com/rxtech-lab/rxcode" target="_blank" rel="noreferrer">RxCode open source <ArrowUpRight size={15} /></a></div></div><aside className="fencing-note ai-principle" data-reveal><div className="project-icon"><Workflow size={23} /></div><div><span className="note-index">CONTROL PRINCIPLE</span><h3>Evidence before autonomy.</h3><p>Every output needs a source, a confidence boundary, and a route for human review.</p></div></aside></div>
        </section>

        <section id="experience" className="section experience-section ai-experience-section section-anchor" data-section>
          <div className="section-label" data-reveal><span>02</span><p>Experience / operating record</p><em>NODE AI-02 / MULTI-DOMAIN</em></div>
          <div className="projects-heading-row" data-reveal><div className="section-heading experience-heading"><p className="overline">Technical systems need context beyond the model</p><h2>Engineering, operations, and leadership in one working record.</h2></div><div className="experience-filter" role="tablist" aria-label="Experience filters">{(["all", "engineering", "operations", "leadership"] as ExperienceTrack[]).map((track) => <button key={track} type="button" className={experienceTrack === track ? "is-active" : ""} onClick={() => setExperienceTrack(track)}>{track === "all" ? "All" : track}</button>)}</div></div>
          <div className="experience-list" aria-live="polite">{visibleExperience.map((item, index) => <details className="experience-entry experience-disclosure ai-experience-disclosure is-revealed" key={`${item.company}-${item.role}`}><summary><span className="experience-marker" aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span></span><span className="experience-meta"><p>{item.period}</p><span>{item.status}</span></span><span className="experience-summary"><span className="company-name">{item.company}</span><strong>{item.role}</strong><em>{item.evidence}</em><span className="experience-open-label">Open full scope</span></span><ChevronDown className="experience-chevron" size={17} aria-hidden="true" /></summary><div className="experience-detail"><p>{item.description}</p><span className="experience-evidence"><Activity size={12} /> Evidence record: {item.evidence}</span></div></details>)}</div>
        </section>

        <section id="projects" className="section projects-section section-anchor" data-section>
          <div className="section-label" data-reveal><span>03</span><p>Builds / project evidence</p><em>NODE AI-03 / SHIP + REVIEW</em></div>
          <div className="projects-heading-row" data-reveal><div className="section-heading"><p className="overline">Products with visible engineering boundaries</p><h2>Agent systems, not just AI demos.</h2></div><a className="text-link" href="https://github.com/YongWilliam-ai" target="_blank" rel="noreferrer">Inspect GitHub <Github size={16} /></a></div>
          <div className="projects-grid ai-projects-grid">
            <article className="project-card project-card-featured ai-featured-card rxcode-demo-card" data-reveal><div className="rxcode-demo-visual"><img src={getAsset("rxcode")} alt="Conceptual product visual for an AI coding-agent control workspace" /><span>CONCEPTUAL PRODUCT VISUAL</span></div><div className="project-card-content"><div className="project-topline"><span>01 / AI product &amp; growth</span><span className="status-badge status-green">ACTIVE · HKUST DREAM BUILDER 2025/26</span></div><h3>RxCode</h3><p>Co-founded an AI-assisted development control layer that lets teams run, review and monitor coding-agent tasks while preserving human approval, Git continuity and mobile visibility. William leads HKUST go-to-market, customer discovery, product positioning and commercialisation planning.</p><div className="compact-metrics"><span><strong>Dream Builder</strong> Cohort #2</span><span><strong>HK$10,000</strong> approved startup support</span><span><strong>12 months</strong> validation roadmap</span></div><p className="project-boundary">Role scope is AI product and growth—not lead engineering or system-architecture ownership.</p><div className="project-footer"><span>SwiftUI · Claude Code · Codex · ACP</span><div className="project-actions"><a href="https://code.rxlab.app/" target="_blank" rel="noreferrer"><Globe2 size={15} /> Product</a><a href="https://github.com/rxtech-lab/rxcode" target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a><a href="/decks/rxcode-dream-builder-pitch.pdf" target="_blank" rel="noreferrer"><FileText size={15} /> Deck</a><a href="/case/rxcode/"><ArrowUpRight size={15} /> Case study</a></div></div></div></article>
            <article className="project-card project-card-ai" data-reveal><div className="project-card-content"><div className="project-topline"><span>02 / Multimodal evidence pipeline</span><span className="status-badge status-violet">Evidence review</span></div><div className="project-icon"><Bot size={23} /></div><h3>Sport AI Evidence System</h3><p>A Python pipeline that connects trajectory evidence with event facts before generating bilingual sport commentary—explicitly preserving safe fallbacks for uncertain cases.</p><div className="project-footer"><span>Python · multimodal evidence · QA</span><div className="project-actions"><a href="https://github.com/YongWilliam-ai/pickleball" target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a><a href="/case/sport-ai/"><ArrowUpRight size={15} /> Case study</a></div></div></div></article>
            <article className="project-card project-card-ai" data-reveal><div className="project-card-content"><div className="project-topline"><span>03 / Prediction-market research &amp; DeFi systems</span><span className="status-badge status-outline">BACKTESTED / TESTNET</span></div><div className="project-icon"><BrainCircuit size={23} /></div><h3>PolyAlpha Protocol</h3><p>A testnet and backtested DeFi research prototype combining an ERC-4626 vault, Solidity smart contracts, a React dashboard, AI-agent orchestration and on-chain oracle-input logging.</p><p className="project-boundary">Historical/backtested research and testnet prototype only; not a live fund, managed-investment product, live market maker, or realised P&amp;L claim.</p><div className="project-footer"><span>Python · Solidity · Polygon · React</span><div className="project-actions"><a href="https://polyalpha-dashboard.vercel.app/" target="_blank" rel="noreferrer"><Globe2 size={15} /> Testnet</a><a href="https://github.com/YongWilliam-ai/polyalpha-protocol" target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a><a href="/case/polyalpha/"><ArrowUpRight size={15} /> Case study</a></div></div></div></article>
            <article className="project-card project-card-ai ai-stubase-card" data-reveal><div className="project-card-content"><div className="project-topline"><span>04 / Anti-fraud infrastructure</span><span className="status-badge status-outline">MVP / RESEARCH PROTOTYPE</span></div><div className="project-icon"><Blocks size={23} /></div><h3>StuBase</h3><p>A Web3 anti-fraud and compliance prototype for Hong Kong students, joining AI-assisted message screening with identity integrity, KYC/AML-oriented logic, Polygon L2, Solidity, IPFS, zero-knowledge identity concepts and DAO governance.</p><div className="project-footer"><span>Solidity · Polygon · IPFS · React · AI classifier</span><div className="project-actions"><a href="https://stubase.xyz/" target="_blank" rel="noreferrer"><Globe2 size={15} /> Product</a><a href="https://github.com/YongWilliam-ai/stubase2026" target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a><a href="/case/stubase/"><ArrowUpRight size={15} /> Case study</a></div></div></div></article>
          </div>
          <p className="project-disclosure" data-reveal><FileText size={15} /> Public links point to live products, testnets, open-source repositories, or supplied presentation decks. Project maturity is labelled at card level.</p>
        </section>

        <section id="skills" className="section skills-section section-anchor" data-section><div className="section-label" data-reveal><span>04</span><p>Toolkit / technical foundations</p><em>NODE AI-04 / BUILD RANGE</em></div><div className="skills-layout"><div className="section-heading" data-reveal><p className="overline">One profile, three connected toolkits</p><h2>Technical depth matters when it connects to a market, a user, or a decision.</h2><div className="skills-ledger"><span>METHOD</span><strong>Research → Build → Review</strong><span>OUTPUT</span><strong>Decision-ready analysis and auditable systems</strong></div></div><div className="skill-groups" data-reveal>{skills.map((group) => { const Icon = group.icon; return <article className="skill-group" key={group.label}><div className="skill-group-heading"><Icon size={18} /><h3>{group.label}</h3></div><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>; })}</div></div></section>

        <section className="section ai-evidence-section"><div className="section-label" data-reveal><span>05</span><p>Foundations / leadership range</p><em>NODE AI-05 / CONTEXT</em></div><div className="ai-evidence-grid"><article data-reveal><GraduationCap size={21} /><span>EDUCATION</span><h3>Engineering foundations with a business-intelligence lens.</h3><p>HKUST BSc in Risk Management &amp; Business Intelligence · Mathematics Minor · Expected Jun 2028 · GPA 3.871/4.30 · Dean&apos;s List, Fall 2024 · Beyond Academic Admissions Scholarship · HKGCC Scholarship for Innovation &amp; Creativity.</p></article><article data-reveal><Flag size={21} /><span>COMPETITIVE DISCIPLINE</span><h3>10+ years of épée taught precise operating habits.</h3><p>President, HKUST Fencing Team, 2025–Present. Leads 30+ members; has managed a HKD 50,000 budget and 5+ events for 300+ participants. The habit: observe, decide, and own the consequence.</p></article><article data-reveal><UsersRound size={21} /><span>STAKEHOLDER OPERATIONS</span><h3>Community work with budgets, partners, and delivery pressure.</h3><p>Federation of Macau Students in Hong Kong: HK$50,000+ budget, five events, 300+ participants, and 10+ business/university partnerships.</p></article></div></section>

        <section id="contact" className="section contact-section section-anchor" data-section><div className="section-label" data-reveal><span>06</span><p>Contact / open channel</p><em>NODE AI-06 / T+04</em></div><div className="contact-layout"><div className="contact-copy" data-reveal><p className="overline">Open to relevant work and thoughtful collaboration</p><h2>Let&apos;s make the control loop clearer.</h2><p>I welcome conversations on 2027 Markets internships, quantitative research, market risk, electronic-trading-adjacent analytics, AI-enabled operations and early-stage product work.</p><div className="contact-direct-links"><a href="mailto:yongwilliam15@gmail.com"><Mail size={16} /> yongwilliam15@gmail.com</a><a href="https://www.linkedin.com/in/william-yong-profile" target="_blank" rel="noreferrer"><Linkedin size={16} /> linkedin.com/in/william-yong-profile</a><a href="https://github.com/YongWilliam-ai" target="_blank" rel="noreferrer"><Github size={16} /> github.com/YongWilliam-ai</a><a href="https://code.rxlab.app/" target="_blank" rel="noreferrer"><Globe2 size={16} /> code.rxlab.app</a></div><p className="location-line"><MapPin size={15} /> Hong Kong · HKUST · Expected graduation June 2028</p></div><aside className="ai-contact-panel" data-reveal><span>ROUTE STATUS</span><strong>OPEN TO TECHNICAL COLLABORATION</strong><p>Please share the opportunity, problem or collaboration idea. I will respond where there is a clear fit.</p><a className="share-link" href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fyongwilliam-ai.github.io%2Fai%2F" target="_blank" rel="noreferrer"><Share2 size={15} /> Share AI profile</a><a href="mailto:yongwilliam15@gmail.com?subject=AI%20Engineering%20Portfolio%20Inquiry">Email William <ArrowUpRight size={16} /></a></aside></div></section>
      </main>
      <footer className="site-footer"><div className="footer-brand"><WXYMark variant="ai" decorative /><span>William Yong / AI Agent Systems</span></div><div className="footer-context">Hong Kong · HKUST · Expected graduation June 2028</div><div className="footer-links"><a href="/">Markets profile</a><a href="https://github.com/YongWilliam-ai" target="_blank" rel="noreferrer">GitHub</a><a href="mailto:yongwilliam15@gmail.com">Email</a></div></footer>
    </div>
  );
}
