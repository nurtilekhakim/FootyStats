
function validateTeamId(req, res, next) {
    const teamId = req.params.id;

    if (!/^\d+$/.test(teamId)) {
        return res.status(400).render('error', {
            status: 400,
            message: 'Invalid Team ID'
        });
    }

    next();
}

module.exports = validateTeamId;
