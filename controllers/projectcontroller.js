const router = require('express').Router();
const Project = require('../db').import('../models/project');
const validateAdmin = require('../middleware/validate-admin');
let validateSession = require('../middleware/validate-session');

router.post('/create', validateSession, (req, res) => {
    const projectEntry= {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        projectName: req.body.projectName,
        description: req.body.description,
        location: req.body.location,
        date: req.body.date,
        duration: req.body.duration,
        userId: req.user.id
    }
    Project.create(projectEntry)
    .then(project => res.status(200).json(project))
    .catch(err => res.status(500).json({error: err}))
})

router.get("/", validateSession, (req, res) => {
    Project.findAll()
    .then(payments => res.status(200).json(payments))
    .catch(err => res.status(500).json({error: err}))
});

router.get('/:id', validateSession, (req, res) => {
    let userid = req.user.id
    Project.findAll({
        where: { userId: userid}
    })
    .then(projects => res.status(200).json(projects))
    .catch(err => res.status(500).json({error: err}))
});

router.put('/:id', validateSession, function (req, res) {
    const updateprojectEntry = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        projectName: req.body.projectName,
        description: req.body.description,
        location: req.body.location,
        date: req.body.date,
        duration: req.body.duration,
        
    };

    const query = { where: { id: req.params.id, userId: req.user.id}};

    Project.update(updateprojectEntry, query)
    .then(projects=> res.status(200).json(projects))
    .catch(err => res.status(500).json({error: err}))
});

router.delete("/:id", validateSession, validateAdmin, function (req, res){
    const query = { where: { id: req.params.id, userId: req.user.id}};

    Project.destroy(query)
    .then(() => res.status(200).json({ message: "Project Entry Removed"}))
    .catch(err => res.status(500).json({error: err}))
});



module.exports = router;