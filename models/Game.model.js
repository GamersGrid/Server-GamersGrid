const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const gameSchema = new Schema({
  title: String,
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
    image: String,
  },
});

module.exports = model("Game", gameSchema);
