const { DataTypes } = require("sequelize");
const db = require("../db");

const Project = db.define("project", {
projectid: {
    type: DataTypes.NUMBER,
    allowNull: false,
    unique: true,
},
ownerid: {
    type: DataTypes.INTEGER,
    allowNull: false,
},
duration: {
    type: DataTypes.STRING,
    allowNull: false,
},
});

module.exports = Project;