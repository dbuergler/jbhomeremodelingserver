const { Sequelize } = require('sequelize');

const db = new Sequelize('jbhomeremodeling', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = db;
