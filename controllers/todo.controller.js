const db = require("../models");
const ToDo = db.todo;

// Create and Save a new Tutorial
exports.create = (req, res) => {
   // Validate request
   if (!req.body.title) {
    res.status(400).send({ message: "No puede estar vacio" });
    return;
  }

  // Crea tarea nueva
  const todo = new ToDo({
    title: req.body.title,
    body: req.body.body
    
  });

  // Guardar tarea en la db
  todo
    .save(todo)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error al crear la tarea"
      });
    });
};

// Retrieve all ToDo's from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

