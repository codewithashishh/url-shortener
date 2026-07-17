const express = require("express");
const router = express.Router();


router.post("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send("Could not logout");
        }

        return res.redirect("/user/login");
    });
});

module.exports= router;