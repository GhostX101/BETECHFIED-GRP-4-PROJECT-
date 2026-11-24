const express = require('express');
const router = express.Router();
const data = require('../data/notes');
const {
  validatenotedata,
  validatedateID,
  checkNoteExixts
} = require('../middleware/validation');

// Member 4: POST /api/notes - Create a new note
router.post('/', validatenotedata, (req, res) => {
  const { title, content } = req.body;

  const newNote = {
    id: data.nextId++,
    title: title.trim(),
    content: content.trim(),
    createdAt: new Date().toISOString()
  };

  data.notes.push(newNote);

  res.status(201).json({
    success: true,
    message: 'Note created successfully',
    data: newNote
  });
});

// Member 5: GET /api/notes - Read all notes
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    count: data.notes.length,
    data: data.notes
  });
});

// Member 6: GET /api/notes/:id - Read a single note
router.get('/:id', validatedateID, checkNoteExixts(data.notes), (req, res) => {
  res.status(200).json({
    success: true,
    data: req.note
  });
});

// Member 7: PUT /api/notes/:id - Update an existing note
router.put(
  '/:id',
  validatedateID,
  checkNoteExixts(data.notes),
  validatenotedata,
  (req, res) => {
    const { title, content } = req.body;

    req.note.title = title.trim();
    req.note.content = content.trim();
    req.note.updatedAt = new Date().toISOString();

    res.status(200).json({
      success: true,
      message: 'Note updated successfully',
      data: req.note
    });
  }
);

// Member 8: DELETE /api/notes/:id - Delete a note
router.delete('/:id', validatedateID, checkNoteExixts(data.notes), (req, res) => {
  const index = data.notes.findIndex((n) => n.id === req.noteid);
  const deletedNote = data.notes.splice(index, 1)[0];

  res.status(200).json({
    success: true,
    message: 'Note deleted successfully',
    data: deletedNote
  });
});

module.exports = router;