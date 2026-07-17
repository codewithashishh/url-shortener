const express = require("express");

const router = express.Router();

const{
  takeUrls,
  getUrlById
} = require("../comtroller/url")

router.post("/", takeUrls);
router.get("/:shortId", getUrlById);

module.exports = router;