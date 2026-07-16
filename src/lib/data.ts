export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  year: string;
  title: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    year: "2026",
    title: "Diagrammr",
    description:
      "Visualizes how a codebase's architecture evolves across git history, rendering the commit DAG as an interactive canvas and generating an LLM-powered architecture diagram for any commit. An incremental caching pipeline sends only the git diff to the model when a cached ancestor exists, cutting token cost and latency.",
    tags: ["React", "Node.js", "React Flow", "JointJS", "GPT-4o", "Docker"],
    links: [{ label: "GitHub", href: "https://github.com/bmp0404/momentumHackathon" }],
  },
  {
    year: "2026",
    title: "JimmySimulation",
    description:
      "A prototype testing whether many small, fast LLM-driven agent decisions can produce more realistic evacuation behavior than a purely formulaic simulator. A deterministic engine owns all physics and timing; agents only make constrained, schema-validated routing decisions with deterministic fallbacks.",
    tags: ["Python", "FastAPI", "React", "React Flow", "LLM Agents"],
    links: [{ label: "GitHub", href: "https://github.com/ChetanGorantla/jimmySimulation" }],
  },
  {
    year: "2025",
    title: "Canopus",
    description:
      "Turns a natural-language math prompt into a narrated, 3Blue1Brown-style animation: one thread generates ElevenLabs audio while another generates Manim animation code, then FFmpeg merges them. Multithreading cut generation time 40-50%.",
    tags: ["Flask", "Gemini", "Manim", "ElevenLabs", "FFmpeg"],
    links: [
      { label: "GitHub", href: "https://github.com/Rohan-Yelandur/hack-tx-25" },
      { label: "Devpost", href: "https://devpost.com/software/visiomath-a18ef4" },
    ],
  },
  {
    year: "2025",
    title: "NoTeX",
    description:
      "Full-stack, no-code builder for professional LaTeX resumes with live preview and PDF export via PyLaTeX/Tectonic. Supabase Auth and Postgres row-level security keep each user's resume data isolated, with JSONB versioning for edits.",
    tags: ["React", "Tailwind CSS", "FastAPI", "Supabase", "PostgreSQL"],
    links: [{ label: "GitHub", href: "https://github.com/bmp0404/NoTeX" }],
  },
  {
    year: "2025",
    title: "Embedded Space Invaders",
    description:
      "Bare-metal game engine built from scratch on a TI MSPM0G3507: custom PCB, SPI LCD graphics, 12-bit DAC audio, and a timer-driven ISR game loop. Fixed sprite-trail artifacts by scaling the erase buffer proportionally to game speed instead of using a fixed buffer.",
    tags: ["C/C++", "Embedded Systems", "SPI", "PCB Design"],
    links: [{ label: "Video", href: "https://youtube.com/shorts/rKMOJgzfXrA?feature=share" }],
  },
  {
    year: "2025",
    title: "FileFlow",
    description:
      "24-hour hackathon app that manages Google Drive via natural language, with a LLaMA-3 agent running a think-tool-observe loop to plan and execute multi-step file operations. Each Drive action is a modular LangChain tool, so adding Dropbox/OneDrive support is just a new tool function.",
    tags: ["Python", "Streamlit", "LangChain", "LLaMA 3", "OAuth"],
    links: [
      { label: "GitHub", href: "https://github.com/Rohan-Yelandur/Llama-Stack-Challenge" },
      { label: "Devpost", href: "https://devpost.com/software/fileflow" },
    ],
  },
  {
    year: "2025",
    title: "Jamboree",
    description:
      "MERN app for synced group music listening. Users join genre-based 'bubbles' via the Spotify Web API, with the server as the single source of truth for playback timing so late joiners calculate elapsed offset locally instead of polling continuously.",
    tags: ["React", "Node.js", "MongoDB", "Spotify API", "OAuth"],
    links: [
      { label: "GitHub", href: "https://github.com/bmp0404/RecordHacks" },
      { label: "Devpost", href: "https://devpost.com/software/jamboree-vkrbp5" },
    ],
  },
  {
    year: "2024",
    title: "Google Maps Lead Scraper",
    description:
      "Freelance automation tool for a small-business consulting client: a Node.js/Playwright script that scrapes Google Maps listings and flags restaurants without websites, tripling the team's lead-generation productivity.",
    tags: ["Node.js", "Playwright", "Web Scraping"],
    links: [{ label: "GitHub", href: "https://github.com/bmp0404/lead-finder-bot" }],
  },
];

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  blurb: string;
  /** Path under /public, e.g. "/logos/amazon.svg". Omit until a real logo is added. */
  logo?: string;
};

