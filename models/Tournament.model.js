const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const tournamentSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title required"],
    },
    description: String,
    prize: String,
    participants: String,
    game: {
      type: Schema.Types.ObjectId,
      ref: "Game",
    },

    dateTime: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Tournament", tournamentSchema);
