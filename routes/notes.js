const express = require('express');
const router = express.Router();

let notes = [
    { id: 1, title: "first note", content: "this is my first note"},
    { id: 2, title: "second note", content: "this is my second note"},
    { id: 3, title: "third note", content: "this is my third note"},
];
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

module.exports = router;