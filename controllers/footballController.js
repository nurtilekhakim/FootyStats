
const footballService = require('../services/footballService');

async function showTeams(req, res, next) {
    try {
        const league = req.query.league;

        // Validate user input
        const allowedLeagues = [
            'English Premier League',
            'Spanish La Liga',
            'German Bundesliga'
        ];

        if (!allowedLeagues.includes(league)) {
            return res.status(400).send('Invalid league selected.');
        }

        // Request teams from the API
        const teams = await footballService.getTeamsByLeague(league);

        // Sort teams alphabetically
        teams.sort((a, b) =>
            a.strTeam.localeCompare(b.strTeam)
        );

        res.render('teams', { teams, league });

    } catch (error) {
        next(error);
    }
}


async function showTeamDetails(req, res, next) {
    try {
        const teamId = req.params.id;

        // Validate team ID
        if (!/^\d+$/.test(teamId)) {
            return res.status(400).send('Invalid team ID.');
        }

        const team = await footballService.getTeamById(teamId);

        if (!team) {
            return res.status(404).send('Team not found.');
        }

        res.render('teamDetails', { team });

    } catch (error) {
        next(error);
    }
}


async function showPlayers(req, res, next) {
    try {
        const teamId = req.params.id;

        if (!/^\d+$/.test(teamId)) {
            return res.status(400).send('Invalid team ID.');
        }

        const team = await footballService.getTeamById(teamId);

        if (!team) {
            return res.status(404).send('Team not found.');
        }

        const players = await footballService.getPlayersByTeam(teamId);

        res.render('players', { team, players });

    } catch (error) {
        next(error);
    }
}


async function showMatches(req, res, next) {
    try {
        const teamId = req.params.id;

        if (!/^\d+$/.test(teamId)) {
            return res.status(400).send('Invalid team ID.');
        }

        const team = await footballService.getTeamById(teamId);

        if (!team) {
            return res.status(404).send('Team not found.');
        }

        const matches = await footballService.getLastMatches(teamId);

        res.render('matches', { team, matches });

    } catch (error) {
        next(error);
    }
}


module.exports = {
    showTeams,
    showTeamDetails,
    showPlayers,
    showMatches
};