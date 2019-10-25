const express = require("express");
const router = express.Router();
const conn = require("../../config/db");

router.get("/:page/:prix_min/:prix_max/:type/:ville", async (req, res) => {
  var page = req.params.page;
  var prixMax = req.params.prix_max;
  var prixMin = req.params.prix_min;
  var type = req.params.type;
  var ville = req.params.ville;
  var max = page * 9;
  var query;

  if (type === "5") type = "";
  else type = " type=" + type + " AND ";
  if (ville === "none") ville = "";
  else ville = ' ville="' + ville + '" AND ';
  query =
    "SELECT * FROM `articles` WHERE" +
    type +
    ville +
    " articles.prix BETWEEN " +
    prixMin +
    " AND " +
    prixMax +
    " limit " +
    max +
    ";";
  console.log(query);
  conn.query(query, (err, articles) => {
    if (err) res.send(err);
    else {
      res.send(articles);
    }
  });
});

module.exports = router;
