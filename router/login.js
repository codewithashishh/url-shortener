const express = require("express");
const router = express.Router();

const {handleUserLogin} = require("../comtroller/login")

router.post("/login",handleUserLogin )

router.get("/login", (req, res) => {

  console.log("hehe")
    return res.render("login");
});

module.exports= router;