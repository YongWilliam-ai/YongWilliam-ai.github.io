/**
 * Signal Path Terminal — dark financial editorial portfolio.
 * Style contract: asymmetrical information architecture, signal-violet accents,
 * evidence-aware content, restrained motion, no generic centered SaaS patterns.
 */
import { FormEvent, useEffect, useState } from "react";
import {
  Activity,
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Blocks,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  Code2,
  ExternalLink,
  FileText,
  Github,
  Globe2,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Send,
  Sun,
  Target,
  Trophy,
  X,
} from "lucide-react";
import WXYMark from "../components/WXYMark";

type AssetKey = "hero" | "polyalpha" | "quant" | "fencing";

const navItems = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

const assetFiles: Record<AssetKey, string> = {
  hero: "william-hero-signal-field_756afc4e.png",
  polyalpha: "polyalpha-vault-visual_fc3dcaee.png",
  quant: "quant-research-visual_b4b35ff3.png",
  fencing: "fencing-signal-visual_036ce8d4.png",
};

const githubAssets: Record<AssetKey, string> = {
  hero: "william-hero-signal-field.png",
  polyalpha: "polyalpha-vault-visual.png",
  quant: "quant-research-visual.png",
  fencing: "fencing-signal-visual.png",
};

const experience = [
  {
    period: "Aug–Sep 2026",
    company: "BIT",
    role: "U.S. Equities Operations Intern",
    status: "U.S. equities operations",
    description:
      "Produced daily structured briefs across 3 market layers—U.S. equities, sectors and single stocks—integrating 4 signal families: macroeconomic indicators, Treasury yields, earnings releases and cross-asset signals. Tracked sector rotation, earnings catalysts and relative performance to translate recurring themes into investor-education materials, and consolidated market information, user feedback and product requirements into U.S. equities product-operations inputs. Scope was market information, investor education and product operations—not trade execution, investment advice or research-recommendation authority.",
    evidence: "Daily briefs · 3 market layers · 4 signal families",
  },
  {
    period: "Jun–Aug 2026",
    company: "KNQ Technology",
    role: "Sport AI Agent Intern",
    status: "Applied AI systems",
    description:
      "Engineered modular Python evidence pipelines for a sports-commentary quality workflow, aligning ball-trajectory data with official match-event logs; classified 63 events into 40 high-confidence commentary triggers and 23 rule-based safe fallbacks, with 10/10 unit and regression tests passed.",
    evidence: "63 events · 40 triggers · 23 fallbacks · 10/10 tests",
  },
  {
    period: "Mar 2026–Present",
    company: "Futu Securities",
    role: "Global Campus Ambassador, HKUST",
    status: "Markets education",
    description:
      "Appointed as the first undergraduate Futu Global Campus Ambassador at HKUST, supporting campus community engagement, investor-education sessions, and responsible financial-literacy activities for an SFC-regulated digital brokerage platform.",
    evidence: "Investor education · regulated-finance context",
  },
  {
    period: "Dec 2025–Jan 2026",
    company: "United Technologies (Int'l) Ltd.",
    role: "AI Business Digital Transformation Engineer Trainee",
    status: "AI-enabled operations",
    description:
      "Supported AI-enabled accounting-workflow adoption for 15+ SMEs, resolved 50+ operational or integration issues, and built Excel VBA CRM automations for 20+ accounts; team delivery reported 40% less manual work, 30% lower downtime, 95% client satisfaction, 10+ hours saved weekly and approximately 25% operational savings.",
    evidence: "15+ SME workflows · 50+ issues · 20+ accounts",
  },
  {
    period: "Jun–Aug 2025",
    company: "EgogoMall",
    role: "Data Analyst Intern",
    status: "Data systems",
    description:
      "Built Python (pandas/NumPy) and SQL pipelines across 100,000+ transaction records; developed forecasts, dashboards, and CRM/customer-service automations to support management reporting and inventory decisions.",
    evidence: "100k+ records · 15% faster turnover · ~25% savings",
  },
  {
    period: "Jun–Aug 2024",
    company: "CTM — Companhia de Telecomunicações de Macau",
    role: "Summer Intern — 4-Department Rotation Programme",
    status: "Cross-functional operations",
    description:
      "Completed a structured rotation across Big Data Analytics, Fibre Network Operations, Social Media & Live Stream, and CRM Customer Service, supporting operational reporting, internal documentation, system updates, and customer communication.",
    evidence: "Data, network, media & CRM operations exposure",
  },
];

