/**
 * Signal Path Terminal — AI Engineering / AI Agents edition.
 * Style contract: retains the research-terminal rail while shifting the narrative toward
 * agent reliability, evidence pipelines, and human-in-the-loop product engineering.
 */
import { useEffect, useState } from "react";
import {
  Activity,
  ArrowDown,
  ArrowUpRight,
  Blocks,
  Bot,
  BrainCircuit,
  ChevronRight,
  Code2,
  Cpu,
  FileText,
  Github,
  Globe2,
  Mail,
  MapPin,
  Menu,
  Moon,
  ShieldCheck,
  Sun,
  Workflow,
  X,
} from "lucide-react";

type AssetKey = "hero" | "polyalpha" | "quant" | "fencing" | "mark";

const assetFiles: Record<AssetKey, string> = {
  hero: "william-hero-signal-field_756afc4e.png",
  polyalpha: "polyalpha-vault-visual_fc3dcaee.png",
  quant: "quant-research-visual_b4b35ff3.png",
  fencing: "fencing-signal-visual_036ce8d4.png",
  mark: "william-signal-mark_89e972c4.png",
};

const githubAssets: Record<AssetKey, string> = {
  hero: "william-hero-signal-field.webp",
  polyalpha: "polyalpha-vault-visual.webp",
  quant: "quant-research-visual.webp",
  fencing: "fencing-signal-visual.webp",
  mark: "william-signal-mark.webp",
};

