var express = require('express');
var router = express.Router();

module.exports = (app) => {
    
    const controller = require('../controller/controller.js');

    // Create a new Note
    router.get('/api/hello', controller.hello)

    // app.post('/api/production', production.create)
    
    
    // app.post('/notes', notes.create);

    // // Retrieve all Notes
    // app.get('/notes', notes.findAll);

    // // Retrieve a single Note with noteId
    // app.get('/notes/:noteId', notes.findOne);

    // // Update a Note with noteId
    // app.put('/notes/:noteId', notes.update);

    // // Delete a Note with noteId
    // app.delete('/notes/:noteId', notes.delete);
}