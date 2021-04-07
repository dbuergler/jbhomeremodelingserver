const { DataTypes } = require("sequelize");
const db = require("../db");

const Payment = db.define("payment", {
    username: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    });
    
    module.exports = Payment;