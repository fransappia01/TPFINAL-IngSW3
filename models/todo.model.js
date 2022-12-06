module.exports = mongoose => {
    const ToDo = mongoose.model(
      "ToDo",
      mongoose.Schema(
        {
          title: String,
          body: String,
        },
        { timestamps: true }
      )
    );
  
    return ToDo;
  };