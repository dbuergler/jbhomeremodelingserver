const { DataTypes } = require("sequelize");
const db = require("../db");

const Payment = db.define("payment", {
    projectid: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: true,
    },
    dateofpayment: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    });
    
    module.exports = Payment;