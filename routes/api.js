const express = require("express");
const router = express.Router();
const News = require("../models/news");
const defaultSort = -1;
/* GET home page. */
router.get("/", (req, res) => {
  console.log(req.query);
  const search = req.query.search || "";
  const sort = req.query.sort || -1;
  if (sort !== -1 || sort !== 1) {
    defaultSort = -1;
  }

  const findNews = News.find({ title: RegExp(search.trim(), "i") }).sort({
    created: -1,
  });

  findNews.exec((err, data) => {
    res.json(data);
  });
});

module.exports = router;
