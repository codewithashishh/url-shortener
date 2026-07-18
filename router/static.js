const {checkAuthentication} = require("../middleware/auth")
const express = require("express");
const router = express.Router();

const URL = require("../models/model");

router.get("/", checkAuthentication, async (req, res) => {
    const allUrls = await URL.find({
        createdBy: req.session.userId,
    });

    return res.render("home", {
        urls: allUrls,
    });
});





module.exports = router;