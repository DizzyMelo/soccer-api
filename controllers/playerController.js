const Player = require('../models/playerModel');

exports.createPlayer = async (req, res, next) => {

    const playerToCreate = {
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "birthDate": req.body.birthDate,
        "team": req.body.team,
        "isHealthy": req.body.isHealthy,
        "bestFoot": req.body.bestFoot,
        "position": req.body.position
    };
    const player = await Player.create(playerToCreate);
    res.status(201).json({
        status: 'success',
        player
    });
}

exports.getPlayers = async (req, res, next) => {
    const players = await Player.find().populate('team')

    res.status(200).json({
        status: 'success',
        results: players.length,
        players
    });
}