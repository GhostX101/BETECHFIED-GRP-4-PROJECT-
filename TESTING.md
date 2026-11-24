# API Test Report

All endpoints were verified on `http://localhost:3000` via Thunder Client:

| Endpoint | Test Case | Expected | Actual | Status |
| :--- | :--- | :--- | :--- | :--- |
| `GET /api/health` | Health check | `200 OK` | `200 OK` | Pass |
| `GET /api/notes` | Fetch seed notes | `200 OK` (`count: 3`) | `200 OK` (`count: 3`) | Pass |
| `POST /api/notes` | Empty body validation | `400 Bad Request` | `400 Bad Request` | Pass |
| `POST /api/notes` | Create valid note | `201 Created` | `201 Created` | Pass |
| `GET /api/notes/5` | Fetch single note | `200 OK` | `200 OK` | Pass |
| `GET /api/notes/abc` | Invalid ID format | `400 Bad Request` | `400 Bad Request` | Pass |
| `GET /api/notes/999` | Non-existent note | `404 Not Found` | `404 Not Found` | Pass |
| `PUT /api/notes/5` | Update existing note | `200 OK` + `updatedAt` | `200 OK` + `updatedAt` | Pass |
| `DELETE /api/notes/5` | Delete existing note | `200 OK` | `200 OK` | Pass |
