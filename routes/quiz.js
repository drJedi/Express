const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  res.render("Quiz", { title: "Quiz" });
});

module.exports = router;
