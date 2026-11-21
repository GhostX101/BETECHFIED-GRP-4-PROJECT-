
const express = require('express');
const router = express.Router();

// Import the shared notes data
const data = require('../data/notes');

// POST /api/notes - Create a new note
router.post('/', (req, res) => {

    const { title, content } = req.body;

    // Validate required fields
    if (!title || !content) {
        return res.status(400).json({
            message: 'Title and content are required'
        });
    }

    // Create the new note
    const newNote = {
        id: data.nextId++,
        title,
        content,
        createdAt: new Date().toISOString()
    };

    // Save note to the shared array
    data.notes.push(newNote);

    // Send successful response
    return res.status(201).json({
        message: 'Note created successfully',
        note: newNote
    });

});

// DELETE /api/notes/:id
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const index = data.notes.findIndex((note) => note.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: 'Note not found'
        });
    }

    const [deletedNote] = data.notes.splice(index, 1);
    return res.status(200).json({
        message: 'Note deleted',
        note: deletedNote
    });
});

module.exports = router;
