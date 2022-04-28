const app = require('express').Router();

// Import our modular routers for /tips and /feedback
const notesRouter = require('./notes');

app.use('/notes', notesRouter);

module.exports = app;
