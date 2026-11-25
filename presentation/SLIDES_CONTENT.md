# 5-Slide Presentation Deck (Title, Logic, Endpoints, Demo Flow, Lessons)

- **Google Slides Link:** https://docs.google.com/presentation/d/1FBFw7oCv_TpK8McO_U1AR3vNkiWuf-kTeHd6mSKbBlg/edit?usp=sharing
- **Exported PDF Deck:** `presentation/Note Taking REST API.pdf`

## Slide Breakdown
1. **Slide 1 — Title:** Note Taking REST API (BeTechified Group 4) — Node.js & Express Backend.
2. **Slide 2 — Logic:** Modular separation across `server.js`, `middleware/validation.js`, `routes/notes.js`, and in-memory `data/notes.js` state management.
3. **Slide 3 — Endpoints:** Full REST contract for `/api/health` and `/api/notes` (`POST`, `GET`, `GET /:id`, `PUT /:id`, `DELETE /:id`) with `200`/`201`/`400`/`404` status codes.
4. **Slide 4 — Demo Flow:** Live localhost walkthrough: server startup -> health check -> seed notes -> empty POST `400` validation -> valid POST `201` -> GET/PUT/DELETE by ID.
5. **Slide 5 — Lessons:** Collaborative feature-branch PR workflow across 16 team members, middleware-first validation, and roadmap to database persistence.
