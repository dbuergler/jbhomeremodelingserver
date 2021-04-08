module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
            FirstName: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            LastName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            role: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        });
        return User;
};

