const express = require("express");
const app = express();
const port = 8000;
const connectDb = require("./connection")
const router = require("./router/index")
const path = require("path")
const URL = require("./models/model");
const staticRouter = require("./router/static");



app.use(express.json()) // convert the json req into js object and stored it inside req.body
app.use(express.urlencoded({extended:false})) // convert the html data into js obj and stored it inside req.body

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/", staticRouter);


connectDb("mongodb://127.0.0.1:27017/url-shortener");
app.use("/", router)
app.listen(port, ()=>{
  console.log(`Server Started on port ${port}`)
})