const models = require('../app/models');

// Create and Save a new Note
exports.hello = (req, res) => {
    res.send({express:'Hello'});

};

// // Retrieve and return all notes from the database.
// exports.findAll = (req, res) => {

// };

// // Find a single note with a noteId
// exports.findOne = (req, res) => {

// };

// // Update a note identified by the noteId in the request
// exports.update = (req, res) => {

// };

// // Delete a note with the specified noteId in the request
// exports.delete = (req, res) => {

// };