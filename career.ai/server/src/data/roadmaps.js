const STAGE_TEMPLATES = {
  "10th": {
    summary: "Build strong fundamentals, explore interests, and choose the right stream after board exams.",
    coreStreams: [
      {
        name: "Science (PCM / PCB)",
        scope: "Engineering, medicine, research, defence, emerging tech like AI & robotics.",
        salaryBand: "₹5L - ₹45L+ depending on role and specialization.",
      },
      {
        name: "Commerce",
        scope: "Finance, business management, chartered accountancy, fintech, marketing.",
        salaryBand: "₹4L - ₹35L+",
      },
      {
        name: "Arts & Humanities",
        scope: "Design, social sciences, psychology, civil services, media, law.",
        salaryBand: "₹3L - ₹30L+",
      },
    ],
    actionPlan: [
      "Identify interests through aptitude + curiosity mapping.",
      "Double down on Math + English + Digital skills no matter the stream.",
      "Practice foundational problem solving: Olympiads, quizzes, coding basics.",
      "Shadow seniors or attend online webinars to understand real career paths.",
    ],
    featuredColleges: [
      "Kendriya Vidyalaya + CBSE schools with STEM labs",
      "State science colleges with integrated coaching",
      "National Institute of Open Schooling (if flexible pacing needed)",
    ],
    essentialSkills: ["Communication", "Digital fluency", "Quantitative reasoning", "Time management"],
  },
  "12th": {
    summary: "Craft a targeted roadmap for undergrad admissions, scholarships, and skill-based differentiation.",
    coreStreams: [
      {
        name: "Engineering & Tech",
        scope: "Software, core engineering, product, research.",
        salaryBand: "₹6L - ₹60L+",
      },
      {
        name: "Medicine & Bio Sciences",
        scope: "MBBS, BDS, Pharma, BioTech, public health, research.",
        salaryBand: "₹7L - ₹55L+",
      },
      {
        name: "Business & Finance",
        scope: "BBA, B.Com, Economics, CA + CFA tracks, consulting.",
        salaryBand: "₹5L - ₹48L+",
      },
      {
        name: "Design, Humanities & Emerging Careers",
        scope: "UX/UI, media, psychology, sports science, public policy.",
        salaryBand: "₹4L - ₹32L+",
      },
    ],
    actionPlan: [
      "Shortlist 2-3 target programs (dream / reach / safe) and note entrance tests.",
      "Map next 6-12 months using exam calendars (JEE, NEET, CUET, CLAT, NID).",
      "Build standout portfolio: hackathons, research paper, internships, community impact.",
      "Plan finances early: scholarships, education loans, assistantships.",
    ],
    featuredColleges: [
      "IITs, NITs, IIITs",
      "AIIMS, JIPMER, top state medical colleges",
      "SRCC, Christ, Narsee Monjee, Ashoka, Krea",
      "NID, Srishti, Symbiosis, FLAME",
    ],
    essentialSkills: ["Advanced STEM or Commerce foundation", "Profile building", "Project execution", "Interview readiness"],
  },
  college: {
    summary: "Translate academics to employability through projects, internships, and networking.",
    coreStreams: [
      {
        name: "Software & Product",
        scope: "Full-stack, data, AI, product management.",
        salaryBand: "₹8L - ₹65L+",
      },
      {
        name: "Core Engineering",
        scope: "Manufacturing, energy, EV, sustainable tech, R&D.",
        salaryBand: "₹6L - ₹40L+",
      },
      {
        name: "Business & Analytics",
        scope: "Finance, consulting, growth, marketing analytics.",
        salaryBand: "₹7L - ₹55L+",
      },
      {
        name: "Creative & Impact",
        scope: "Design, content, policy, social entrepreneurship.",
        salaryBand: "₹4L - ₹28L+",
      },
    ],
    actionPlan: [
      "Set 3 career experiments per semester: projects, internships, clubs.",
      "Document everything (LinkedIn + GitHub + Notion portfolio).",
      "Master job-ready stack: internships, freelance, case comps, open source.",
      "Prepare for placements early: aptitude, interviews, negotiation.",
    ],
    featuredColleges: [
      "IISc, IITs, IIITs, BITS",
      "IIM IPM programs, ISB YLP, NMIMS, SP Jain",
      "Top private universities (VIT, Manipal, SIT, PES)",
    ],
    essentialSkills: ["Internship experience", "Networking", "Industry tools", "Career storytelling"],
  },
};

