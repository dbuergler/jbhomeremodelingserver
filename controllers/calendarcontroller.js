const router = require('express').Router();
const Calendar = require('../db').import('../models/calendar');
let validateSession = require('../middleware/validate-session');


router.post('/create', validateSession, (req, res) => {
    const calendarEntry= {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        projectName: req.body.projectName,
        description: req.body.description,
        location: req.body.location,
        date: req.body.date,
        userId: req.user.id
    }
    Calendar.create(calendarEntry)
    .then(calendar => res.status(200).json(calendar))
    .catch(err => res.status(500).json({error: err}))
})










module.exports = router;