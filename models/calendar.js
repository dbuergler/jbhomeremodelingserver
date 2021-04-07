const { DataTypes } = require("sequelize");
const db = require("../db");

const Calendar = db.define("calendar", {
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
    
    module.exports = Calendar;