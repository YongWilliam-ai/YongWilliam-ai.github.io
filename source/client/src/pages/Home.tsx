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
  ChevronRight,
  Code2,
  Download,
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

type AssetKey = "hero" | "polyalpha" | "quant" | "fencing" | "mark";

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
  mark: "william-signal-mark_89e972c4.png",
};

const githubAssets: Record<AssetKey, string> = {
  hero: "william-hero-signal-field.webp",
  polyalpha: "polyalpha-vault-visual.webp",
  quant: "quant-research-visual.webp",
  fencing: "fencing-signal-visual.webp",
  mark: "william-signal-mark.webp",
};

const experience = [
  {
    period: "Incoming",
    company: "BIT",
    role: "U.S. Equities Operations Intern",
    status: "Incoming",
    description:
      "Selected to support U.S. equities operations, product-content development, and data-driven process improvement across market research, user education, and cross-functional execution.",
    evidence: "Mandate logged / incoming scope only",
  },
  {
    period: "Jun–Aug 2026",
    company: "KNQ Technology",
    role: "Sport AI Agent Intern",
    status: "Applied AI",
    description:
      "Built evidence-aware Python matching logic, offline review outputs, and regression tests for sports-content systems—focusing on conservative fallbacks when data cannot support a claim.",
    evidence: "63 offline events / 10 regression tests",
  },
  {
    period: "Oct 2025–Present",
    company: "Futu Securities",
    role: "Global Campus Ambassador, HKUST",
    status: "Markets education",
    description:
      "First and only undergraduate Futu Global Campus Ambassador at HKUST, supporting investor education and campus engagement for an SFC-regulated securities firm.",
    evidence: "Campus investor-education route",
  },
  {
    period: "Dec 2025–Jan 2026",
    company: "United Technologies (Int'l) Ltd.",
    role: "AI Business Transformation Engineer Trainee",
    status: "Operations AI",
    description:
      "Deployed AI-enabled workflow automation for 15+ SMEs, reducing manual processing time by 40% while translating operational constraints into implementable process improvements.",
    evidence: "15+ SME implementations / 40% manual-time reduction",
  },
  {
    period: "Jun–Aug 2025",
    company: "EgogoMall",
    role: "Data Analyst Intern",
    status: "Data systems",
    description:
      "Built Python and SQL pipelines across 100k+ transactions; forecasting work reduced inventory turnover time by 15% and automation delivered measurable operational savings.",
    evidence: "100k+ transactions / 15% turnover-time reduction",
  },
];

const skills = [
  {
    icon: BarChart3,
    label: "Quant & Markets",
    items: [
      "Factor research & validation",
      "Walk-forward backtesting",
      "ARIMA / GARCH modelling",
      "Portfolio optimisation",
      "Market & risk analysis",
    ],
  },
  {
    icon: Code2,
    label: "Technical Systems",
    items: [
      "Python · pandas · NumPy",
      "SQL & data pipelines",
      "React & product prototyping",
      "Solidity & smart contracts",
      "AI workflow automation",
    ],
  },
  {
    icon: Target,
    label: "Product & Execution",
    items: [
      "Investor education",
      "AI product quality",
      "Research communication",
      "Customer discovery",
      "Team leadership & fencing",
    ],
  },
];

