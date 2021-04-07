const { DataTypes } = require("sequelize");
const db = require("../db");

const Project = db.define("project", {
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

module.exports = Project;