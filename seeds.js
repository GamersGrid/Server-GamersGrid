const mongoose = require('mongoose');
const Game = require('./models/Game.model');
require('dotenv').config(); // import and configure dotenv (loads environment variables from .env file)
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/project-management-server';
const games = [
    {
        title: "EA SPORTS FC 24",
        type: "Sports Games",
        image: "https://static-cdn.jtvnw.net/ttv-boxart/143106037_IGDB-285x380.jpg"
    },
    {
        title: "GTA V",
        type: "Third-Person Shooter",
        image: "https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-285x380.jpg"
    }, {
        title: "DOTA 2",
        type: "Multiplayer Online Battle Arena",
        image: "https://static-cdn.jtvnw.net/ttv-boxart/29595-285x380.jpg"
    }, {
        title: "League of Legends",
        type: "Multiplayer Online Battle Arena",
        image: "https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg"
    }, {
        title: "CSGO",
        type: "First-Person Shooter",
        image: "https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-285x380.jpg"
    }, {
        title: "CS2",
        type: "First-Person Shooter",
        image: "https://static-cdn.jtvnw.net/ttv-boxart/1890315333_IGDB-285x380.jpg"
    }, {
        title: "Street Fighter 6",
        type: "Fighting Games",
        image: "https://static-cdn.jtvnw.net/ttv-boxart/55453844_IGDB-285x380.jpg"
    }, {
        title: "Valorant",
        type: "Third-Person Shooter",
        image: "https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg"
    }, {
        title: "Apex",
        type: "Battle-Royale",
        image: "https://static-cdn.jtvnw.net/ttv-boxart/511224-285x380.jpg"
    }, {
        title: "Call of Duty",
        type: "First-Person Shooter",
        image: "https://static-cdn.jtvnw.net/ttv-boxart/512710-285x380.jpg"
    }, {
        title: "Call of Duty Warzone",
        type: "Battle-Royale",
        image: "https://static-cdn.jtvnw.net/ttv-boxart/512710-285x380.jpg"
    }, {
        title: "Escape from Tarkov",
        type: "First-Person Shooter",
        image: "https://static-cdn.jtvnw.net/ttv-boxart/491931_IGDB-285x380.jpg"
    }, {
        title: "NBA 2k24",
        type: "Sports Games",
        image: "https://static-cdn.jtvnw.net/ttv-boxart/623879571_IGDB-285x380.jpg"
    }, {
        title: "Rocket League",
        type: "Racing Games",
        image: "https://static-cdn.jtvnw.net/ttv-boxart/30921-285x380.jpg"
    }, {
        title: "Rainbow 6",
        type: "First-Person Shooter",
        image: "https://static-cdn.jtvnw.net/ttv-boxart/460630_IGDB-285x380.jpg"
    }, {
        title: "F1 23",
        type: "Racing Games",
        image: "https://static-cdn.jtvnw.net/ttv-boxart/174553474_IGDB-285x380.jpg"
    }, {
        title: "Fortnite",
        type: "Battle-Royale",
        image: "https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg"
    }
];
mongoose
    .connect(MONGO_URI)
    .then((x) => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
        return Game.deleteMany({}); //WARNING: this will delete all games in your DB !!
    })
    .then((response) => {
        console.log(response);
        return Game.insertMany(games);
    })
    .then(gamesFromDB => {
        console.log(`Created ${gamesFromDB.length} games`);
        // Once created, close the DB connection
        mongoose.connection.close();
    })
    .catch((err) => {
        console.error("Error connecting to DB: ", err);})