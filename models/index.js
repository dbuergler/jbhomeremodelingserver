const User = require("./user");
const Project = require("./project");
const Calendar = require("./calendar");
const Payment = require("./payment");

User.hasOne(Project);
Project.belongsTo(User);

User.hasMany(Project);
Project.belongsTo(User);

User.hasOne(Calendar);
Calendar.belongsTo(User);

User.hasMany(Calendar);
Calendar.belongsTo(User);

User.hasOne(Payment);
Payment.belongsTo(User);

User.hasMany(Payment);
Payment.belongsTo(User)

module.exports = {
User,
Project,
Calendar,
Payment
};