const router = require('express').Router();
const Project = require('../db').import('../models/project');
const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs');
let validateSession = require('../middleware/validate-session');













module.exports = router;