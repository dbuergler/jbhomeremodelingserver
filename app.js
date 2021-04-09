require("dotenv").config();
let express = require('express');
let app = express();
let sequelize = require('./db');

let project = require('./controllers/projectcontroller');
let calendar = require('./controllers/calendarcontroller');
let payment = require('./controllers/paymentcontroller');
let user = require('./controllers/usercontroller');


sequelize.sync();

app.use(require('./middleware/headers'))

app.use(express.json());

app.use("/project", project);
app.use("/calendar", calendar);
app.use("/payment", payment);
app.use("/user", user);


app.listen(3000, function (){
    console.log("App is listening on port 3000");
});
