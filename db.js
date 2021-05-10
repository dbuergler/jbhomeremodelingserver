const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectedUnauthorized: false,
        }
    }
});

sequelize.authenticate().then(
    function() {
        console.log("Connected to jbhomeremodeling postgres database");
    },
    function(err){
        console.log(err);
    }
);

const User = sequelize.import('./models/user');
const Project = sequelize.import('./models/project')
const Payment = sequelize.import('./models/payment')
const Calendar = sequelize.import('./models/calendar')


User.hasMany(Calendar);
Calendar.belongsTo(User)

User.hasMany(Payment);
Payment.belongsTo(User)

User.hasMany(Project);
Project.belongsTo(User)

module.exports = sequelize;