const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const tournamentSchema = new Schema({
    title: String,
    description: String, 
});

module.exports = model('Tournament', tournamentSchema);
