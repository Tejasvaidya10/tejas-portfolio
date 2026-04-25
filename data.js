// Shared portfolio data
window.PORTFOLIO_DATA = {
  name: "Tejas Vaidya",
  role: "Data Scientist & GenAI Engineer",
  location: "Atlanta, GA",
  email: "vaidyatejas02@gmail.com",
  github: "https://github.com/Tejasvaidya10",
  linkedin: "https://www.linkedin.com/in/tejasvaidya1903/",
  resumeHref: "uploads/Tejas_Vaidya_Resume.pdf",
  quote: {
    text: "Somewhere, something incredible is waiting to be known.",
    author: "Carl Sagan",
  },
  about: {
    short: "MS Data Science and Analytics @ Georgia State (Robinson College of Business). Building production GenAI systems & evaluation frameworks. Graduating Dec 2026.",
    long: "I work on production AI systems, currently designing multi-agent evaluation frameworks for enterprise LLMs at Truist. Before this: one year as a data analyst and an undergraduate degree in electronics and telecom engineering. Now pursuing an M.S. in Data Science and Analytics with a 4.0 GPA.",
  },
  rotators: [
    "Data Scientist",
    "GenAI Engineer",
    "ML Researcher",
    "Builder of evaluation frameworks",
  ],
  photo: "uploads/portrait.jpg",
  medium: {
    handle: "@vaidyatejas02",
    url: "https://medium.com/@vaidyatejas02",
    posts: [
      {
        title: "What I learned building a GenAI insurance underwriting pipeline",
        date: "2025",
        readTime: "8 min",
        url: "https://medium.com/@vaidyatejas02/what-i-learned-building-a-genai-insurance-underwriting-pipeline-58a95823bdc1",
      },
    ],
  },
  stats: [
    { label: "GPA", value: "4.0 / 4.0" },
    { label: "Graduating", value: "Dec 2026" },
    { label: "Eval metrics shipped", value: "20+" },
    { label: "Open-source projects", value: "3" },
  ],
  experience: [
    {
      org: "Truist Bank",
      role: "Graduate Research Assistant",
      period: "2025 — Present",
      location: "Atlanta, GA",
      summary: "Built a production multi-agent RAG evaluation framework for an enterprise AI chatbot.",
      bullets: [
        "Designed an LLM-as-Judge evaluation pipeline covering 20 metrics across 50+ parameters.",
        "Implemented orchestration on AWS Bedrock with LangChain and LangSmith tracing for full observability.",
        "Authored evaluation rubrics and golden datasets adopted by the AI platform team.",
        "Reduced manual QA time on retrieval quality by an order of magnitude.",
      ],
      stack: ["Python", "AWS Bedrock", "LangChain", "LangSmith", "RAG", "LLM-as-Judge"],
    },
    {
      org: "SkyHigh Adventures",
      role: "Data Analyst",
      period: "2023 — 2024",
      location: "Mumbai, India",
      summary: "One year of professional analytics work — SQL, dashboards, and reporting for business stakeholders.",
      bullets: [
        "Built end-to-end SQL pipelines feeding executive dashboards.",
        "Partnered with business teams to translate ambiguous asks into measurable KPIs.",
        "Automated recurring reports, freeing 10+ analyst hours per week.",
      ],
      stack: ["SQL", "Python", "Power BI", "Excel"],
    },
  ],
  education: [
    {
      school: "Georgia State University — Robinson College of Business",
      degree: "M.S. Data Science and Analytics",
      period: "2024 — Dec 2026",
      detail: "GPA 4.0 / 4.0",
    },
    {
      school: "University of Mumbai",
      degree: "B.E. Electronics & Telecommunication Engineering",
      period: "2019 — 2023",
      detail: "",
    },
  ],
  projects: [
    {
      id: "medsift",
      name: "MedSift AI",
      tagline: "Privacy-first audio → clinical notes pipeline",
      year: "2026",
      venue: "Hacklytics 2026 · Georgia Tech",
      kind: "Hackathon",
      summary:
        "End-to-end pipeline that turns clinician–patient audio into structured clinical notes — locally, with PHI redaction before any model call.",
      highlights: [
        "On-device transcription with redaction layer for PHI before LLM inference.",
        "Structured-output prompting maps free speech to SOAP-format notes.",
        "Built and demoed in 36 hours at Hacklytics 2026.",
      ],
      stack: ["Whisper", "Python", "LLM", "PHI redaction", "Structured outputs"],
      links: [{ label: "Devpost", href: "https://devpost.com/software/medsift-ai" }, { label: "GitHub", href: "https://github.com/Tejasvaidya10/MedSift-Ai" }],
    },
    {
      id: "sparkpath",
      name: "SparkPath",
      tagline: "AI for Good — 3rd place winning entry",
      year: "2025",
      venue: "AI for Good Hackathon · 3rd place",
      kind: "Hackathon · Award",
      summary:
        "AI-powered career & learning recommender that meets people where they are — connecting interests to actionable next steps.",
      highlights: [
        "Placed 3rd at the AI for Good Hackathon among a competitive cohort.",
        "Built end-to-end in a weekend: ingestion, recommendation, and front-end.",
        "Designed for low-resource users with mobile-first UX.",
      ],
      stack: ["Python", "LLM", "Recommender", "React"],
      links: [{ label: "Devpost", href: "https://devpost.com/software/sparkpath-a923ob" }, { label: "GitHub", href: "https://github.com/Tejasvaidya10/spark" }],
    },
    {
      id: "laplens",
      name: "LapLens",
      tagline: "F1 telemetry analytics platform",
      year: "2025",
      venue: "Personal project",
      kind: "Full-stack",
      summary:
        "Web app for exploring Formula 1 telemetry — lap traces, sector deltas, and tire-strategy comparisons across drivers and sessions.",
      highlights: [
        "FastAPI backend pulling from FastF1, served behind an Oracle Cloud edge.",
        "React frontend with synchronized lap-trace charts and driver compare views.",
        "Caching layer reduces FastF1 cold-load latency by ~80%.",
      ],
      stack: ["React", "FastAPI", "FastF1", "Oracle Cloud", "Python"],
      links: [{ label: "Live", href: "https://laplens.app" }, { label: "GitHub", href: "https://github.com/Tejasvaidya10/laplens" }],
    },
    {
      id: "aria",
      name: "ARIA",
      tagline: "Production-grade ML with CI/CD",
      year: "2025",
      venue: "Personal project",
      kind: "MLOps",
      summary:
        "An XGBoost classification project wrapped with Docker and a GitHub Actions pipeline — focused on the engineering around the model, not just the model.",
      highlights: [
        "Reproducible training in Docker; deterministic seeds and pinned dependencies.",
        "GitHub Actions CI runs tests, lint, and model-quality checks on every PR.",
        "Versioned artifacts with model cards generated per build.",
      ],
      stack: ["XGBoost", "Docker", "GitHub Actions", "Python"],
      links: [{ label: "Live", href: "https://aria-pi-blond.vercel.app" }, { label: "GitHub", href: "https://github.com/Tejasvaidya10/ARIA" }],
    },
  ],
  skills: {
    Languages: ["Python", "SQL", "JavaScript"],
    "ML / AI": ["PyTorch", "scikit-learn", "XGBoost", "Deep Learning", "Generative AI", "RAG"],
    "GenAI Stack": ["LangChain", "LangSmith", "AWS Bedrock", "LLM-as-Judge", "Prompt Engineering"],
    Cloud: ["AWS", "Oracle Cloud", "Docker", "GitHub Actions"],
    Web: ["React", "FastAPI", "REST APIs"],
    Analytics: ["Power BI", "Tableau", "Statistics", "A/B Testing"],
  },
};
