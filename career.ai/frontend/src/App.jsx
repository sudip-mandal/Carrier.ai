import { useMemo, useRef, useState } from "react";
import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";

const STAGE_OPTIONS = [
  { value: "10th", label: "10th Pass / Secondary" },
  { value: "12th", label: "12th Pass / Senior Secondary" },
  { value: "college", label: "College Students" },
];

const INTEREST_PRESETS = ["Technology", "Finance", "Healthcare", "Design", "Civil Services"];
const LOCATION_PRESETS = ["Delhi", "Mumbai", "Bengaluru", "Hyderabad", "Chennai"];
const ROLE_PRESETS = ["Software Engineer", "Data Scientist", "Product Manager", "Doctor", "Policy Analyst"];

const VALUE_PILLARS = [
  {
    title: "Guided Discovery",
    description: "Stage-aware questions help you clarify strengths and curiosity before picking a stream.",
  },
  {
    title: "Evidence-Based Paths",
    description: "Every roadmap blends skill stacks, college filters, salaries, and growth momentum.",
  },
  {
    title: "Action Acceleration",
    description: "Weekly sprints, project ideas, and interview prep nudge you towards consistent execution.",
  },
];

const STATS = [
  { label: "Personalized roadmaps", value: "1,500+" },
  { label: "Partner mentors", value: "120" },
  { label: "Career paths covered", value: "40+" },
];

const FAQS = [
  {
    q: "Is this the final roadmap?",
    a: "Treat it as a mentor blueprint; you can iterate with live mentors or your school counselor.",
  },
  {
    q: "Does it replace coaching?",
    a: "No. It complements exam prep by connecting your interests, colleges, and future roles.",
  },
  {
    q: "Can parents use it?",
    a: "Absolutely. Parents can co-plan finances, scholarships, and college priorities.",
  },
];

const CALENDAR_FOCUS = {
  skills: {
    label: "Skill sprints",
    milestones: ["Foundations audit", "Project build", "Peer feedback", "Portfolio polish"],
    rituals: ["Daily 90-min deep work", "Weekly demo day", "Mentor sync", "Reflection journal"],
  },
  exams: {
    label: "Entrance prep",
    milestones: ["Syllabus mapping", "Mock tests", "Revision loops", "Interview readiness"],
    rituals: ["Question banks", "Timed tests", "Error log", "Wellness breaks"],
  },
  research: {
    label: "Research & internships",
    milestones: ["Literature review", "Experiments", "Paper writing", "Conference prep"],
    rituals: ["Lab hours", "Advisor sync", "Reading club", "Networking outreach"],
  },
};

const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:4000";

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const links = [
    { label: "Overview", path: "/" },
    { label: "Roadmap planner", path: "/roadmap" },
    { label: "Calendar studio", path: "/calendar" },
  ];

  return (
    <nav className="nav">
      <div className="nav__brand">
            <span className="brand-mark">CareerMentor AI</span>
            <span className="beta-pill">beta</span>
      </div>
      <div className="nav__links">
        {links.map((link) => (
          <Link key={link.path} className={location.pathname === link.path ? "active" : ""} to={link.path}>
            {link.label}
          </Link>
        ))}
      </div>
      <div className="nav__ctas">
        <button type="button" className="ghost-btn" onClick={() => navigate("/calendar")}>
          Build calendar
        </button>
        <button type="button" className="primary-btn primary-btn--small" onClick={() => navigate("/roadmap")}>
          Generate roadmap
        </button>
      </div>
    </nav>
  );
}

