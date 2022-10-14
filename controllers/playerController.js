const Player = require('../models/playerModel');

exports.createPlayer = async (req, res, next) => {
    const player = await Player.create(req.body);
    res.status(201).json({
        status: 'success',
        player
    });
}

exports.getPlayers = async (req, res, next) => {
    const players = await Player.find()

    res.status(200).json({
        status: 'success',
        results: players.length,
        players
    });
}