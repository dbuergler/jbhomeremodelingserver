const { DataTypes } = require("sequelize");
const db = require("../db");

const Calendar = db.define("calendar", {
    projectid: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: true,
    },
    ownerid: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    });
    
    module.exports = Calendar;