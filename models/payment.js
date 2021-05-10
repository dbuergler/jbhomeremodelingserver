module.exports = (sequelize, DataTypes) => {
    const Payment = (sequelize.define("payment", {
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        zipcode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        amount: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }));
        return Payment;
}