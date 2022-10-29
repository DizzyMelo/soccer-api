const Player = require('../models/playerModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.createPlayer = catchAsync(async (req, res, next) => {

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
});

exports.getPlayers = catchAsync(async (req, res, next) => {
    const players = await Player.find().populate('team')

    res.status(200).json({
        status: 'success',
        results: players.length,
        players
    });
});


exports.getPlayer = catchAsync(async (req, res, next) => {
    const player = await Player.findById(req.params.id)
    
    if (!player) {
        return next(new AppError('Player not found!', 404));
    }
    
    res.status(200).json({
        player
    });
});

exports.updatePlayer = catchAsync(async (req, res, next) => {
    
    const playerToUpdate = {
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "birthDate": req.body.birthDate,
        "team": req.body.team,
        "isHealthy": req.body.isHealthy,
        "bestFoot": req.body.bestFoot,
        "position": req.body.position
    };
    const player = await Player.findByIdAndUpdate(req.params.id, playerToUpdate, {new: true, runValidators: true})

    if (!player) {
        return next(new AppError('Player not found!', 404));
    }

    res.status(204).json({});
});

exports.deletePlayer = catchAsync(async (req, res, next) => {
    const player = await Player.findByIdAndDelete(req.params.id)

    if (!player) {
        return next(new AppError('Player not found', 404));
    }

    res.status(200).json({
        message: 'Player deleted!',
        player
    });
});