const Player = require('../models/playerModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

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
    Player.create(playerToCreate).then(player => {
        res.status(201).json({
            status: 'success',
            player
        });
    }).catch(err => next(err));
};

exports.getPlayers = catchAsync(async (req, res, next) => {
    const players = await Player.find();

    res.status(200).json({
        status: 'success',
        results: players.length,
        players
    });
});


exports.getPlayer = catchAsync(async (req, res, next) => {
    const player = await Player.findById(req.params.id).populate('team');
    
    if (!player) {
        return next(new AppError('Player not found!', 404));
    }
    
    res.status(200).json({
        player
    });
});

exports.updatePlayer = async (req, res, next) => {
    
    const playerToUpdate = {
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "birthDate": req.body.birthDate,
        "team": req.body.team,
        "isHealthy": req.body.isHealthy,
        "bestFoot": req.body.bestFoot,
        "position": req.body.position
    };

    Player.findByIdAndUpdate(req.params.id, playerToUpdate, {new: true, runValidators: true}).then(player => {
        res.status(204).json({});
    }).catch(err => {
        return next(err)
    });
};

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