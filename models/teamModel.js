const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'The team name is required']
    },
    dateCreated: {
        type: Date,
        required: [true, 'The date the team was created is required']
    },
    league: {
        type: String,
        default: 'Premier League',
        enum: ['Premier League', 'LaLiga', 'Bundesliga', 'League 1', 'Liga NOS', 'Serie A'],
    },
}, { versionKey: false });

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;