
const axios = require('axios');
const { getCache, setCache } = require('./cache');

const API_URL = 'https://www.thesportsdb.com/api/v1/json/123';

// Reusable API request with caching
async function fetchFromAPI(endpoint, params) {
    const cacheKey = `${endpoint}:${JSON.stringify(params)}`;

    const cachedData = getCache(cacheKey);

    if (cachedData !== null) {
        console.log('CACHE HIT:', cacheKey);
        return cachedData;
    }

    console.log('API REQUEST:', cacheKey);

    const response = await axios.get(
        `${API_URL}/${endpoint}`,
        {
            params,
            timeout: 10000
        }
    );

    const data = response.data;

    setCache(cacheKey, data);

    return data;
}

// Get teams by league
async function getTeamsByLeague(league) {
    const data = await fetchFromAPI(
        'search_all_teams.php',
        { l: league }
    );

    return data.teams || [];
}

// Get team details
async function getTeamById(teamId) {
    const data = await fetchFromAPI(
        'lookupteam.php',
        { id: teamId }
    );

    return data.teams?.[0] || null;
}

// Get players
async function getPlayersByTeam(teamId) {
    const data = await fetchFromAPI(
        'lookup_all_players.php',
        { id: teamId }
    );

    return data.player || [];
}

// Get recent matches
async function getLastMatches(teamId) {
    const data = await fetchFromAPI(
        'eventslast.php',
        { id: teamId }
    );

    return data.results || [];
}

// Search teams by name
async function searchTeamsByName(teamName) {
    const data = await fetchFromAPI(
        'searchteams.php',
        { t: teamName }
    );

    return data.teams || [];
}

module.exports = {
    getTeamsByLeague,
    getTeamById,
    getPlayersByTeam,
    getLastMatches,
    searchTeamsByName
};