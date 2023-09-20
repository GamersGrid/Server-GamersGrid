const router = require("express").Router();

const mongoose = require("mongoose");

const Tournament = require("../models/Tournament.model");
const Game = require("../models/Game.model");

router.post("/tournament", (req, res, next) => {
  const { title, description, format, participants, game, timezone, date, rules } =
    req.body;

  const newTournament = {
    title,
    description,
    format,
    participants,
    game,
    timezone,
    date,
    rules,
  };

  Tournament.create(newTournament)
    .then((response) => res.json(response))
    .catch((err) => {
      console.log("Error creating new Tournament...", err);
      res.status(500).json({
        message: "Error creating a new Tournament",
        error: err,
      });
    });
});

router.get("/tournament", (req, res, next) => {
  Tournament.find()
    .populate("game")
    .then((allTournaments) => res.json(allTournaments))
    .catch((err) => {
      console.log("Error getting list of Tournaments...", err);
      res.status(500).json({
        message: "Error getting list of Tournaments",
        error: err,
      });
    });
});

router.get("/tournament/:tournamentId", (req, res, next) => {
  const { tournamentId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(tournamentId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Tournament.findById(tournamentId)
    .populate("game")
    .then((tournament) => res.json(tournament))
    .catch((err) => {
      console.log("...", err);
      res.status(500).json({
        message: "Error getting tournament details",
        error: err,
      });
    });
});

router.put("/tournament/:tournamentId", (req, res, next) => {
  const { tournamentId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(tournamentId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  const newDetails = {
    title: req.body.title,
    description: req.body.description,
    participants: req.body.participants,
    game: req.body.game,
    timezone: req.body.timezone,
    date: req.body.date,
    rules: req.body.rules,
  };

  Tournament.findByIdAndUpdate(tournamentId, newDetails, { new: true })
    .then((updatedTournament) => res.json(updatedTournament))
    .catch((err) => {
      console.log("Error updating tournament", err);
      res.status(500).json({
        message: "Error updating tournament",
        error: err,
      });
    });
});

router.delete("/tournament/:tournamentId", (req, res, next) => {
  const { tournamentId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(tournamentId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Tournament.findByIdAndRemove(tournamentId)
    .then(() =>
      res.json({
        message: `Tournament with ${tournamentId} is removed successfully.`,
      })
    )
    .catch((err) => {
      console.log("error deleting tournament", err);
      res.status(500).json({
        message: "error deleting tournament",
        error: err,
      });
    });
});

module.exports = router;