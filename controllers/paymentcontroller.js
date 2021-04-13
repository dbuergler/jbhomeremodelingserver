const router = require('express').Router();
const Payment = require('../db').import('../models/payment');
let validateSession = require('../middleware/validate-session');

router.post('/create', validateSession, (req, res) => {
    const paymentEntry= {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        projectName: req.body.projectName,
        amount: req.body.amount,
        dateofpayment: req.body.dateofpayment,
        userId: req.user.id
    }
    Payment.create(paymentEntry)
    .then(payment => res.status(200).json(payment))
    .catch(err => res.status(500).json({error: err}))
})


router.get('/Id', validateSession, (req, res) => {
    let userid = req.user.id
    Payment.findAll({
        where: { userId: userid}
    })
    .then(payments => res.status(200).json(payments))
    .catch(err => res.status(500).json({error: err}))
});

router.put('/update/Id', validateSession, function (req, res) {
    const updatepaymentEntry = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        projectName: req.body.projectName,
        amount: req.body.amount,
        dateofpayment: req.body.dateofpayment,
        userId: req.user.id
    };

    const query = { where: { id: req.params.userid, user: req.user.id}};

    Payment.update(updatepaymentEntry, query)
    .then(payments => res.status(200).json(payments))
    .catch(err => res.status(500).json({error: err}))
});

router.delete("/delete/:id", validateSession, function (req, res){
    const query = { where: { id: req.params.id, user: req.user.id}};

    Payment.destroy(query)
    .then(() => res.status(200).json({ message: "Payment Entry Removed"}))
    .catch(err => res.status(500).json({error: err}))
});






module.exports = router;