const STREAM_LIBRARY = {
  technology: {
    name: "Technology & Computer Science",
    skills: ["DSA", "System Design", "Cloud", "AI/ML", "Product thinking"],
    opportunities: ["Software Engineer", "Data Scientist", "AI Researcher", "Product Manager"],
    roadmap: [
      "Solidify math + programming foundations.",
      "Learn one backend + one frontend stack.",
      "Build 3-4 impact projects mapped to real problems.",
      "Contribute to open-source, participate in hackathons.",
      "Prepare for internships: resume, referrals, mock interviews.",
    ],
    avgPackage: "₹8L - ₹65L+ depending on company tier.",
    colleges: ["IITs", "IIITs", "NITs", "VIT", "SRM", "DSCE", "State tech universities"],
  },
  finance: {
    name: "Finance, Commerce & Analytics",
    skills: ["Financial modeling", "Excel & Python", "Valuations", "Macro trends"],
    opportunities: ["Investment Analyst", "CA/CMA/CFA", "Fintech PM", "Risk Analyst"],
    roadmap: [
      "Complete core Commerce subjects + add analytics (SQL/Python).",
      "Externships with CA firms, startups, student investment funds.",
      "Certifications: NISM, CFA Level 1, Bloomberg Market Concepts.",
      "Network via LinkedIn, cold emails, alumni coffee chats.",
    ],
    avgPackage: "₹6L - ₹48L+",
    colleges: ["SRCC", "NMIMS", "Christ", "IIM IPM", "FLAME", "Symbiosis"],
  },
  healthcare: {
    name: "Healthcare & Life Sciences",
    skills: ["Biology", "Chemistry", "Patient care", "Research methodology"],
    opportunities: ["Doctor", "Biotech Researcher", "Public Health Specialist"],
    roadmap: [
      "Crack NEET or relevant entrance exam.",
      "Pursue MBBS/BDS/BPT/Pharma with research focus.",
      "Take up internships in hospitals, labs, NGOs.",
      "Explore health-tech, telemedicine, or policy roles.",
    ],
    avgPackage: "₹7L - ₹55L+",
    colleges: ["AIIMS", "CMC Vellore", "JIPMER", "Manipal", "State medical colleges"],
  },
  design: {
    name: "Design, Media & Creativity",
    skills: ["Visual storytelling", "Figma/Adobe", "User research", "Content systems"],
    opportunities: ["UX Designer", "Content Strategist", "Game Designer", "Media Producer"],
    roadmap: [
      "Develop sketching + visual thinking habits daily.",
      "Master design tools, motion graphics, and storytelling.",
      "Build portfolio with problem-first narratives.",
      "Collaborate with tech clubs, startups, NGOs for impact.",
    ],
    avgPackage: "₹4L - ₹32L+",
    colleges: ["NID", "NIFT", "MIT ID", "Symbiosis", "Private design schools"],
  },
  civil_services: {
    name: "Civil Services & Policy",
    skills: ["General studies", "Ethics", "Essay writing", "Current affairs"],
    opportunities: ["IAS/IPS/IFS", "Policy Analyst", "Think Tank Researcher"],
    roadmap: [
      "Choose graduation subject aligning with UPSC optionals.",
      "Daily newspaper + PIB + monthly magazines.",
      "Attempt mock tests every week from year 2.",
      "Intern with MPs, NGOs, policy labs for ground exposure.",
    ],
    avgPackage: "₹8L+ plus government perks",
    colleges: ["DU", "JNU", "Ashoka", "State universities with humanities strength"],
  },
};

const normalize = (value = "") => value.toLowerCase().trim();

function matchStreams(interests = []) {
  if (!interests.length) return Object.values(STREAM_LIBRARY);
  const tokens = interests.map(normalize);
  return Object.values(STREAM_LIBRARY).filter((stream) =>
    tokens.some(
      (token) =>
        stream.name.toLowerCase().includes(token) ||
        stream.skills.some((skill) => skill.toLowerCase().includes(token)) ||
        stream.opportunities.some((role) => role.toLowerCase().includes(token)),
    ),
  );
}

function buildRoadmap({ stage = "12th", interests = [], preferredLocations = [] }) {
  const template = STAGE_TEMPLATES[stage] ?? STAGE_TEMPLATES["12th"];
  const matchedStreams = matchStreams(interests);

  return {
    stage,
    summary: template.summary,
    essentialSkills: template.essentialSkills,
    actionPlan: template.actionPlan,
    streams: matchedStreams.map((stream) => ({
      name: stream.name,
      opportunities: stream.opportunities,
      roadmap: stream.roadmap,
      avgPackage: stream.avgPackage,
      skills: stream.skills,
      recommendedColleges: stream.colleges.filter(
        (college) =>
          !preferredLocations.length || preferredLocations.some((loc) => college.toLowerCase().includes(normalize(loc))),
      ),
    })),
    featuredColleges: template.featuredColleges,
    coreStreams: template.coreStreams,
  };
}

module.exports = {
  STAGE_TEMPLATES,
  STREAM_LIBRARY,
  buildRoadmap,
};

