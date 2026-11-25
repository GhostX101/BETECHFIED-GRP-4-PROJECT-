# Note Taking API Documentation

**Base URL:** `http://localhost:3000`

## Project Logic & In-Memory Data Structure
- **How CRUD Works Without a Database:** Instead of PostgreSQL or MongoDB, `data/notes.js` exports a stateful JavaScript object (`{ notes: [...], nextId: 4 }`) stored in Node.js process memory.
- **Data Model:** Each note object contains `id` (auto-incremented integer), `title` (string), `content` (string), `createdAt` (ISO-8601 timestamp), and `updatedAt` (ISO-8601 timestamp added on `PUT`).
- **Request Lifecycle:** Requests enter `server.js` (`express.json()`), pass through `middleware/validation.js` (`validatenotedata`, `validatedateID`, `checkNoteExixts`), and execute array operations (`push`, `find`, `splice`) in `routes/notes.js`. Data persists while the server runs and resets to the 3 initial seed notes on restart.

## Endpoints
- **GET** `/api/health` — Returns `200 OK` server status.
- **POST** `/api/notes` — Body: `{"title": "...", "content": "..."}` -> `201 Created` (`400` if empty).
- **GET** `/api/notes` — Returns `200 OK` with all notes and `count`.
- **GET** `/api/notes/:id` — Returns `200 OK` for valid ID (`400` invalid ID, `404` not found).
- **PUT** `/api/notes/:id` — Body: `{"title": "...", "content": "..."}` -> `200 OK` with `updatedAt`.
- **DELETE** `/api/notes/:id` — Removes note from array and returns `200 OK`.
