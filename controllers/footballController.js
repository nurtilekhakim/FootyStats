

const footballService = require('../services/footballService');

// Show teams by league
async function showTeams(req, res, next) {
    try {
        const league = req.query.league;

        const allowedLeagues = [
            'English Premier League',
            'Spanish La Liga',
            'German Bundesliga'
        ];

        if (!allowedLeagues.includes(league)) {
            return res.status(400).send('Invalid league selected.');
        }

        const teams = await footballService.getTeamsByLeague(league);

        teams.sort((a, b) =>
            a.strTeam.localeCompare(b.strTeam)
        );

        res.render('teams', { teams, league });

    } catch (error) {
        next(error);
    }
}

// Show team details
async function showTeamDetails(req, res, next) {
    try {
        const teamId = req.params.id;

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

// Show team players
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

        res.render('players', {
            team,
            players: Array.isArray(players) ? players : []
        });

    } catch (error) {
        next(error);
    }
}

// Show recent matches
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

        res.render('matches', {
            team,
            matches: Array.isArray(matches) ? matches : []
        });

    } catch (error) {
        next(error);
    }
}

// Search teams using POST request
async function searchTeam(req, res, next) {
    try {
        const teamName = req.body?.teamName;

        // Validate search input
        if (
            typeof teamName !== 'string' ||
            teamName.trim().length < 2 ||
            teamName.trim().length > 100
        ) {
            return res.status(400).send('Invalid team name.');
        }

        const searchQuery = teamName.trim();

        console.log('SEARCH QUERY:', searchQuery);

        // Request data from API
        const apiResults = await footballService.searchTeamsByName(
            searchQuery
        );

        // Always provide an array to EJS
        const teams = Array.isArray(apiResults)
            ? apiResults
            : [];

        console.log('TEAMS FOUND:', teams.length);

        // Render search results
        return res.render('searchResults', {
    title: 'Search Results',
    teams,
    searchQuery
});
    } catch (error) {
        console.error('SEARCH ERROR:', error.message);
        next(error);
    }
}

module.exports = {
    showTeams,
    showTeamDetails,
    showPlayers,
    showMatches,
    searchTeam
};
