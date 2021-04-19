const router = require('express').Router();
const User = require('../db').import('../models/user');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const validateSession = require('../middleware/validate-session');
const validateAdmin = require('../middleware/validate-admin');

router.post('/create', function(req, res) {

    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 13),
        role: req.body.role
    })
    .then(
        function createSuccess(user) {
            let token = jwt.sign({id: user.id, firstName: user.firstName, lastName: user.lastName, username: user.username}, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24});
            
            res.json({
                user: user,
                message: 'User successfully created!',
                sessionToken: token,
            });
        }
    )

    .catch(err => res.status(500).json({error: err}))
});

router.post('/login', function (req, res) {
    User.findOne({
        where: {
            username: req.body.username,
        },
    })
    .then(function loginSuccess(user){
        if (user) {
            bcrypt.compare(req.body.password, user.password, function (
            err,
            matches
            ) {
            if (matches) {
                let token = jwt.sign(
                { id: user.id, firstName: user.firstName, lastName: user.lastName, username: user.username },
                process.env.JWT_SECRET,
                {
                    expiresIn: 60 * 60 * 24,
                }
                );
                res.status(200).json({
                user: user,
                message: "User Successfully Logged in!",
                sessionToken: token,
                });
            } else {
                res.status(502).send({ error: "Login Failed" });
            }
            });
        } else {
            res.status(500).json({ error: "User does not exist" });
        }
        })
        .catch((err) => res.status(500).json({ error: err }));
});

//*Get All users*//
router.get("/", validateSession, validateAdmin, (req, res) => {
    User.findAll()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json({error: err}))
});

//*GET ENTRIES BY USER*//
router.get('/:id', validateSession, validateAdmin, (req, res) => {
    let userid = req.user.id
    User.findAll({
        where: { userId: userid},
        includes: "User"
    })
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json({error: err}))
});

router.put('/update/:id', validateSession, function (req, res) {
    const updateUserEntry = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 13),
        role: req.body.role
    };

    const query = { where: { id: req.params.id}};

    User.update(updateUserEntry, query)
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json({error: err}))
});
    
//*Admin can only remove users*//
router.delete("/delete/:id", validateSession, validateAdmin, function (req, res){
    const query = { where: { id: req.params.id}};

    User.destroy(query)
    .then(() => res.status(200).json({ message: "User has been removed"}))
    .catch(err => res.status(500).json({error: err}))
});

module.exports = router;