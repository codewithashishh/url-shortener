console.log("Router loaded");

const express = require("express");




const router = express.Router();

const{
  takeUrls,
  getUrlById
} = require("../comtroller/url")

router.post("/urls", takeUrls);
router.get("/:shortId", getUrlById);
router.get("/test", (req, res) => {
  res.send("Router works");
});

module.exports = router;