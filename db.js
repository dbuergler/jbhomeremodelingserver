const Sequelize = require('sequelize');

const sequelize = new Sequelize("jbhomeremodeling", "postgres", "password", {
    host: "localhost",
    dialect: "postgres"
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
//const Project = sequelize.import('./models/project')
// const Payment = sequelize.import('./models/payment')
const Calendar = sequelize.import('./models/calendar')


User.hasMany(Calendar);
Calendar.belongsTo(User)



module.exports = sequelize;