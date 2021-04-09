module.exports = (sequelize, DataTypes) => {
    const Payment = (sequelize.define("payment", {
        projectid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
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