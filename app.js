require("dotenv").config();
let express = require('express');
let app = express();
let sequelize = require('./db');

const middlewares = require("./middleware");
const controllers = require("./controllers");


sequelize.sync();
app.use(require('./middleware/cors'))

app.use(express.json());

app.use("/user", controllers.User);
app.use("/project", controllers.Project);
app.use("/calendar", controllers.Calendar);
app.use("/payment", controllers.Payment);


app.listen(3000, function (){
    console.log("App is listening on port 3000");
});
