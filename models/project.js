module.exports = (sequelize, DataTypes) => {
    const Project = (sequelize.define("project", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        projectName: {
            type: DataTypes.STRING,
            allowNull: false,
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
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        duration: {
        type: DataTypes.STRING,
        allowNull: false,
        },
    }));
    return Project; 
}