function ChipSelector({ label, options, values, onToggle }) {
  return (
    <div className="chip-group">
      <span className="chip-label">{label}</span>
      <div className="chip-options">
        {options.map((option) => {
          const isSelected = values.includes(option);
          return (
            <button
              key={option}
              type="button"
              className={`chip ${isSelected ? "chip--selected" : ""}`}
              onClick={() => onToggle(option)}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function StreamCard({ stream }) {
  return (
    <article className="stream-card">
      <header>
        <h3>{stream.name}</h3>
        <p>{stream.avgPackage}</p>
      </header>
      <section>
        <h4>Opportunities</h4>
        <ul>
          {stream.opportunities.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>
      </section>
      <section>
        <h4>Roadmap</h4>
        <ol>
          {stream.roadmap.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>
      <section>
        <h4>Skills to build</h4>
        <div className="tag-row">
          {stream.skills.map((skill) => (
            <span key={skill} className="tag">
              {skill}
            </span>
          ))}
        </div>
      </section>
      {stream.recommendedColleges.length > 0 && (
        <section>
          <h4>Matching colleges</h4>
          <div className="tag-row">
            {stream.recommendedColleges.map((college) => (
              <span key={college} className="tag tag--ghost">
                {college}
              </span>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

function InsightPanel({ roadmap, insights, nextSteps }) {
  const timeline = useMemo(
    () =>
      roadmap.actionPlan.map((action, index) => ({
        label: `Step ${index + 1}`,
        description: action,
      })),
    [roadmap.actionPlan],
  );

  return (
    <div className="insight-grid">
      <div className="panel">
        <h3>AI Mentor Insights</h3>
        <ul>
          {insights.map((insight) => (
            <li key={insight}>{insight}</li>
          ))}
        </ul>
      </div>
      <div className="panel">
        <h3>Execution Timeline</h3>
        <ul className="timeline">
          {timeline.map((item) => (
            <li key={item.label}>
              <strong>{item.label}</strong>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="panel">
        <h3>Essential Skills</h3>
        <div className="tag-row">
          {roadmap.essentialSkills.map((skill) => (
            <span key={skill} className="tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="panel">
        <h3>Next Best Steps</h3>
        <ol>
          {nextSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function ValueGrid() {
  return (
    <section className="value-grid">
      {VALUE_PILLARS.map((pillar) => (
        <article key={pillar.title}>
          <h3>{pillar.title}</h3>
          <p>{pillar.description}</p>
        </article>
      ))}
    </section>
  );
}

function StatsBar() {
  return (
    <div className="stat-bar">
      {STATS.map((stat) => (
        <div key={stat.label}>
          <p className="stat-value">{stat.value}</p>
          <p className="stat-label">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

function FAQSection() {
  return (
    <section className="faq">
      <h2>Questions students often ask</h2>
      <div className="faq-grid">
        {FAQS.map((item) => (
          <article key={item.q}>
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="route landing">
      <header className="hero">
        <div className="hero__text">
          <p className="eyebrow">AI Mentor for Students</p>
          <h1>Plan your career roadmap with confidence</h1>
          <p className="subhead">
            Stream selection, college shortlist, salary visibility, and skill sprints—tailored for 10th, 12th, and college
            learners.
          </p>
          <div className="hero__actions">
            <button className="primary-btn" onClick={() => navigate("/roadmap")}>
              Generate my roadmap
            </button>
            <button className="ghost-btn" onClick={() => navigate("/calendar")}>
              Build calendar
            </button>
          </div>
        </div>
        <div className="hero-card">
          <p className="hero-stat">“I finally knew which branch fits my love for AI + biology.”</p>
          <div className="hero-card__meta">
            <span>Riya, 12th (PCB)</span>
            <span>Admits: IISER, VIT BioTech</span>
          </div>
          <hr />
          <StatsBar />
        </div>
      </header>
      <ValueGrid />
      <section className="cta-panels">
        <article>
          <h3>Roadmap Planner</h3>
          <p>Craft your stage-specific pathway with curated streams, salaries, and colleges.</p>
          <button className="link-btn" onClick={() => navigate("/roadmap")}>
            Open planner →
          </button>
        </article>
        <article>
          <h3>Calendar Studio</h3>
          <p>Drop exam dates and focus areas to get a personalised execution calendar.</p>
          <button className="link-btn" onClick={() => navigate("/calendar")}>
            Build calendar →
          </button>
        </article>
      </section>
      <FAQSection />
    </div>
  );
}

function RoadmapPage() {
  const [stage, setStage] = useState("12th");
  const [interests, setInterests] = useState(["Technology"]);
  const [preferredLocations, setPreferredLocations] = useState([]);
  const [preferredRoles, setPreferredRoles] = useState([]);
  const [doubts, setDoubts] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [response, setResponse] = useState(null);
  const formRef = useRef(null);

  const toggleValue = (values, setter) => (value) => {
    setter(values.includes(value) ? values.filter((item) => item !== value) : [...values, value]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_BASE}/api/guidance`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ stage, interests, preferredLocations, preferredRoles, doubts }),
      });

      if (!res.ok) {
        const detail = await res.json().catch(() => ({}));
        throw new Error(detail.error ?? "Unable to fetch roadmap right now.");
      }

      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="route roadmap-page">
      <header className="route-header">
        <p className="eyebrow">Roadmap planner</p>
        <h1>Generate an AI mentor playbook</h1>
        <p>Tell us your stage, interests, locations, and doubts. We combine templates + data to return actionable plans.</p>
        <div className="route-header__actions">
          <button className="ghost-btn" onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth" })}>
            Jump to form
          </button>
          <button className="primary-btn" onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth" })}>
            Start now
          </button>
        </div>
      </header>

      <section className="planner-grid">
        <form ref={formRef} className="mentor-form" onSubmit={handleSubmit}>
          <div className="form-head">
            <p className="eyebrow">Mentor intake</p>
            <h2>Tell us about you</h2>
            <p>Pick your current stage, interests, and doubts so the AI mentor can personalize action steps.</p>
          </div>

          <div className="input-row">
            <label htmlFor="stage">Where are you right now?</label>
            <select id="stage" value={stage} onChange={(event) => setStage(event.target.value)}>
              {STAGE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <ChipSelector label="Interests" options={INTEREST_PRESETS} values={interests} onToggle={toggleValue(interests, setInterests)} />
          <ChipSelector
            label="Preferred locations"
            options={LOCATION_PRESETS}
            values={preferredLocations}
            onToggle={toggleValue(preferredLocations, setPreferredLocations)}
          />
          <ChipSelector label="Dream roles" options={ROLE_PRESETS} values={preferredRoles} onToggle={toggleValue(preferredRoles, setPreferredRoles)} />

          <label className="textarea-label" htmlFor="doubts">
            What do you want the mentor to solve?
          </label>
          <textarea
            id="doubts"
            rows={4}
            value={doubts}
            placeholder="e.g. I love AI + biology. Want research roles abroad, but confused about colleges and exams."
            onChange={(event) => setDoubts(event.target.value)}
          />

          <button className="primary-btn" type="submit" disabled={loading}>
            {loading ? "Generating roadmap..." : "Generate roadmap"}
          </button>
          {error && <p className="error-text">{error}</p>}
        </form>

        <aside className="planner-aside">
          <h3>What you get</h3>
          <ul>
            <li>Stage-specific action board</li>
            <li>Top skills + recommended colleges</li>
            <li>Salary visibility and role clarity</li>
            <li>Weekly execution sprints</li>
          </ul>
          <div className="testimonial-card">
            <p>
              “The roadmap showed exactly which clubs, hackathons, and internships to target. I landed a product internship in 4 months.”
            </p>
            <span>Ankit, 2nd year CS</span>
          </div>
        </aside>
      </section>

      {response ? (
        <section className="results">
          <div className="results-header">
            <div>
              <p className="eyebrow">{response.roadmap.stage.toUpperCase()} PLAYBOOK</p>
              <h2>{response.roadmap.summary}</h2>
              <p>{response.roadmap.coreStreams[0].scope}</p>
            </div>
            <div className="result-colleges">
              <h4>Featured colleges</h4>
              <div className="tag-row">
                {response.roadmap.featuredColleges.map((college) => (
                  <span key={college} className="tag">
                    {college}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <InsightPanel roadmap={response.roadmap} insights={response.insights} nextSteps={response.nextSteps} />

          <div className="streams-grid">
            {response.roadmap.streams.map((stream) => (
              <StreamCard key={stream.name} stream={stream} />
            ))}
          </div>
        </section>
      ) : (
        <section className="results placeholder">
          <div>
            <p className="eyebrow">Roadmap preview</p>
            <h2>Generate your first AI-powered roadmap</h2>
            <p>Fill the planner to view matched streams, salaries, colleges, and execution timeline.</p>
          </div>
          <div className="placeholder-grid">
            <div className="placeholder-card" />
            <div className="placeholder-card" />
            <div className="placeholder-card" />
          </div>
        </section>
      )}
    </div>
  );
}

function CalendarPage() {
  const [stage, setStage] = useState("12th");
  const [focus, setFocus] = useState("skills");
  const [examDate, setExamDate] = useState("");
  const [hoursPerWeek, setHoursPerWeek] = useState(20);

  const focusConfig = CALENDAR_FOCUS[focus];

  const plan = useMemo(() => {
    if (!examDate) return [];
    const start = new Date();
    const deadline = new Date(examDate);
    const diffWeeks = Math.max(1, Math.ceil((deadline - start) / (1000 * 60 * 60 * 24 * 7)));
    const weeks = Math.min(diffWeeks, 12);

    const schedule = [];
    for (let i = 0; i < weeks; i += 1) {
      const weekStart = new Date(start);
      weekStart.setDate(start.getDate() + i * 7);
      const weekEnd = new Date(weekStart);
      weekEnd.setDate(weekEnd.getDate() + 6);
      const range = `${weekStart.toLocaleDateString("en-IN", { month: "short", day: "numeric" })} - ${weekEnd.toLocaleDateString("en-IN", { month: "short", day: "numeric" })}`;
      schedule.push({
        label: `Week ${i + 1}`,
        range,
        milestone: focusConfig.milestones[i % focusConfig.milestones.length],
        ritual: focusConfig.rituals[i % focusConfig.rituals.length],
      });
    }

    return schedule;
  }, [examDate, focus, focusConfig]);

  return (
    <div className="route calendar-page">
      <header className="route-header">
        <p className="eyebrow">Calendar studio</p>
        <h1>Convert your goals into weekly execution sprints</h1>
        <p>Drop your stage, exam date, and focus area. We’ll craft a 6–12 week plan with milestones and rituals.</p>
      </header>

      <section className="calendar-layout">
        <form className="calendar-form">
          <div className="input-row">
            <label htmlFor="calendar-stage">Learning stage</label>
            <select id="calendar-stage" value={stage} onChange={(event) => setStage(event.target.value)}>
              {STAGE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="input-row">
            <label htmlFor="exam-date">Target exam / milestone date</label>
            <input id="exam-date" type="date" value={examDate} onChange={(event) => setExamDate(event.target.value)} />
          </div>

          <div className="input-row">
            <label htmlFor="focus">Primary focus</label>
            <select id="focus" value={focus} onChange={(event) => setFocus(event.target.value)}>
              {Object.entries(CALENDAR_FOCUS).map(([key, item]) => (
                <option key={key} value={key}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          <div className="input-row">
            <label htmlFor="hours">Hours per week: {hoursPerWeek}</label>
            <input
              id="hours"
              type="range"
              min="10"
              max="50"
              value={hoursPerWeek}
              onChange={(event) => setHoursPerWeek(Number(event.target.value))}
            />
          </div>

          <div className="calendar-pill">
            <p>
              <strong>Focus:</strong> {focusConfig.label}
            </p>
            <p>
              <strong>Suggested rituals:</strong> {focusConfig.rituals.join(" · ")}
            </p>
          </div>
        </form>

        <div className="calendar-preview">
          {plan.length ? (
            plan.map((week) => (
              <article key={week.label} className="calendar-card">
                <header>
                  <h3>{week.label}</h3>
                  <span>{week.range}</span>
                </header>
                <p>
                  <strong>Milestone:</strong> {week.milestone}
                </p>
                <p>
                  <strong>Ritual:</strong> {week.ritual}
                </p>
                <p>
                  <strong>Recommended hours:</strong> {hoursPerWeek}h
                </p>
              </article>
            ))
          ) : (
            <div className="calendar-empty">
              <p>Pick a target date to see a personalised calendar.</p>
              <small>The planner prepares up to 12 weeks of sprints.</small>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <div className="page">
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
      <footer className="footer">
        <p>© {new Date().getFullYear()} CareerMentor AI. Built for students & parents.</p>
        <div className="footer-links">
          <a href="mailto:hello@careermentor.ai">Contact</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
