module.exports = (sequelize, DataTypes) => {
    const Payment = (sequelize.define("payment", {
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
        dateofpayment: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }));
        return Payment;
}