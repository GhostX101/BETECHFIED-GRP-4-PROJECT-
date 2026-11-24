  Note-Taking REST API

 BeTechified Group 4
 Version: 1.0.0

A simple RESTful API built with Node.js and Express.js for creating, viewing, updating, and deleting notes. The API includes request validation, note lookup by ID, a health-check endpoint, and JSON error responses.

 Features

- Create a note with a title and content.
- Retrieve all notes.
- Retrieve a single note by its ID.
- Update an existing note.
- Delete a note.
- Validate note data and note IDs.
- Return appropriate HTTP status codes for successful requests and common errors.
- Check server availability through a health endpoint.

 Technologies

- [Node.js](https://nodejs.org/) — JavaScript runtime.
- [Express.js](https://expressjs.com/) — Web framework for building the API.
- [Nodemon](https://nodemon.io/) — Development utility that restarts the server when files change.
- [Thunder Client](https://www.thunderclient.com/) and Postman — API testing tools.

Project structure

```text
Note-taking API Project Grp 4/
├── data/
│   └── notes.js
├── middleware/
│   └── validation.js
├── routes/
│   └── notes.js
├── .gitignore
├── API_DOCS.md
├── DEMO_SCRIPT.md
├── package.json
├── package-lock.json
├── postman_collection.json
├── server.js
├── SLIDES_OUTLINE.md
└── testing.md
```

 Main files and folders

| File/folder | Purpose |
|---|---|
| `server.js` | Creates and configures the Express application, registers middleware and routes, and starts the server. |
| `routes/notes.js` | Defines the endpoints for creating, reading, updating, and deleting notes. |
| `middleware/validation.js` | Validates note data and IDs, and checks whether a requested note exists. |
| `data/notes.js` | Holds the sample notes and the in-memory notes collection. |
| `postman_collection.json` | Contains a Postman collection for trying the API endpoints. |
| `API_DOCS.md` | Provides a brief endpoint reference. |
| `testing.md` | Records the team's API test results. |

 Requirements

Before running the project, install:

- [Node.js](https://nodejs.org/) (which includes npm).
- A terminal or command prompt.
- An API client such as Postman or Thunder Client (optional, for testing).

 Installation and setup

1. Clone the repository or download the project files.
2. Open a terminal in the project directory.
3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the application:

   ```bash
   npm start
   ```

The server uses port `3000` by default. When it starts successfully, the terminal displays:

```text
Server running on http://localhost:3000
```

 Development mode

To run the server with Nodemon, use:

```bash
npm run dev
```

Nodemon automatically restarts the server when application files are changed.

 Port configuration

The application reads the port from `process.env.PORT` and uses `3000` if no `PORT` environment variable is provided.

For example, to set a different port for one terminal session:

macOS/Linux:

```bash
PORT=5000 npm start
```

Windows PowerShell:

```powershell
$env:PORT=5000
npm start
```

> Note: The current project reads an environment variable named `PORT`, but it does not load a `.env` file. A package such as `dotenv` and a corresponding configuration step would be needed to load values directly from a `.env` file.

 API reference

Base URL: `http://localhost:3000`

All request and response bodies that contain data use JSON.

 1. Health check

Checks whether the API server is running.

- Method: `GET`
- Endpoint: `/api/health`

Example:

```http
GET http://localhost:3000/api/health
```

Successful response — `200 OK`:

```json
{
  "success": true,
  "status": "OK",
  "message": "Note Taking API is running",
  "timestamp": "2026-01-01T09:00:00.000Z"
}
```

The timestamp shown above is an example; the API generates the current timestamp when the request is made.

 2. Create a note

Creates a new note. Both `title` and `content` are required and must not be empty or contain only whitespace.

- Method: `POST`
- Endpoint: `/api/notes`
- Content-Type: `application/json`

Request body:

```json
{
  "title": "My First Note",
  "content": "This is the content of my first note."
}
```

Successful response — `201 Created`:

```json
{
  "success": true,
  "message": "Note created successfully",
  "data": {
    "id": 4,
    "title": "My First Note",
    "content": "This is the content of my first note.",
    "createdAt": "2026-01-04T10:00:00.000Z"
  }
}
```

The ID and timestamp above are illustrative. The API assigns the next available ID and generates the creation timestamp.

Validation response — `400 Bad Request`:

```json
{
  "success": false,
  "message": "Title and content are required fields."
}
```

 3. Retrieve all notes

Returns all notes currently held by the application.

- Method: `GET`
- Endpoint: `/api/notes`

Example:

```http
GET http://localhost:3000/api/notes
```

Successful response — `200 OK`:

```json
{
  "success": true,
  "count": 3,
  "data": [
    {
      "id": 1,
      "title": "Welcome Note",
      "content": "This is the first sample note.",
      "createdAt": "2026-01-01T09:00:00.000Z"
    },
    {
      "id": 2,
      "title": "Groceries",
      "content": "Milk, eggs, bread, coffee.",
      "createdAt": "2026-01-02T10:15:00.000Z"
    },
    {
      "id": 3,
      "title": "Meeting Notes",
      "content": "Discussed API design and merge order.",
      "createdAt": "2026-01-03T14:30:00.000Z"
    }
  ]
}
```

The response includes a `count` and a `data` array. The example shows the three initial sample notes; the actual result changes as notes are created or deleted.

4. Retrieve a single note

Returns a note matching the supplied ID.

- Method: `GET`
- Endpoint: `/api/notes/:id`

Example:

```http
GET http://localhost:3000/api/notes/1
```

Successful response — `200 OK`:

```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Welcome Note",
    "content": "This is the first sample note.",
    "createdAt": "2026-01-01T09:00:00.000Z"
  }
}
```

Possible errors:

- `400 Bad Request` — The ID is not numeric.
- `404 Not Found` — No note exists with the supplied ID.

Invalid ID example:

```json
{
  "success": false,
  "message": "Invalid ID format. ID must be a number."
}
```

Note not found example:

```json
{
  "success": false,
  "message": "Note not found."
}
```

 5. Update a note

Replaces the title and content of an existing note. Both fields are required.

- Method: `PUT`
- Endpoint: `/api/notes/:id`
- Content-Type: `application/json`

Request body:

```json
{
  "title": "Updated Note Title",
  "content": "This is the updated note content."
}
```

Successful response — `200 OK`:

```json
{
  "success": true,
  "message": "Note updated successfully",
  "data": {
    "id": 1,
    "title": "Updated Note Title",
    "content": "This is the updated note content.",
    "createdAt": "2026-01-01T09:00:00.000Z",
    "updatedAt": "2026-01-04T11:00:00.000Z"
  }
}
```

The `updatedAt` value is generated when the note is updated. The example timestamp is illustrative.

Possible errors:

- `400 Bad Request` — Invalid ID or missing/blank title or content.
- `404 Not Found` — No note exists with the supplied ID.

 6. Delete a note

Deletes the note matching the supplied ID.

- Method: `DELETE`
- Endpoint: `/api/notes/:id`

Example:

```http
DELETE http://localhost:3000/api/notes/1
```

Successful response — `200 OK`:

```json
{
  "success": true,
  "message": "Note deleted successfully",
  "data": {
    "id": 1,
    "title": "Welcome Note",
    "content": "This is the first sample note.",
    "createdAt": "2026-01-01T09:00:00.000Z"
  }
}
```

The response includes the deleted note.

Possible errors:

- `400 Bad Request` — The ID is not numeric.
- `404 Not Found` — No note exists with the supplied ID.

## HTTP status codes

| Status code | Meaning | When it is returned |
|---|---|---|
| `200 OK` | Request successful | Health check, reading, updating, or deleting a note. |
| `201 Created` | Resource created | A note is created successfully. |
| `400 Bad Request` | Invalid request | Required note fields are missing/blank or an ID is not numeric. |
| `404 Not Found` | Resource or route not found | A note ID does not exist, or the requested route is not defined. |
| `500 Internal Server Error` | Server error | An unexpected error reaches the global error handler. |

## Testing the API

Start the server, then use Postman or Thunder Client to send requests to the endpoints listed above.

A Postman collection is included in the project as:

```text
postman_collection.json
```

To use it in Postman:

1. Open Postman.
2. Select Import.
3. Choose `postman_collection.json` from the project folder.
4. Run the requests against `http://localhost:3000`.

The project also includes `testing.md`, which records the team's reported tests and results. The test report states that the health check, listing, creation, validation, single-note retrieval, update, and deletion tests passed using Thunder Client.

 Example cURL requests

Create a note:

```bash
curl -X POST http://localhost:3000/api/notes \
  -H "Content-Type: application/json" \
  -d '{"title":"Study Plan","content":"Review Express.js"}'
```

Retrieve all notes:

```bash
curl http://localhost:3000/api/notes
```

Retrieve one note:

```bash
curl http://localhost:3000/api/notes/1
```

Update a note:

```bash
curl -X PUT http://localhost:3000/api/notes/1 \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated Study Plan","content":"Practice Express.js routes"}'
```

Delete a note:

```bash
curl -X DELETE http://localhost:3000/api/notes/1
```

Check the server:

```bash
curl http://localhost:3000/api/health
```

 Data storage and limitations

The current implementation stores notes in an in-memory JavaScript object (`data/notes.js`). It starts with three sample notes.

This means:

- Notes are available while the server process is running.
- Notes created, updated, or deleted are held in memory.
- Restarting the server restores the original sample notes.
- The current implementation does not use a persistent database.

// Error handling and validation

The API uses custom middleware to:

- Check that note titles and content are provided and are not blank.
- Check that note IDs are numeric.
- Check whether a note exists before retrieving, updating, or deleting it.

The server also defines a fallback `404` response for unknown routes and a global error handler for unexpected server errors.

 Contributors

 BeTechified Group 4

This project was developed collaboratively by the group.

---