export const experience: ExperienceItem[] = [
  {
    company: "Lonyst",
    role: "Co-Founder",
    period: "Jun 2026 – Present",
    blurb: "Building credit infrastructure for small businesses.",
    logo: "/logos/lonyst.jpeg",
  },
  {
    company: "IBM",
    role: "Software Engineer Intern",
    period: "Aug 2026 – Dec 2026",
    blurb: "Identity and access management, applied to AI systems.",
    logo: "/logos/ibm.jpg",
  },
  {
    company: "Amazon",
    role: "Software Development Engineer Intern",
    period: "May 2026 – Aug 2026",
    blurb: "Natural language recommendations for the Books team.",
    logo: "/logos/amazon.jpeg",
  },
  {
    company: "Convergent",
    role: "Software Engineer: AMOS Labs",
    period: "Jan 2026 – May 2026",
    blurb: "Built TicketAgent, a scoring engine that ranks GitHub issues and recommends bounties.",
    logo: "/logos/convergent.jpg",
  },
  {
    company: "Convergent",
    role: "Software Engineer: AdTalk",
    period: "Sep 2025 – Dec 2025",
    blurb: "Built a Raspberry Pi pipeline verifying in-store ad reads via concurrent audio capture and transcription.",
    logo: "/logos/convergent.jpg",
  },
  {
    company: "InternNest",
    role: "Software Engineer",
    period: "Sep 2025 – Dec 2025",
    blurb: "Payment integration and verification for a student internship marketplace.",
    logo: "/logos/internnest.jpeg",
  },
  {
    company: "Makistry",
    role: "Software Engineer Intern",
    period: "Sep 2025 – Dec 2025",
    blurb: "Natural language to CAD pipeline, generating buildable CadQuery models from plain-English briefs.",
    logo: "/logos/makistry.jpeg",
  },
  {
    company: "Emotional Map",
    role: "Software Engineer Intern",
    period: "Jul 2025 – Dec 2025",
    blurb: "Selective RAG pipeline and serverless AWS migration for an AI therapy platform.",
    logo: "/logos/aware-health.jpeg",
  },
  {
    company: "Aware Health",
    role: "Software Engineer Intern",
    period: "Jun 2025 – Sep 2025",
    blurb: "Medical RAG pipeline over ChromaDB, improving MedQA-USMLE accuracy from 19/50 to 25/50.",
    logo: "/logos/aware-health.jpeg",
  },
  {
    company: "Willerson Cardiovascular Modeling Lab",
    role: "Research Assistant",
    period: "Jan 2025 – Jul 2025",
    blurb: "PyTorch model predicting 3D heart deformation from pressure and stress, 97.65% training accuracy.",
    logo: "/logos/ut-austin.jpeg",
  },
  {
    company: "UT Center for Perceptual Systems",
    role: "Computer Vision Intern",
    period: "Jan 2025 – May 2025",
    blurb: "Pose estimation pipeline analyzing children's gaze and movement for behavioral research.",
    logo: "/logos/ut-austin.jpeg",
  },
  {
    company: "React Interactive",
    role: "Software Engineering Intern",
    period: "May 2024 – Dec 2024",
    blurb: "Refactored legacy scripts into a Unity/C# engine, expanding wave variety from 2 to 100+.",
  },
  {
    company: "UH Cullen College of Engineering",
    role: "Research Assistant, Mim Rahimi's Lab",
    period: "Jun 2023 – Sep 2023",
    blurb: "Electrochemical CO2 capture research.",
    logo: "/logos/uh.jpeg",
  },
  {
    company: "UT Dallas",
    role: "Data Analysis Research Intern",
    period: "Jun 2022 – Jul 2022",
    blurb: "Decision Tree and K-Means models predicting Titanic survival; SQL Server ETL and Tableau dashboards.",
    logo: "/logos/utd.jpeg",
  },
];

export const socials = {
  github: "https://github.com/bmp0404",
  linkedin: "https://linkedin.com/in/krishdhanuka4",
  email: "mailto:krishdhan@icloud.com",
};
