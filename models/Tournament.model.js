const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const tournamentSchema = new Schema({
    title: String,
    description: String,
    format:{ 
        type: String,
        enum:["Single-elimination"]
    },
    participants:{ 
        type: Number,
        min: 2,
        max: 64,
    },
    game: {
        type: Schema.Types.ObjectId,
        ref:"Game",
    },
    timezone:{ 
        type: String,

    },
    date: Date,
    rules: String,

    
});

module.exports = model('Tournament', tournamentSchema);