const skills = [
  {
    icon: BarChart3,
    label: "Quant & Markets",
    items: [
      "Factor research & validation",
      "Walk-forward backtesting",
      "Portfolio construction",
      "Market & risk analysis",
      "Sharpe, drawdown & scenario thinking",
    ],
  },
  {
    icon: Code2,
    label: "Data & Technical Systems",
    items: [
      "Python · pandas · NumPy",
      "SQL & data pipelines",
      "Excel/VBA automation",
      "Unit & regression testing",
      "React · Solidity · Git/GitHub",
    ],
  },
  {
    icon: Target,
    label: "Product & Execution",
    items: [
      "Investor education",
      "AI quality & localisation",
      "Research communication",
      "Customer discovery",
      "Team leadership",
    ],
  },
];

function getAsset(key: AssetKey) {
  if (typeof window !== "undefined" && window.location.hostname.endsWith("github.io")) {
    return `/assets/${githubAssets[key]}`;
  }
  return `/manus-storage/${assetFiles[key]}`;
}

function AlphaChallengeCard() {
  return (
    <article className="project-card project-card-quant" data-reveal>
      <div className="project-image-wrap"><img src={getAsset("quant")} alt="Abstract factor model research landscape" /><div className="image-scanlines" aria-hidden="true" /></div>
      <div className="project-card-content"><div className="project-topline"><span>01 / Factor research</span><span className="status-badge status-green">WALK-FORWARD · ACADEMIC RESEARCH</span></div><h3>RMBI 3110 Alpha Challenge</h3><p>Built a walk-forward long-only equity research model in Python using six composite factors and a Histogram Gradient Boosting Regressor. The project prioritised periodic retraining, a SPY regime filter, out-of-sample validation and clear documentation of limits.</p><div className="compact-metrics"><span><strong>1.33</strong> OOS Sharpe</span><span><strong>0.66</strong> SPY baseline</span><span><strong>19 years</strong> OOS data</span><span><strong>22.7%</strong> annualized return</span><span><strong>-23.1%</strong> maximum drawdown</span></div><p className="project-boundary">Academic out-of-sample research/backtest; not live investment performance, investment advice, or a managed strategy.</p><div className="project-footer"><span>Python · pandas · NumPy · scikit-learn · Jupyter</span><div className="project-actions"><a href="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030260308/neehOIWFcJZJXzDM.html" target="_blank" rel="noreferrer"><Globe2 size={15} /> Research evidence</a><a href="/case/rmbi-alpha/"><ArrowUpRight size={15} /> Case study</a></div></div></div>
    </article>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isLight, setIsLight] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typedLine, setTypedLine] = useState("");
  const [formNotice, setFormNotice] = useState("");

  const typeLine = "Quantitative validation, AI/data systems, and market context in reviewable work.";

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
    }, 22);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-section]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
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
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    reveals.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuOpen(false);
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (!form.checkValidity()) return;
    setFormNotice("Opening the secure delivery page in a new tab…");
  };

  return (
    <div className="app-shell">
      <div className="ambient-orb ambient-orb-one" aria-hidden="true" />
      <div className="ambient-orb ambient-orb-two" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#home" onClick={() => scrollTo("home")}>
          <span className="brand-sigil"><WXYMark variant="markets" /></span>
          <span className="brand-copy">
            <strong>William Yong</strong>
            <small>WXY / Markets Research</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "is-active" : ""}
              onClick={(event) => {
                event.preventDefault();
                scrollTo(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <nav className="profile-switch" aria-label="Portfolio profile">
          <a className="is-active" href="/" aria-current="page">Markets</a>
          <a href="/ai/">AI Ops</a>
        </nav>

        <div className="header-actions">
          <button
            className="icon-button theme-button"
            type="button"
            aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
            title={isLight ? "Switch to night mode" : "Switch to daylight mode"}
            onClick={() => setIsLight((current) => !current)}
          >
            {isLight ? <Moon size={17} /> : <Sun size={17} />}
          </button>
          <button
            className="icon-button mobile-menu-button"
            type="button"
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
          <button className="header-contact" type="button" onClick={() => scrollTo("contact")}>
            Open channel <ArrowUpRight size={16} />
          </button>
        </div>

        <nav className={`mobile-nav ${isMenuOpen ? "is-open" : ""}`} aria-label="Mobile navigation">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              style={{ transitionDelay: `${index * 35}ms` }}
            >
              <span>0{index + 1}</span>
              {item.label}
              <ChevronRight size={17} />
            </button>
          ))}
        </nav>
      </header>

      <main>
        <div className="signal-rail" aria-hidden="true">
          <span />
        </div>

        <section id="home" className="hero section-anchor" data-section>
          <div className="hero-layout">
            <div className="hero-copy" data-reveal>
              <div className="eyebrow">
                <span className="pulse-dot" />
                Hong Kong · Markets, research &amp; product systems
              </div>
              <p className="hero-discipline">MARKETS RESEARCH · QUANTITATIVE VALIDATION · AI-ENABLED OPERATIONS</p>
              <p className="profile-lens">PROFILE 01 / MARKETS · QUANT RESEARCH · AI PRODUCT SYSTEMS</p>
              <h1>
                <span>William Yong</span>
                <strong>Market signals, tested systems, clearer decisions.</strong>
              </h1>
              <p className="typed-line" aria-label={typeLine}>
                {typedLine}
                <span className="typing-cursor" aria-hidden="true" />
              </p>
              <p className="hero-intro">
                HKUST RMBI student with recent U.S. equities operations experience, working across quantitative research, AI/data
                systems, and investor-facing product communication.
              </p>
              <div className="hero-actions">
                <button className="button button-primary" type="button" onClick={() => scrollTo("projects")}>
                  Trace selected work <ArrowDown size={16} />
                </button>
                <a className="button button-secondary" href="https://www.linkedin.com/in/william-yong-profile" target="_blank" rel="noreferrer">
                  View LinkedIn <ArrowUpRight size={16} />
                </a>
              </div>
              <dl className="hero-credentials">
                <div>
                  <dt>Academic base</dt>
                  <dd>HKUST BSc in RMBI · Mathematics Minor</dd>
                </div>
                <div>
                  <dt>Availability</dt>
                  <dd>Open to Markets, Quant Research &amp; AI Product opportunities</dd>
                </div>
                <div>
                  <dt>Recent role</dt>
                  <dd>U.S. Equities Operations Intern, BIT</dd>
                </div>
                <div>
                  <dt>Method</dt>
                  <dd>Research → Build → Review</dd>
                </div>
              </dl>
            </div>

            <figure className="hero-instrument" data-reveal>
              <img src={getAsset("hero")} alt="Abstract violet data terrain" />
              <div className="instrument-overlay" aria-hidden="true" />
              <div className="instrument-axis axis-x" aria-hidden="true" />
              <div className="instrument-axis axis-y" aria-hidden="true" />
              <div className="instrument-readout readout-top">
                <span>PROFILE SIGNAL</span>
                <strong>01 / 04</strong>
              </div>
              <div className="instrument-readout readout-bottom">
                <span>FOCUS</span>
                <strong>Research → product → market</strong>
              </div>
              <figcaption>
                <Activity size={14} /> A portfolio built around research, systems, and execution.
              </figcaption>
            </figure>
          </div>
          <div className="hero-scroll-cue" aria-hidden="true">
            <span>SCROLL TO TRACE THE PATH</span>
            <i />
          </div>
        </section>

        <section id="about" className="section about-section section-anchor" data-section>
          <div className="section-label" data-reveal>
            <span>01</span>
            <p>About / operating thesis</p>
            <em>NODE 01 / T+00</em>
          </div>
          <div className="about-layout">
            <div className="section-heading" data-reveal>
              <p className="overline">Market context, research discipline, systems thinking</p>
              <h2>Analysis matters when it can be reviewed, communicated and used.</h2>
            </div>
            <div className="about-copy" data-reveal>
              <p>
                I am a Hong Kong–based HKUST student studying Risk Management &amp; Business Intelligence,
                with a Mathematics minor. My work sits where market context, quantitative validation,
                and AI-enabled systems meet.
              </p>
              <p>
                During a U.S. Equities Operations internship at BIT from August to September 2026, I produced daily briefs across
                U.S. equity, sector and single-stock developments, integrating macro indicators, Treasury
                yields, earnings releases and cross-asset signals. I translated recurring market themes,
                market information, user feedback and product requirements into investor-education and
                U.S. equities product-operations inputs.
              </p>
              <p>
                Across quantitative research, AI workflow development and product execution, I focus on
                the same discipline: make the source, assumptions, controls and limitations clear enough
                for another person to review the work.
              </p>
              <p>
                That principle informs research backtests, evidence-matching pipelines and testnet product
                prototypes alike. The work is positioned as research, systems and product operations—not
                trading, investment advice or live investment management.
              </p>
              <div className="about-links">
                <a href="https://www.linkedin.com/in/william-yong-profile" target="_blank" rel="noreferrer">
                  LinkedIn <ArrowUpRight size={15} />
                </a>
                <a href="https://github.com/YongWilliam-ai" target="_blank" rel="noreferrer">
                  GitHub <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
            <aside className="fencing-note" data-reveal>
              <img src={getAsset("fencing")} alt="Abstract violet trajectory inspired by fencing" />
              <div>
                <span className="note-index">PERFORMANCE PRINCIPLE</span>
                <h3>10+ years of competitive épée.</h3>
                <p>
                  As President of the HKUST Fencing Team, I bring preparation, feedback loops and
                  decision-making under pressure to research and product work.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section id="experience" className="section experience-section section-anchor" data-section>
          <div className="section-label" data-reveal>
            <span>02</span>
            <p>Experience / applied systems</p>
            <em>NODE 02 / T+01</em>
          </div>
          <div className="section-heading experience-heading" data-reveal>
            <p className="overline">A growing operator&apos;s record</p>
            <h2>Market context, data systems, and disciplined execution.</h2>
          </div>
          <div className="experience-list">
            {experience.map((item, index) => (
              <details className="experience-entry experience-disclosure" data-reveal key={`${item.company}-${item.role}`}>
                <summary>
                  <span className="experience-marker" aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span></span>
                  <span className="experience-meta"><p>{item.period}</p><span>{item.status}</span></span>
                  <span className="experience-summary"><span className="company-name">{item.company}</span><strong>{item.role}</strong><em>{item.evidence}</em><span className="experience-open-label">Open full scope</span></span>
                  <ChevronDown className="experience-chevron" size={17} aria-hidden="true" />
                </summary>
                <div className="experience-detail"><p>{item.description}</p><span className="experience-evidence"><Activity size={12} /> Evidence record: {item.evidence}</span></div>
              </details>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects-section section-anchor" data-section>
          <div className="section-label" data-reveal>
            <span>03</span>
            <p>Selected work / evidence trail</p>
            <em>NODE 03 / T+02</em>
          </div>
          <div className="projects-heading-row" data-reveal>
            <div className="section-heading">
              <p className="overline">Projects with stated boundaries</p>
              <h2>Research and product systems—built, tested, and labelled honestly.</h2>
            </div>
            <a className="text-link" href="https://github.com/YongWilliam-ai" target="_blank" rel="noreferrer">
              Inspect GitHub <Github size={16} />
            </a>
          </div>

          <div className="projects-grid">
            <AlphaChallengeCard />
            <article className="project-card project-card-featured" data-reveal>
              <div className="project-image-wrap">
                <img src={getAsset("polyalpha")} alt="Abstract market vault visual for PolyAlpha Protocol" />
                <div className="image-scanlines" aria-hidden="true" />
              </div>
              <div className="project-card-content">
                <div className="project-topline">
                  <span>02 / Prediction-market research &amp; DeFi systems</span>
                  <span className="status-badge status-violet">BACKTESTED / TESTNET</span>
                </div>
                <h3>PolyAlpha Protocol</h3>
                <p>
                  Built a testnet and backtested DeFi research prototype combining an ERC-4626 vault,
                  Solidity smart contracts, a React dashboard, AI-agent orchestration and on-chain
                  oracle-input logging. It explores prediction-market pricing bias through a transparent
                  research and product-design lens.
                </p>
                <div className="project-metrics" aria-label="Reported backtest metrics">
                  <div><strong>400M+</strong><span>historical observations</span></div>
                  <div><strong>62.9%</strong><span>reported win rate</span></div>
                  <div><strong>2.53</strong><span>reported Sharpe ratio</span></div>
                </div>
                <p className="project-boundary">Historical/backtested research and testnet prototype only; not a live fund, managed-investment product, live market maker, or realised P&amp;L claim.</p>
                <div className="project-footer">
                  <span>Python · Solidity · Polygon · React</span>
                  <div className="project-actions">
                    <a href="https://polyalpha-dashboard.vercel.app/" target="_blank" rel="noreferrer"><Globe2 size={15} /> Testnet</a>
                    <a href="https://github.com/YongWilliam-ai/polyalpha-protocol" target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a>
                    <a href="/decks/polyalpha-protocol-pitch.pdf" target="_blank" rel="noreferrer"><FileText size={15} /> Deck</a>
                    <a href="/case/polyalpha/"><ArrowUpRight size={15} /> Case study</a>
                  </div>
                </div>
              </div>
            </article>

            <article className="project-card project-card-stubase" data-reveal>
              <div className="project-card-content">
                <div className="project-topline">
                  <span>04 / Anti-fraud infrastructure</span>
                  <span className="status-badge status-outline">MVP / RESEARCH PROTOTYPE</span>
                </div>
                <div className="project-icon"><Blocks size={23} /></div>
                <h3>StuBase</h3>
                <p>
                  Founded a Web3 anti-fraud and compliance prototype for Hong Kong students, joining
                  AI-assisted message screening with identity integrity, KYC/AML-oriented logic, Polygon L2,
                  Solidity, IPFS, zero-knowledge identity concepts and DAO governance.
                </p>
                <div className="project-footer">
                  <span>Solidity · Polygon · IPFS · React</span>
                  <div className="project-actions">
                    <a href="https://stubase.xyz/" target="_blank" rel="noreferrer"><Globe2 size={15} /> Product</a>
                    <a href="https://github.com/YongWilliam-ai/stubase2026" target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a>
                    <a href="/case/stubase/"><ArrowUpRight size={15} /> Case study</a>
                  </div>
                </div>
              </div>
            </article>

            <article className="project-card project-card-rxcode" data-reveal>
              <div className="project-card-content">
                <div className="project-topline">
                  <span>03 / AI product &amp; growth</span>
                  <span className="status-badge status-outline">ACTIVE · HKUST DREAM BUILDER 2025/26</span>
                </div>
                <div className="project-icon"><Trophy size={22} /></div>
                <h3>RxCode</h3>
                <p>
                  Co-founded an AI-assisted development control layer that lets teams run, review and
                  monitor coding-agent tasks while preserving human approval, Git continuity and mobile
                  visibility. William leads HKUST go-to-market, customer discovery, product positioning and
                  commercialisation planning.
                </p>
                <div className="compact-metrics"><span><strong>Dream Builder</strong> Cohort #2</span><span><strong>HK$10,000</strong> approved startup support</span><span><strong>12 months</strong> validation roadmap</span></div>
                <p className="project-boundary">Role scope is AI product and growth—not lead engineering or system-architecture ownership.</p>
                <div className="project-footer">
                  <span>HKUST Dream Builder Cohort #2</span>
                  <div className="project-actions">
                    <a href="https://code.rxlab.app/" target="_blank" rel="noreferrer"><Globe2 size={15} /> Product</a>
                    <a href="https://github.com/rxtech-lab/rxcode" target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a>
                    <a href="/decks/rxcode-dream-builder-pitch.pdf" target="_blank" rel="noreferrer"><FileText size={15} /> Deck</a>
                    <a href="/case/rxcode/"><ArrowUpRight size={15} /> Case study</a>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <p className="project-disclosure" data-reveal>
            <FileText size={15} /> Metrics are framed as research or database-reported results where
            applicable; they are not claims of live trading or production investment performance.
          </p>
        </section>

        <section className="section context-section" aria-labelledby="markets-context-title">
          <div className="section-label" data-reveal><span>04</span><p>Operating context / credibility ledger</p><em>NODE 04 / T+03</em></div>
          <div className="context-layout">
            <div className="section-heading" data-reveal>
              <p className="overline">Market judgement also needs operating range</p>
              <h2 id="markets-context-title">The context behind the research profile.</h2>
              <p className="context-intro">This route prioritises markets, but it should also show the leadership, education, and execution discipline that make the work credible in a live operating environment.</p>
              <a className="share-link" href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fyongwilliam-ai.github.io%2F" target="_blank" rel="noreferrer">Share Markets profile on LinkedIn <Linkedin size={15} /></a>
            </div>
            <div className="context-ledger" data-reveal>
              <article className="context-row"><span>LEADERSHIP</span><h3>President, HKUST Fencing Team</h3><p>2025–Present · Leads 30+ members; has managed a HKD 50,000 budget and 5+ events for 300+ participants. The work links preparation, feedback and decision-making under pressure.</p></article>
              <article className="context-row"><span>COMMUNITY OPERATIONS</span><h3>External Vice President, Federation of Macau Students in Hong Kong</h3><p>Nov 2024–Nov 2025 · Managed a HK$50,000+ budget, organised five events for 300+ participants, and established 10+ partnerships across businesses and universities.</p></article>
              <article className="context-row"><span>ACADEMIC BASE</span><h3>HKUST BSc in Risk Management &amp; Business Intelligence · Mathematics Minor</h3><p>Expected Jun 2028 · Dean&apos;s List, Fall 2024 · Beyond Academic Admissions Scholarship · HKGCC Scholarship for Innovation &amp; Creativity.</p></article>
              <article className="context-row"><span>EARLY DISTINCTION</span><h3>Quantitative and engineering foundations</h3><p>BPhO Gold Award · iGEM 2023 Global Gold · Bloomberg Global Trading Challenge (2025) · selected international innovation awards.</p></article>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section section-anchor" data-section>
          <div className="section-label" data-reveal>
            <span>04</span>
            <p>Capabilities / working toolkit</p>
            <em>NODE 04 / T+03</em>
          </div>
          <div className="skills-layout">
            <div className="section-heading" data-reveal>
              <p className="overline">One profile, three connected toolkits</p>
              <h2>Technical depth matters when it connects to a market, a user, or a decision.</h2>
              <div className="skills-ledger">
                <span>METHOD</span><strong>Research → Build → Review</strong>
                <span>OUTPUT</span><strong>Decision-ready analysis and auditable systems</strong>
              </div>
            </div>
            <div className="skill-groups">
              {skills.map((group) => {
                const Icon = group.icon;
                return (
                  <article className="skill-group" data-reveal key={group.label}>
                    <div className="skill-group-heading"><Icon size={19} /><h3>{group.label}</h3></div>
                    <ul>
                      {group.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section section-anchor" data-section>
          <div className="section-label" data-reveal>
            <span>05</span>
            <p>Contact / open channel</p>
            <em>NODE 05 / T+04</em>
          </div>
          <div className="contact-layout">
            <div className="contact-copy" data-reveal>
              <p className="overline">Open to relevant work and thoughtful collaboration</p>
              <h2>Let&apos;s make the next decision clearer.</h2>
              <p>
                I am currently open to Markets, Quantitative Research, Market Risk, electronic-trading-adjacent
                analytics, AI-enabled operations and early-stage product opportunities.
              </p>
              <div className="contact-direct-links">
                <a href="mailto:yongwilliam15@gmail.com"><Mail size={17} /> yongwilliam15@gmail.com</a>
                <a href="https://www.linkedin.com/in/william-yong-profile" target="_blank" rel="noreferrer"><Linkedin size={17} /> linkedin.com/in/william-yong-profile</a>
                <a href="https://github.com/YongWilliam-ai" target="_blank" rel="noreferrer"><Github size={17} /> github.com/YongWilliam-ai</a>
              </div>
              <p className="location-line"><MapPin size={15} /> Hong Kong · HKUST · Expected graduation June 2028</p>
              <div className="contact-ledger">
                <span>BEST ROUTE</span><strong>Specific opportunity, problem, or collaboration idea</strong>
              </div>
            </div>
            <form
              className="contact-form"
              action="https://formsubmit.co/yongwilliam15@gmail.com"
              method="POST"
              target="contact_delivery"
              onSubmit={handleFormSubmit}
              data-reveal
            >
              <input type="hidden" name="_subject" value="Portfolio enquiry for William Yong" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://YongWilliam-ai.github.io/#contact" />
              <label>
                Your name
                <input name="name" type="text" autoComplete="name" required placeholder="Name or organisation" />
              </label>
              <label>
                Email address
                <input name="email" type="email" autoComplete="email" required placeholder="you@company.com" />
              </label>
              <label>
                What would you like to discuss?
                <textarea name="message" rows={5} required placeholder="A concise note is enough." />
              </label>
              <button className="button button-primary form-submit" type="submit">
                Send a considered note <Send size={16} />
              </button>
              <p className="form-note">
                Please share the opportunity, problem or collaboration idea. I will respond where there is a clear fit.
              </p>
              {formNotice && <p className="form-notice" role="status">{formNotice}</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand"><WXYMark variant="markets" decorative /><span>William Yong / Markets Research</span></div>
        <div className="footer-links">
          <a href="https://github.com/YongWilliam-ai" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/william-yong-profile" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:yongwilliam15@gmail.com">Email</a>
        </div>
      </footer>
    </div>
  );
}
