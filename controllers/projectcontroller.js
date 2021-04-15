const router = require('express').Router();
const Project = require('../db').import('../models/project');
const validateAdmin = require('../middleware/validate-admin');
let validateSession = require('../middleware/validate-session');

router.post('/create', validateSession, (req, res) => {
    const projectEntry= {
        duration: req.body.duration,
        projectId: req.body.projectId,
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

router.put('/:id', validateSession, validateAdmin, function (req, res) {
    const updateprojectEntry = {
        duration: req.body.duration,
        projectId: req.body.projectId,
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