const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const gameSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title required"],
  },
  type: {
    type: String,
    enum: [
      "Fighting Games",
      "Racing Games",
      "Sports Games",
      "Digital Card Games",
      "Real-Time Strategy",
      "First-Person Shooter",
      "Third-Person Shooter",
      "Multiplayer Online Battle Arena",
      "Battle-Royale",
    ],
    required: [true, "Type required"]
    
  },
  image: String,
});

module.exports = model("Game", gameSchema);
