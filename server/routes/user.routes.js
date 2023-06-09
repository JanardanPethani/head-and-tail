const express = require("express");
const router = express.Router();

router.post("/login", function (req, res) {
  res.status(200);
});

module.exports = router;
