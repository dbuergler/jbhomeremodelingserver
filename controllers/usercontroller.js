const router = require('express').Router();
const { User } = require('../models');
const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs');

router.post('/create', function(req, res) {

    User.create({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 13),
        role: req.body.role 
    })
    .then(
        function createSuccess(user) {
            let token = jwt.sign({id: user.id, username: user.username}, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24});
            
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
            bcrypt.compare(req.body.password, user.passwordhash, function (
            err,
            matches
            ) {
            if (matches) {
                let token = jwt.sign(
                { id: user.id, username: user.username },
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
    


module.exports = router;