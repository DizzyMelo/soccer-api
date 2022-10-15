const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'The first name is required']
    },
    lastName: {
        type: String,
        required: [true, 'The last name is required']
    },
    birthDate: {
        type: Date,
        required: [true, 'The birth date is required']
    },
    isHealthy: {
        type: Boolean,
        default: true
    },
    team: {
        type: mongoose.Schema.ObjectId,
        ref: 'Team'
    },
    bestFoot: {
        type: String,
        default: 'right',
        enum: ['right', 'left', 'both', 'none'],
    },
    position: {
        type: String,
        default: 'CM',
        enum: ['GK', 'CB', 'LB', 'RB', 'LWB', 'RWB', 'SW', 'DM', 'CM', 'AM', 'LM', 'RM', 'CF', 'S', 'SS'],
    },
}, { versionKey: false });

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;