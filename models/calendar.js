module.exports = (sequelize, DataTypes) => {
    const Calendar = (sequelize.define("calendar", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
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
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        }));
        return Calendar;
}
    
    