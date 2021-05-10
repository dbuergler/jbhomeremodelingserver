const router = require('express').Router();
const Payment = require('../db').import('../models/payment');
const validateAdmin = require('../middleware/validate-admin');
let validateSession = require('../middleware/validate-session');

router.post('/create', validateSession, (req, res) => {
    const paymentEntry= {
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        name: req.body.name,
        amount: req.body.amount,
        userId: req.user.id,
    }
    Payment.create(paymentEntry)
    .then(payment => res.status(200).json(payment))
    .catch(err => res.status(500).json({error: err}))
})

router.get("/", (req, res) => {
    Payment.findAll()
    .then(payments => res.status(200).json(payments))
    .catch(err => res.status(500).json({error: err}))
});


router.get('/:id', validateSession, (req, res) => {
    let userid = req.user.id
    Payment.findAll({
        where: { userId: userid}
    })
    .then(payments => res.status(200).json(payments))
    .catch(err => res.status(500).json({error: err}))
});

router.put('/:id', validateSession, function (req, res) {
    const updatepaymentEntry = {
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        name: req.body.name,
        amount: req.body.amount,
        userId: req.user.id,
    };

    const query = { where: { id: req.params.id, userId: req.user.id}};

    Payment.update(updatepaymentEntry, query)
    .then(payments => res.status(200).json(payments))
    .catch(err => res.status(500).json({error: err}))
});

router.delete("/:id", validateSession, validateAdmin, function (req, res){
    const query = { where: { id: req.params.id, userId: req.user.id}};

    Payment.destroy(query)
    .then(() => res.status(200).json({ message: "Payment Entry Removed"}))
    .catch(err => res.status(500).json({error: err}))
});






module.exports = router;