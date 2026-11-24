# Note Taking API Documentation

**Base URL:** `http://localhost:3000`

## Endpoints

- **GET** `/api/health` — Returns `200 OK` server status.
- **POST** `/api/notes` — Body: `{"title": "...", "content": "..."}` -> `201 Created` (`400` if empty).
- **GET** `/api/notes` — Returns `200 OK` with all notes and count.
- **GET** `/api/notes/:id` — Returns `200 OK` for valid ID (`400` invalid ID, `404` not found).
- **PUT** `/api/notes/:id` — Body: `{"title": "...", "content": "..."}` -> `200 OK` with `updatedAt`.
- **DELETE** `/api/notes/:id` — Removes note and returns `200 OK`.
