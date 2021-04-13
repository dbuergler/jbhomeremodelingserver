const router = require('express').Router();
const Project = require('../db').import('../models/project');
let validateSession = require('../middleware/validate-session');

router.post('/create', validateSession, (req, res) => {
    const projectEntry= {
        duration: req.body.duration,
        userId: req.user.id
    }
    Project.create(projectEntry)
    .then(project => res.status(200).json(project))
    .catch(err => res.status(500).json({error: err}))
})


router.get('/Id', validateSession, (req, res) => {
    let userid = req.user.id
    Project.findAll({
        where: { userId: userid}
    })
    .then(projects => res.status(200).json(projects))
    .catch(err => res.status(500).json({error: err}))
});

router.put('/update/Id', validateSession, function (req, res) {
    const updateprojectEntry = {
        duration: req.body.duration
    };

    const query = { where: { id: req.params.userid, user: req.user.id}};

    Project.update(updateprojectEntry, query)
    .then(projects=> res.status(200).json(projects))
    .catch(err => res.status(500).json({error: err}))
});

router.delete("/delete/:id", validateSession, function (req, res){
    const query = { where: { id: req.params.id, user: req.user.id}};

    project.destroy(query)
    .then(() => res.status(200).json({ message: "Project Entry Removed"}))
    .catch(err => res.status(500).json({error: err}))
});



module.exports = router;