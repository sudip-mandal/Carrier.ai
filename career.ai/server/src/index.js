const express = require("express");
const cors = require("cors");
const { z } = require("zod");
const { buildRoadmap, STAGE_TEMPLATES } = require("./data/roadmaps");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const guidanceSchema = z.object({
  stage: z.enum(["10th", "12th", "college"]).default("12th"),
  interests: z.array(z.string()).default([]),
  preferredLocations: z.array(z.string()).default([]),
  preferredRoles: z.array(z.string()).default([]),
  doubts: z.string().max(500).optional(),
});

app.get("/api/roadmaps/:stage", (req, res) => {
  const stage = req.params.stage;
  if (!STAGE_TEMPLATES[stage]) {
    return res.status(404).json({ error: "Stage not found" });
  }
  const roadmap = buildRoadmap({ stage });
  res.json(roadmap);
});

app.post("/api/guidance", (req, res) => {
  const parsed = guidanceSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Invalid request", details: parsed.error.flatten() });
  }

  const payload = parsed.data;
  const roadmap = buildRoadmap(payload);

  const insights = [
    `Top focus areas: ${roadmap.essentialSkills.slice(0, 3).join(", ")}.`,
    `Next best action: ${roadmap.actionPlan[0]}.`,
    `Lead stream suggestion: ${roadmap.streams[0]?.name ?? "Explore fundamentals"} with roles ${roadmap.streams[0]?.opportunities.slice(0, 2).join(", ") ?? ""}.`,
  ];

  res.json({
    roadmap,
    insights,
    nextSteps: [
      "Book a mock mentor call",
      "Download personalized roadmap PDF",
      "Enroll in foundational skill sprint",
    ],
  });
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok", timestamp: Date.now() });
});

app.listen(PORT, () => {
  console.log(`Career mentor API running on http://localhost:${PORT}`);
});

