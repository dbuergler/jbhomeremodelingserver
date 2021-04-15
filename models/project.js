module.exports = (sequelize, DataTypes) => {
    const Project = (sequelize.define("project", {
    duration: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    projectId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    }));
    return Project; 
}