function getAsset(key: AssetKey) {
  if (typeof window !== "undefined" && window.location.hostname.endsWith("github.io")) {
    return `/assets/${githubAssets[key]}`;
  }
  return `/manus-storage/${assetFiles[key]}`;
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isLight, setIsLight] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typedLine, setTypedLine] = useState("");
  const [formNotice, setFormNotice] = useState("");

  const typeLine = "Research-backed systems for markets, product, and emerging technology.";
  const isGithubPages =
    typeof window !== "undefined" && window.location.hostname.endsWith("github.io");
  const cvHref = isGithubPages
    ? "/assets/William_Yong_CV.pdf"
    : "https://github.com/YongWilliam-ai/YongWilliam-ai.github.io/raw/refs/heads/main/assets/William_Yong_CV.pdf";

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
          <span className="brand-sigil">
            <img className="brand-mark" src={getAsset("mark")} alt="WY signal mark" />
            <i aria-hidden="true" />
          </span>
          <span className="brand-copy">
            <strong>William Yong</strong>
            <small>WY / Signal Path</small>
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
                Hong Kong · Global perspective
              </div>
              <p className="hero-discipline">QUANT RESEARCH · FINTECH · AI PRODUCT · WEB3</p>
              <h1>
                <span>William Yong</span>
                <strong>Turning signals into systems.</strong>
              </h1>
              <p className="typed-line" aria-label={typeLine}>
                {typedLine}
                <span className="typing-cursor" aria-hidden="true" />
              </p>
              <p className="hero-intro">
                HKUST RMBI student and markets-oriented builder with work spanning factor research,
                AI-enabled operations, investor education, and Web3 product systems.
              </p>
              <div className="hero-actions">
                <button className="button button-primary" type="button" onClick={() => scrollTo("projects")}>
                  Trace selected work <ArrowDown size={16} />
                </button>
                <a className="button button-secondary" href={cvHref} download="William_Yong_CV.pdf">
                  <Download size={16} /> Open CV
                </a>
              </div>
              <dl className="hero-credentials">
                <div>
                  <dt>Academic base</dt>
                  <dd>HKUST RMBI + Math Minor</dd>
                </div>
                <div>
                  <dt>Current direction</dt>
                  <dd>Sell-Side Markets 2027</dd>
                </div>
                <div>
                  <dt>Operating mode</dt>
                  <dd>Evidence first</dd>
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
              <p className="overline">A disciplined builder with a market lens</p>
              <h2>Analysis is only useful when it can move through a real system.</h2>
            </div>
            <div className="about-copy" data-reveal>
              <p>
                I am a Hong Kong-based HKUST student studying Risk Management &amp; Business
                Intelligence with a Mathematics minor. My work sits where quantitative research,
                product judgment, and operational reality meet.
              </p>
              <p>
                Across factor-model research, AI workflow automation, investor education, and Web3
                prototypes, I am interested in the same question: <em>what signal is credible enough
                to act on?</em> I am building toward a sell-side Markets pathway while keeping the
                practical builder&apos;s habit of shipping, testing, and documenting assumptions.
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
                  As HKUST Fencing Team President, I bring preparation, pacing, and decision-making
                  under pressure into research and product work.
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
            <h2>From market education to evidence-aware AI systems.</h2>
          </div>
          <div className="experience-list">
            {experience.map((item, index) => (
              <article className="experience-entry" data-reveal key={`${item.company}-${item.role}`}>
                <div className="experience-marker" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="experience-meta">
                  <p>{item.period}</p>
                  <span>{item.status}</span>
                </div>
                <div className="experience-content">
                  <p className="company-name">{item.company}</p>
                  <h3>{item.role}</h3>
                  <p>{item.description}</p>
                  <span className="experience-evidence"><Activity size={12} /> {item.evidence}</span>
                </div>
              </article>
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
            <article className="project-card project-card-featured" data-reveal>
              <div className="project-image-wrap">
                <img src={getAsset("polyalpha")} alt="Abstract market vault visual for PolyAlpha Protocol" />
                <div className="image-scanlines" aria-hidden="true" />
              </div>
              <div className="project-card-content">
                <div className="project-topline">
                  <span>01 / Market microstructure &amp; DeFi</span>
                  <span className="status-badge status-violet">Backtested / Testnet</span>
                </div>
                <h3>PolyAlpha Protocol</h3>
                <p>
                  Designed a DAO-governed, AI-driven prediction-market vault on Polygon. The research
                  prototype combines historical trade analysis, validation assumptions, and a
                  testnet-oriented product architecture—not a live investment product.
                </p>
                <div className="project-metrics" aria-label="Reported backtest metrics">
                  <div><strong>400M+</strong><span>historical trades</span></div>
                  <div><strong>62.9%</strong><span>reported win rate</span></div>
                  <div><strong>2.53</strong><span>reported Sharpe ratio</span></div>
                </div>
                <div className="project-footer">
                  <span>Python · Solidity · Polygon · React</span>
                  <a href="https://github.com/YongWilliam-ai/polyalpha-protocol" target="_blank" rel="noreferrer">
                    View repository <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </article>

            <article className="project-card project-card-quant" data-reveal>
              <div className="project-image-wrap">
                <img src={getAsset("quant")} alt="Abstract factor model research landscape" />
                <div className="image-scanlines" aria-hidden="true" />
              </div>
              <div className="project-card-content">
                <div className="project-topline">
                  <span>02 / Factor research</span>
                  <span className="status-badge status-green">Walk-forward</span>
                </div>
                <h3>RMBI Alpha Challenge</h3>
                <p>
                  Engineered six composite factors and a walk-forward HistGradientBoostingRegressor
                  research model, with an emphasis on interpretability, regime risk, and out-of-sample
                  evaluation rather than headline performance alone.
                </p>
                <div className="compact-metrics">
                  <span><strong>1.20</strong> OOS Sharpe</span>
                  <span><strong>0.66</strong> SPY baseline</span>
                  <span><strong>19 years</strong> OOS data</span>
                </div>
                <div className="project-footer">
                  <span>Python · pandas · scikit-learn</span>
                  <span className="muted-detail">Research build</span>
                </div>
              </div>
            </article>

            <article className="project-card project-card-stubase" data-reveal>
              <div className="project-card-content">
                <div className="project-topline">
                  <span>03 / Anti-fraud infrastructure</span>
                  <span className="status-badge status-outline">MVP</span>
                </div>
                <div className="project-icon"><Blocks size={23} /></div>
                <h3>StuBase</h3>
                <p>
                  A Web3 anti-fraud intelligence prototype for Hong Kong students, joining AI-assisted
                  message screening with on-chain registries, tokenised governance, and transparent
                  evidence handling.
                </p>
                <div className="project-footer">
                  <span>Solidity · Polygon · IPFS · React</span>
                  <div className="project-links">
                    <a href="https://github.com/YongWilliam-ai/stubase2026" target="_blank" rel="noreferrer" aria-label="Open StuBase repository">
                      <Github size={16} />
                    </a>
                    <a href="https://stubase.xyz/" target="_blank" rel="noreferrer" aria-label="Open StuBase website">
                      <Globe2 size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </article>

            <article className="project-card project-card-rxcode" data-reveal>
              <div className="project-card-content">
                <div className="project-topline">
                  <span>04 / AI product &amp; growth</span>
                  <span className="status-badge status-outline">Active</span>
                </div>
                <div className="project-icon"><Trophy size={22} /></div>
                <h3>RxCode</h3>
                <p>
                  Co-founded an AI-assisted development control layer designed to preserve human
                  approval and Git continuity while teams monitor coding-agent work. Leading launch,
                  customer discovery, and commercialisation planning.
                </p>
                <div className="project-footer">
                  <span>HKUST Dream Builder Cohort #2</span>
                  <span className="muted-detail">HK$10,000 approved support</span>
                </div>
              </div>
            </article>
          </div>
          <p className="project-disclosure" data-reveal>
            <FileText size={15} /> Metrics are framed as research or database-reported results where
            applicable; they are not claims of live trading or production investment performance.
          </p>
        </section>

        <section id="skills" className="section skills-section section-anchor" data-section>
          <div className="section-label" data-reveal>
            <span>04</span>
            <p>Capabilities / working toolkit</p>
            <em>NODE 04 / T+03</em>
          </div>
          <div className="skills-layout">
            <div className="section-heading" data-reveal>
              <p className="overline">One builder, three connected toolkits</p>
              <h2>Technical depth is more useful when it connects to a desk, a user, or a decision.</h2>
              <div className="skills-ledger">
                <span>METHOD</span><strong>Research → Build → Review</strong>
                <span>OUTPUT</span><strong>Decision-ready systems</strong>
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
              <p className="overline">Open to substantive conversations</p>
              <h2>If the work is useful, let&apos;s get specific.</h2>
              <p>
                I welcome conversations on Markets internships, quantitative research, product systems,
                AI-enabled operations, and early-stage collaboration.
              </p>
              <div className="contact-direct-links">
                <a href="mailto:yongwilliam15@gmail.com"><Mail size={17} /> yongwilliam15@gmail.com</a>
                <a href="https://www.linkedin.com/in/william-yong-profile" target="_blank" rel="noreferrer"><Linkedin size={17} /> linkedin.com/in/william-yong-profile</a>
                <a href="https://github.com/YongWilliam-ai" target="_blank" rel="noreferrer"><Github size={17} /> github.com/YongWilliam-ai</a>
              </div>
              <p className="location-line"><MapPin size={15} /> Hong Kong · HKUST · available for thoughtful collaboration</p>
              <div className="contact-ledger">
                <span>BEST ROUTE</span><strong>Specific opportunity or a problem worth solving</strong>
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
                This form uses a no-backend delivery service. For the first use, the recipient may need
                to confirm the delivery address.
              </p>
              {formNotice && <p className="form-notice" role="status">{formNotice}</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <img src={getAsset("mark")} alt="" />
          <span>William Yong / Signal Path</span>
        </div>
        <p>Built as a static, accessible portfolio. © {new Date().getFullYear()} Yong William.</p>
        <div className="footer-links">
          <a href="https://github.com/YongWilliam-ai" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/william-yong-profile" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:yongwilliam15@gmail.com">Email</a>
        </div>
      </footer>
    </div>
  );
}
