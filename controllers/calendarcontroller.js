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
        projectId: req.body.projectId,
        userId: req.user.id
    }
    Calendar.create(calendarEntry)
    .then(calendar => res.status(200).json(calendar))
    .catch(err => res.status(500).json({error: err}))
})

//*GET ALL ENTRIES*//
router.get("/", (req, res) => {
    Calendar.findAll()
    .then(calendars => res.status(200).json(calendars))
    .catch(err => res.status(500).json({error: err}))
});

//*GET ENTRIES BY USER*//
router.get('/:id', validateSession, (req, res) => {
    let userid = req.user.id
    Calendar.findAll({
        where: { userId: userid},
        includes: "User"
    })
    .then(calendars => res.status(200).json(calendars))
    .catch(err => res.status(500).json({error: err}))
});

router.put('/:id', validateSession, function (req, res) {
    const updatecalendarEntry = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        projectName: req.body.projectName,
        description: req.body.description,
        location: req.body.location,
        date: req.body.date,
        projectId: req.body.projectId,
        userId: req.user.id
    };

    const query = { where: { id: req.params.firstNameId, userId: req.user.id}};

    Calendar.update(updatecalendarEntry, query)
    .then(calendars => res.status(200).json(calendars))
    .catch(err => res.status(500).json({error: err}))
});

router.delete("/:id", validateSession, function (req, res){
    const query = { where: { id: req.params.id, userId: req.user.id}};

    Calendar.destroy(query)
    .then(() => res.status(200).json({ message: "Calendar Entry Removed"}))
    .catch(err => res.status(500).json({error: err}))
});





module.exports = router;