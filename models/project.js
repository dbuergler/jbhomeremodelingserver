module.exports = (sequelize, DataTypes) => {
    const Project = (sequelize.define("project", {
    projectid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
    },
    duration: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    }));
    return Project; 
}

