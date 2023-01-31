module.exports = app => {
    const todo = require("../controllers/todo.controller.js");
  
    var router = require("express").Router();
  
    // Create a new todo
   router.post("/", todo.create);
  
    // Retrieve all todos
   router.get("/", todo.findAll);

   // Delete all todos
   router.delete("/", todo.deleteAll);
  
    // Retrieve all published Tutorials
   // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    //router.get("/:id", tutorials.findOne);
  
    // Update a Tutorial with id
   // router.put("/:id", tutorials.update);
  
    // Delete a Tutorial with id
    //router.delete("/:id", tutorials.delete);
  
    app.use('/api/todo', router);
  };