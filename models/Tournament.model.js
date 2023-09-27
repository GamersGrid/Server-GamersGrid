const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const tournamentSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title required"],
  },
  description: String,
  prize: String,
  category: {
    type: String,
    enum: ["single elimination", "double elimination", "triple elimination"],
  },
  participants: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  game: {
    type: Schema.Types.ObjectId,
    ref: "Game",
  },

  dateTime: {
    $gte: ISODate("2023-09-27T00:00:00Z"),
  },
});

module.exports = model("Tournament", tournamentSchema);
