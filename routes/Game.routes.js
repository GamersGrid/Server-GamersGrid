const router = require("express").Router();
const mongoose = require("mongoose");

const Tournament = require("../models/Tournament.model");
const Game = require("../models/Game.model");



router.post("/games/create", (req, res, next) => {
    const { title, type, image } = req.body;

    const newGame = { 
        title, 
        type,
        image,
    }

     Game.create(newGame)
        .then((response) => res.json(response))
            .catch(err => {
            console.log("Error creating new task...", err);
            res.status(500).json({
                message: "Error creating a new task",
                error: err
            });})
    })
        



router.get('/games', (req, res, next) => {
    Game.find()
        
        .then(allGames => res.json(allGames))
        .catch(err => {
            console.log("Error getting list of games...", err);
            res.status(500).json({
                message: "Error getting list of games",
                error: err
            });
        });
});


router.get('/games/:gameId', (req, res, next) => {
    const { gameId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(gameId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }

    
    Game.findById(gameId)
        .then(game => res.json(game))
        .catch(err => {
            console.log("...", err);
            res.status(500).json({
                message: "Error getting game details",
                error: err
            });
        });
});

router.put('/games/:gameId', (req, res, next) => {
    const { gameId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(gameId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }
    
    const newDetails = {
        title: req.body.title,
        image: req.body.image,
    }

    Game.findByIdAndUpdate(gameId, newDetails, { new: true })
        .then((updatedTask) => res.json(updatedTask))
        .catch(err => {
            console.log("Error updating game", err);
            res.status(500).json({
                message: "Error updating game",
                error: err
            });
        })
});

router.delete('/games/:gameId', (req, res, next) => {
    const { gameId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(gameId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }

    Game.findByIdAndRemove(gameId)
        .then(() => res.json({ message: `Project with ${gameId} is removed successfully.` }))
        .catch(err => {
            console.log("error deleting game", err);
            res.status(500).json({
                message: "error deleting game",
                error: err
            });
        })
});

module.exports = router;
