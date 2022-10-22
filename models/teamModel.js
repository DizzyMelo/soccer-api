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
        enum:{values: ['Premier League', 'LaLiga', 'Bundesliga', 'League 1', 'Liga NOS', 'Serie A', 'Brasileirao'], message: 'Invalid league'},
    },
}, { versionKey: false });

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;