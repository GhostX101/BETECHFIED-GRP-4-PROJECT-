// member 10 - validation & error handling 

function validatenotedata(req, res, next) {
    const { title, content } = req.body;

    if (!title || !content || title.trim() === '' || content.trim() === '') {
        return res.status(400).json({ success: false, message: 'Title and content are required fields.' });
    }
    next();
}

function validatedateID(req, res, next) {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({ success: false, message: 'Invalid ID format. ID must be a number.' });
    }
    req.noteid = id;
    next();
}

function checkNoteExixts(notes) {
    return function (req, res, next) => {
        const note = notes.find((n) => n.id === req.noteid);
        if (!note) {
            return res.status(404).json({ success: false, message: 'Note not found.' });
        }
        req.note = note;
        next();
    };
}

module.exports = {
    validatenotedata,
    validatedateID,
    checkNoteExixts
};