const navItems = [
  { label: "Approach", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Toolkit", id: "skills" },
  { label: "Contact", id: "contact" },
];

const experience = [
  {
    period: "Jun–Aug 2026",
    company: "KNQ Technology",
    role: "Sport AI Agent Intern",
    status: "Evidence pipeline",
    description:
      "Engineered a modular Python ball-evidence pipeline that aligns shot-level trajectory data with match events, preserving safe fallbacks when the evidence does not support a commentary claim.",
    evidence: "63 validated events / 10 passing regression tests",
  },
  {
    period: "Dec 2025–Jan 2026",
    company: "United Technologies (Int’l) Ltd.",
    role: "AI Business Transformation Engineer Trainee",
    status: "LLM operations",
    description:
      "Deployed API-connected LLM workflow automations across 15+ SME clients, translating operational constraints into usable human workflows rather than detached demonstrations.",
    evidence: "15+ clients / 40% reported manual-time reduction",
  },
  {
    period: "Jul 2026–Present",
    company: "RxCode",
    role: "Co-founder, AI Product & Growth",
    status: "Agent control layer",
    description:
      "Building the operating layer around coding agents: visible sessions, diff review, human approval, and a workflow that maintains Git continuity as agents become more capable.",
    evidence: "HKUST Dream Builder Cohort #2 / active product",
  },
];

const skills = [
  {
    icon: Bot,
    label: "AI Agents & Orchestration",
    items: ["LLM integration", "Multi-agent workflows", "Tool use & function calling", "Prompt-system design", "ACP-compatible workflows"],
  },
  {
    icon: ShieldCheck,
    label: "Evidence & Reliability",
    items: ["Evidence pipelines", "Human approval gates", "Offline review outputs", "Regression testing", "Safe fallbacks"],
  },
  {
    icon: Code2,
    label: "Build & Deploy",
    items: ["Python · pandas · NumPy", "React & product prototyping", "SQL & data systems", "n8n workflow automation", "Solidity & Web3"],
  },
];

function getAsset(key: AssetKey) {
  if (typeof window !== "undefined" && window.location.hostname.endsWith("github.io")) {
    return `/assets/${githubAssets[key]}`;
  }
  return `/manus-storage/${assetFiles[key]}`;
}

export default function AIProfile() {
  const [activeSection, setActiveSection] = useState("home");
  const [isLight, setIsLight] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typedLine, setTypedLine] = useState("");
  const typeLine = "Evidence-aware agents, reviewable workflows, and systems that earn autonomy.";

  useEffect(() => {
    document.documentElement.dataset.theme = isLight ? "light" : "dark";
  }, [isLight]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setTypedLine(typeLine);
      return;
    }
    let character = 0;
    const interval = window.setInterval(() => {
      character += 1;
      setTypedLine(typeLine.slice(0, character));
      if (character >= typeLine.length) window.clearInterval(interval);
    }, 20);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-section]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-22% 0px -62% 0px", threshold: [0.08, 0.3, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reveals = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );
    reveals.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuOpen(false);
  };

  return (
    <div className="app-shell ai-profile">
      <div className="ambient-orb ambient-orb-one" aria-hidden="true" />
      <div className="ambient-orb ambient-orb-two" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#home" onClick={() => scrollTo("home")}>
          <span className="brand-sigil"><img className="brand-mark" src={getAsset("mark")} alt="WY signal mark" /><i aria-hidden="true" /></span>
          <span className="brand-copy"><strong>William Yong</strong><small>WY / Agent Systems</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => <a key={item.id} href={`#${item.id}`} className={activeSection === item.id ? "is-active" : ""} onClick={(event) => { event.preventDefault(); scrollTo(item.id); }}>{item.label}</a>)}
        </nav>
        <nav className="profile-switch" aria-label="Portfolio profile">
          <a href="/">Markets</a>
          <a className="is-active" href="/ai/" aria-current="page">AI Engineering</a>
        </nav>
        <div className="header-actions">
          <button className="icon-button theme-button" type="button" aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"} onClick={() => setIsLight((current) => !current)}>{isLight ? <Moon size={17} /> : <Sun size={17} />}</button>
          <button className="icon-button mobile-menu-button" type="button" aria-label={isMenuOpen ? "Close navigation" : "Open navigation"} onClick={() => setIsMenuOpen((current) => !current)}>{isMenuOpen ? <X size={19} /> : <Menu size={19} />}</button>
          <button className="header-contact" type="button" onClick={() => scrollTo("contact")}>Open channel <ArrowUpRight size={16} /></button>
        </div>
        <nav className={`mobile-nav ${isMenuOpen ? "is-open" : ""}`} aria-label="Mobile navigation">
          {navItems.map((item, index) => <button key={item.id} type="button" onClick={() => scrollTo(item.id)} style={{ transitionDelay: `${index * 35}ms` }}><span>0{index + 1}</span>{item.label}<ChevronRight size={17} /></button>)}
        </nav>
      </header>

      <main>
        <div className="signal-rail" aria-hidden="true"><span /></div>
        <section id="home" className="hero section-anchor" data-section>
          <div className="hero-layout">
            <div className="hero-copy" data-reveal>
              <div className="eyebrow"><span className="pulse-dot" /> Hong Kong · Agent systems</div>
              <p className="hero-discipline">AI ENGINEERING · AI AGENTS · PRODUCT SYSTEMS · EVIDENCE WORKFLOWS</p>
              <h1><span>William Yong</span><strong>Building agents that can be reviewed.</strong></h1>
              <p className="typed-line" aria-label={typeLine}>{typedLine}<span className="typing-cursor" aria-hidden="true" /></p>
              <p className="hero-intro">HKUST RMBI student and technical product builder working across LLM-enabled automation, agent-control workflows, multimodal evidence systems, and AI-native developer tools.</p>
              <div className="hero-actions"><button className="button button-primary" type="button" onClick={() => scrollTo("projects")}>Trace AI work <ArrowDown size={16} /></button><a className="button button-secondary" href="https://github.com/YongWilliam-ai" target="_blank" rel="noreferrer">GitHub profile <Github size={16} /></a></div>
              <dl className="hero-credentials"><div><dt>Current role</dt><dd>Sport AI Agent Intern</dd></div><div><dt>Build focus</dt><dd>Agents + review gates</dd></div><div><dt>Product route</dt><dd>RxCode co-founder</dd></div></dl>
            </div>
            <figure className="hero-instrument ai-hero-instrument" data-reveal>
              <img src={getAsset("hero")} alt="Abstract AI agent signal terrain" />
              <div className="instrument-overlay" aria-hidden="true" /><div className="instrument-axis axis-x" aria-hidden="true" /><div className="instrument-axis axis-y" aria-hidden="true" />
              <div className="instrument-readout readout-top"><span>AGENT PROFILE</span><strong>02 / 04</strong></div>
              <div className="instrument-readout readout-bottom"><span>CONTROL LOOP</span><strong>Observe → validate → act</strong></div>
              <figcaption><BrainCircuit size={14} /> Reliability is a product feature, not a post-launch patch.</figcaption>
            </figure>
          </div>
          <div className="hero-scroll-cue" aria-hidden="true"><span>TRACE THE AGENT PATH</span><i /></div>
        </section>

        <section id="about" className="section about-section section-anchor" data-section>
          <div className="section-label" data-reveal><span>01</span><p>Approach / operating thesis</p><em>NODE AI-01 / T+00</em></div>
          <div className="about-layout">
            <div className="section-heading" data-reveal><p className="overline">An engineering-first view of autonomy</p><h2>Agents should earn the right to act.</h2></div>
            <div className="about-copy" data-reveal><p>I build AI workflows where output quality is visible, traceable, and open to review. That means grounding action in structured evidence, designing a clear fallback when certainty is insufficient, and keeping human approval available at the moments that matter.</p><p>From sport-event evidence matching to coding-agent control surfaces and LLM-enabled operations, I focus on the bridge between model capability and systems people can actually trust.</p><div className="about-links"><a href="https://github.com/YongWilliam-ai/pickleball" target="_blank" rel="noreferrer">Sport AI evidence repo <ArrowUpRight size={15} /></a><a href="https://github.com/rxtech-lab/rxcode" target="_blank" rel="noreferrer">RxCode open source <ArrowUpRight size={15} /></a></div></div>
            <aside className="fencing-note ai-principle" data-reveal><div className="project-icon"><Workflow size={23} /></div><div><span className="note-index">CONTROL PRINCIPLE</span><h3>Evidence before autonomy.</h3><p>Every output needs a source, a confidence boundary, and a route for human review.</p></div></aside>
          </div>
        </section>

        <section id="experience" className="section experience-section section-anchor" data-section>
          <div className="section-label" data-reveal><span>02</span><p>Experience / applied AI systems</p><em>NODE AI-02 / T+01</em></div>
          <div className="section-heading experience-heading" data-reveal><p className="overline">From data evidence to agent controls</p><h2>Technical work that keeps operational reality in view.</h2></div>
          <div className="experience-list">{experience.map((item, index) => <article className="experience-entry" data-reveal key={`${item.company}-${item.role}`}><div className="experience-marker" aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span></div><div className="experience-meta"><p>{item.period}</p><span>{item.status}</span></div><div className="experience-content"><p className="company-name">{item.company}</p><h3>{item.role}</h3><p>{item.description}</p><span className="experience-evidence"><Activity size={12} /> {item.evidence}</span></div></article>)}</div>
        </section>

        <section id="projects" className="section projects-section section-anchor" data-section>
          <div className="section-label" data-reveal><span>03</span><p>Selected work / agent trail</p><em>NODE AI-03 / T+02</em></div>
          <div className="projects-heading-row" data-reveal><div className="section-heading"><p className="overline">Products with visible engineering boundaries</p><h2>Agent systems, not just AI demos.</h2></div><a className="text-link" href="https://github.com/YongWilliam-ai" target="_blank" rel="noreferrer">Inspect GitHub <Github size={16} /></a></div>
          <div className="projects-grid ai-projects-grid">
            <article className="project-card project-card-featured ai-featured-card" data-reveal><div className="ai-project-side"><Cpu size={42} /><span>AI CONTROL LAYER</span><i /></div><div className="project-card-content"><div className="project-topline"><span>01 / Coding-agent operations</span><span className="status-badge status-green">Open source / active</span></div><h3>RxCode</h3><p>A public macOS command center for AI coding agents, designed around live agent sessions, diff review, permission approvals, project workflows, and agent-client interoperability.</p><div className="project-footer"><span>SwiftUI · Claude Code · Codex · ACP</span><div className="project-actions"><a href="https://code.rxlab.app/" target="_blank" rel="noreferrer"><Globe2 size={15} /> Product</a><a href="https://github.com/rxtech-lab/rxcode" target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a><a href="/decks/rxcode-dream-builder-pitch.pdf" target="_blank" rel="noreferrer"><FileText size={15} /> Deck</a></div></div></div></article>
            <article className="project-card project-card-ai" data-reveal><div className="project-card-content"><div className="project-topline"><span>02 / Multimodal evidence pipeline</span><span className="status-badge status-violet">Evidence review</span></div><div className="project-icon"><Bot size={23} /></div><h3>Sport AI Evidence System</h3><p>A Python pipeline that connects trajectory evidence with event facts before generating bilingual sport commentary—explicitly preserving safe fallbacks for uncertain cases.</p><div className="project-footer"><span>Python · multimodal evidence · QA</span><div className="project-actions"><a href="https://github.com/YongWilliam-ai/pickleball" target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a></div></div></div></article>
            <article className="project-card project-card-ai" data-reveal><div className="project-card-content"><div className="project-topline"><span>03 / Agent-native market research</span><span className="status-badge status-outline">Research / testnet</span></div><div className="project-icon"><BrainCircuit size={23} /></div><h3>PolyAlpha Protocol</h3><p>An AI-driven Polygon prediction-market research prototype with a documented testnet interface, historical research inputs, and explicit guardrails around live-investment claims.</p><div className="project-footer"><span>Python · Solidity · Chainlink</span><div className="project-actions"><a href="https://polyalpha-dashboard.vercel.app/" target="_blank" rel="noreferrer"><Globe2 size={15} /> Testnet</a><a href="https://github.com/YongWilliam-ai/polyalpha-protocol" target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a><a href="/decks/polyalpha-protocol-pitch.pdf" target="_blank" rel="noreferrer"><FileText size={15} /> Deck</a></div></div></div></article>
            <article className="project-card project-card-ai ai-stubase-card" data-reveal><div className="project-card-content"><div className="project-topline"><span>04 / Anti-fraud intelligence</span><span className="status-badge status-outline">MVP</span></div><div className="project-icon"><Blocks size={23} /></div><h3>StuBase</h3><p>A student-focused anti-fraud intelligence MVP combining AI pre-screening with transparent evidence handling, on-chain records, and accountable community governance.</p><div className="project-footer"><span>AI screening · Polygon · IPFS</span><div className="project-actions"><a href="https://stubase.xyz/" target="_blank" rel="noreferrer"><Globe2 size={15} /> Product</a><a href="https://github.com/YongWilliam-ai/stubase2026" target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a></div></div></div></article>
          </div>
          <p className="project-disclosure" data-reveal><FileText size={15} /> Public links point to live products, testnets, open-source repositories, or supplied presentation decks. Project maturity is labelled at card level.</p>
        </section>

        <section id="skills" className="section skills-section section-anchor" data-section><div className="section-label" data-reveal><span>04</span><p>Toolkit / implementation practice</p><em>NODE AI-04 / T+03</em></div><div className="skills-layout"><div className="section-heading" data-reveal><p className="overline">Capability becomes useful when it is reviewable</p><h2>Build quickly. Make the work inspectable.</h2><div className="skills-ledger"><span>METHOD</span><strong>Evidence → agent → review</strong><span>OUTPUT</span><strong>Human-usable systems</strong></div></div><div className="skill-groups" data-reveal>{skills.map((group) => { const Icon = group.icon; return <article className="skill-group" key={group.label}><div className="skill-group-heading"><Icon size={18} /><h3>{group.label}</h3></div><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>; })}</div></div></section>

        <section id="contact" className="section contact-section section-anchor" data-section><div className="section-label" data-reveal><span>05</span><p>Contact / open channel</p><em>NODE AI-05 / T+04</em></div><div className="contact-layout"><div className="contact-copy" data-reveal><p className="overline">For agent systems, AI engineering, and technical product work</p><h2>Let&apos;s make the control loop clearer.</h2><p>If you are building an AI product, an agent workflow, or a system that needs more reliable evidence, I&apos;m interested in the operating constraints as much as the model choice.</p><div className="contact-direct-links"><a href="mailto:yongwilliam15@gmail.com"><Mail size={16} /> yongwilliam15@gmail.com</a><a href="https://github.com/YongWilliam-ai" target="_blank" rel="noreferrer"><Github size={16} /> github.com/YongWilliam-ai</a><a href="https://code.rxlab.app/" target="_blank" rel="noreferrer"><Globe2 size={16} /> code.rxlab.app</a></div><p className="location-line"><MapPin size={15} /> Hong Kong · HKUST · AI Engineering / AI Agents</p></div><aside className="ai-contact-panel" data-reveal><span>ROUTE STATUS</span><strong>OPEN TO TECHNICAL COLLABORATION</strong><p>Send a concise note with the system, the constraint, and the decision that needs to be made.</p><a href="mailto:yongwilliam15@gmail.com?subject=AI%20Engineering%20Portfolio%20Inquiry">Email William <ArrowUpRight size={16} /></a></aside></div></section>
      </main>
      <footer className="site-footer"><div className="footer-brand"><img src={getAsset("mark")} alt="" /><span>William Yong / Agent Systems</span></div><p>Built as a static, accessible AI Engineering portfolio. © {new Date().getFullYear()} William Yong.</p><div className="footer-links"><a href="/">Markets profile</a><a href="https://github.com/YongWilliam-ai" target="_blank" rel="noreferrer">GitHub</a><a href="mailto:yongwilliam15@gmail.com">Email</a></div></footer>
    </div>
  );
}
