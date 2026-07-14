const mongoose = require("mongoose");

const connectDb = function mongoDbconnection(url){
 mongoose.connect(url)
.then(()=> console.log("Database connected"))
.catch((err)=> console.log("There is an error", err))

console.log(url)}


module.exports = connectDb;