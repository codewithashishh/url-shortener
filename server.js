const express = require("express");
const app = express();
const port = 8000;
const connectDb = require("./connection")
const session = require("express-session");
const path = require("path")
const URL = require("./models/model");

const staticRouter = require("./router/static");
const router = require("./router/index");
const userRoute = require("./router/user");
const loginRoute = require("./router/login");
const logoutRoute = require("./router/logout");

//middleware
app.use(express.json()) // convert the json req into js object and stored it inside req.body
app.use(express.urlencoded({extended:false})) // convert the html data into js obj and stored it inside req.body
app.use(
    session({
        secret: "mySecret123",
        resave: false,
        saveUninitialized: false,
    })
);


app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));




connectDb("mongodb://127.0.0.1:27017/url-shortener");

app.use("/user", userRoute);
app.use("/", staticRouter);
app.use("/", router)
app.use("/user", loginRoute)
app.use("/user", logoutRoute)


app.listen(port, ()=>{
  console.log(`Server Started on port ${port}`)
})