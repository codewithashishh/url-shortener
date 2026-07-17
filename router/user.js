const express = require("express");
const router = express.Router();

const {handleUserSignUp} = require("../comtroller/user")

router.post("/signup",handleUserSignUp )

router.get("/signup",(req,res)=>{
    return res.render("signup")
})

module.exports= router;