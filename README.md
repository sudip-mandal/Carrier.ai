# Career Mentor Platform

AI-assisted roadmap planner for students who are currently in 10th, 12th, or college. The platform lets learners describe their interests, preferred locations, and dream roles, then generates a personalized stream/college/skill plan using a curated knowledge base.

## Stack

- **Frontend:** React + Vite + React Router (located in `frontend/`)
- **Backend:** Express API (located in `server/`)

## Local Development

### 1. Backend

```bash
cd /Users/sornalisen/Desktop/career.ai/server
npm install
npm run dev
```

The API boots on `http://localhost:4000`.

### 2. Frontend

```bash
cd /Users/sornalisen/Desktop/career.ai/frontend
npm install
npm run dev
```

The Vite dev server proxies `/api` calls to the backend, so the UI works out of the box.  
SPA routes:
- `/` – marketing overview + feature cards
- `/roadmap` – AI mentor form + roadmap visualisation
- `/calendar` – personalised execution calendar builder

## Production Builds

- Frontend: `npm run build` (outputs to `frontend/dist`)
- Backend: `npm run start`

## Features

- Student profile form with stage selector, interest/location chips, and open-ended mentor question.
- Express endpoint `/api/guidance` that fuses stage templates with stream libraries to return:
  - Action plan, essential skills, featured colleges
  - Stream-specific roles, salary bands, skills, and matching colleges
  - AI-style coaching insights and next steps
- Responsive UI with insight panels, stream cards, and timeline summaries.

## Next Ideas

- Add real LLM integration for natural language responses.
- Persist user sessions + progress tracking.
- Mentor chat widget with scheduling.

