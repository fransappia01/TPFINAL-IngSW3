module.exports = mongoose => {
    const toDo = mongoose.model(
      "toDo",
      mongoose.Schema(
        {
          title: String,
          body: String,
        
        },
        { timestamps: true }
      )
    );
  
    return toDo;
  };