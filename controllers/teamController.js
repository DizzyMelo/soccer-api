const Team = require('../models/teamModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.createTeam = async (req, res, next) => {

    const teamToCreate = new Team({
        "name": req.body.name,
        "dateCreated": req.body.dateCreated,
        "league": req.body.league
    });

    teamToCreate.save().then(team => {
        res.status(201).json({
            team
        });
    }).catch(err => {
        return next(err);
    });
};

exports.getTeams = catchAsync(async (req, res, next) => {
    const teams = await Team.find()

    res.status(200).json({
        results: teams.length,
        teams
    });
});

exports.getTeam = catchAsync(async (req, res, next) => {
    const team = await Team.findById(req.params.id)
    
    if (!team) {
        return next(new AppError('Team not found!', 404));
    }
    
    res.status(200).json({
        team
    });
});

exports.updateTeam = async (req, res, next) => {
    const teamToUpdate = {
        "name": req.body.name,
        "dateCreated": req.body.dateCreated,
        "league": req.body.league
    };
    
    Team.findByIdAndUpdate(req.params.id, teamToUpdate, {new: true, runValidators: true}).then(team => {
        res.status(204).json({});
    }).catch(err => {
        return next(err);
        // return next(new AppError('Team not found!', 404));
    });
};

exports.deleteTeam = catchAsync(async (req, res, next) => {
    const team = await Team.findByIdAndDelete(req.params.id)

    if (!team) {
        return next(new AppError('Team not found', 404));
    }

    res.status(200).json({
        message: 'Team deleted!',
        team
    });
});