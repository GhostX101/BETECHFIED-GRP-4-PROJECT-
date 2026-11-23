const express = require('express');
const router = express.Router();

let notes = [
    { id: 1, title: "first note", content: "this is my first note" },
    { id: 2, title: "second note", content: "this is my second note" },
    { id: 3, title: "third note", content: "this is my third note" },
];

// POST /api/notes - Create a new note - YOUR CODE
router.post('/', (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({
            message: 'Title and content are required'
        });
    }

    const newId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) + 1 : 1;

    const newNote = {
        id: newId,
        title,
        content,
        createdAt: new Date().toISOString()
    };

    notes.push(newNote);

    return res.status(201).json({
        message: 'Note created successfully',
        note: newNote
    });
});

// PUT /api/notes/:id - THEIR CODE - DO NOT TOUCH
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, content } = req.body;

    if (isNaN(id)) {
        return res.status(400).json({ success: false, message: 'Invalid ID format. ID must be a number.' });
    }

    if (!title || !content) {
        return res.status(400).json({ success: false, message: "Title and content are required" });
    }

    const note = notes.find((n) => n.id === id);

    if (!note) {
        return res.status(404).json({ success: false, message: "Note not found" });
    }

    note.title = title;
    note.content = content;

    res.json({ success: true, message: "Note updated successfully", data: note });
});

// DELETE /api/notes/:id - YOUR CODE
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const index = notes.findIndex((note) => note.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: 'Note not found'
        });
    }

    const [deletedNote] = notes.splice(index, 1);
    return res.status(200).json({
        message: 'Note deleted',
        note: deletedNote
    });
});

module.exports = router;