const validateAdmin = (req, res, next) => {
    if (req.user.role === 'Admin') {
        return next();
    } else {
        return res.status(500).send({message: "Access Denied: Must be an Admin to move forward!"});
    }
};

module.exports = validateAdmin;

//validateAdmin must come after validate-session