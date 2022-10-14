const Team = require('../models/teamModel');

exports.createTeam = async (req, res, next) => {
    const team = await Team.create(req.body);
    res.status(201).json({
        status: 'success',
        team
    });
}

exports.getTeams = async (req, res, next) => {
    const teams = await Team.find()

    res.status(200).json({
        status: 'success',
        results: teams.length,
        teams
    });
}