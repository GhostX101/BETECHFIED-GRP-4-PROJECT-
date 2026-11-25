# Demo Video Script & Live Localhost Walkthrough

**Demo Video Link:** https://www.loom.com/share/24c51423a5274655bee69399db8e621c

## Steps for Live Demo on Localhost
1. Run `npm install` and `npm run dev` in the project root to start Express on `http://localhost:3000`.
2. Open Thunder Client or Postman and send `GET http://localhost:3000/api/health`.
3. Test all 5 CRUD routes on `http://localhost:3000/api/notes` (including empty POST `400` validation and invalid ID `400`/`404` checks).

## Speaker Script (What Each Presenter Says)
- **Speaker 1 (0:00–0:45) — Intro & Project Logic:** "Welcome to BeTechified Group 4’s Note Taking REST API. Built with Node.js and Express, our architecture separates routing in `routes/notes.js`, validation in `middleware/validation.js`, and stateful in-memory storage in `data/notes.js` without requiring an external database."
- **Speaker 2 (0:45–1:45) — Create & Validation Demo:** "Starting the server with `npm run dev`, we verify `GET /api/health` and fetch our 3 seeded notes via `GET /api/notes`. Sending an empty `POST /api/notes` triggers our validation middleware and returns `400 Bad Request`, whereas a valid JSON payload creates Note 4 with `201 Created`."
- **Speaker 3 (1:45–3:00) — Read, Update, Delete & Wrap-Up:** "Next, we retrieve Note 4 with `GET /api/notes/4`, update it via `PUT /api/notes/4`—which appends an `updatedAt` timestamp—and remove it with `DELETE /api/notes/4`. All endpoints, docs, and PRs are merged and ready on GitHub. Thank you!"
