require("dotenv").config();
const Express = require("express");
const db = require("./db");

const app = Express();


const middlewares = require("./middleware");


const controllers = require("./controllers");


app.use(Express.json());

app.use("/user", controllers.User);
app.use("/project", controllers.Project);
app.use("/calendar", controllers.Calendar);
app.use("/payment", controllers.Payment);

db.authenticate()
.then(() => db.sync())
.then(() =>
    app.listen(3000, () => {
    console.log(`[server]: App is listening on localhost:3000`);
    })
)
.catch((e) => {
    console.log("[server]: Server Crashed");
    console.log(e);
});