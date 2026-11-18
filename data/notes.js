// data/notes.js
// In-memory data store for the Notes API.

const data = {
    notes: [
        {
            id: 1,
            title: "Welcome Note",
            content: "This is the first sample note.",
            createdAt: "2026-01-01T09:00:00.000Z",
        },
        {
            id: 2,
            title: "Groceries",
            content: "Milk, eggs, bread, coffee.",
            createdAt: "2026-01-02T10:15:00.000Z",
        },
        {
            id: 3,
            title: "Meeting Notes",
            content: "Discussed API design and merge order.",
            createdAt: "2026-01-03T14:30:00.000Z",
        },
    ],
    nextId: 4, // next note created will get id = 4
};

module.exports = data;