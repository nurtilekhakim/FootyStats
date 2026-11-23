
const express = require('express');
const router = express.Router();

const footballController = require('../controllers/footballController');
const validateTeamId = require('../middleware/validateTeamId');

// List of teams
router.get('/teams', footballController.showTeams);

// Team details
router.get('/team/:id', validateTeamId, footballController.showTeamDetails);

// Team players
router.get('/team/:id/players', validateTeamId, footballController.showPlayers);

// Recent matches
router.get('/team/:id/matches', validateTeamId, footballController.showMatches);

module.exports = router;
