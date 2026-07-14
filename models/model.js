const mongoose = require("mongoose")

const urlSchema = new mongoose.Schema({
  originalUrl:{
    type: String,
    required:true,
  },

  shortId:{
     type: String,
    required:true,
  },

  noOfTimesClicked:{
   type: Number,
   default : 0,
  }
})

const url = mongoose.model("url", urlSchema);

module.exports = url;