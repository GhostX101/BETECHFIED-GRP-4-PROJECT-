const express = require('express');
const notesRouter = require('./routes/notes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health check route (Member 3)
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    status: 'OK',
    message: 'Note Taking API is running',
    timestamp: new Date().toISOString()
  });
});

// Mount Notes CRUD routes
app.use('/api/notes', notesRouter);

// Fallback 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});