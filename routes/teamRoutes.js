const express = require('express');
const teamController = require('../controllers/teamController');
const { createTeamValidation } = require('../utils/validator');

const router = express.Router();

router.route('/').get(teamController.getTeams).post(createTeamValidation, teamController.createTeam);

router
  .route('/:id')
  .get(teamController.getTeam)
  .put(teamController.updateTeam)
  .delete(teamController.deleteTeam);

module.exports = router;