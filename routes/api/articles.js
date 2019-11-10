const express = require("express");
const router = express.Router();
const conn = require("../../config/db");

router.get("/:page/:prix_min/:prix_max/:type/:ville/:poids/:quantite/:qualite/:livraison", async (req, res) => {
  var page = req.params.page;
  var prixMax = req.params.prix_max;
  var prixMin = req.params.prix_min;
  var type = req.params.type;
  var ville = req.params.ville;
  var poids = req.params.poids;
  var quantite = req.params.quantite;
  var qualite = req.params.qualite;
  var livraison = req.params.livraison;
  var max = page * 9;
  var query;

  if (type === "5") type = "";
  else type = " type=" + type + " AND ";
  if (poids === "none") poids = "";
  else poids = " poids=" + poids + " AND ";
  if (quantite === "none") quantite = "";
  else quantite = " quantite=" + quantite + " AND ";
  if (qualite === "none") qualite = "";
  else qualite = " qualite=" + qualite + " AND ";
  if (ville === "none") ville = "";
  else ville = ' ville="' + ville + '" AND ';
  if (livraison === "none") livraison = "";
  else livraison = ' livraison="' + livraison + '" AND ';
  query =
    "SELECT * FROM `articles` WHERE" +
    type +
    ville + poids + quantite + qualite + livraison +
    " articles.prix BETWEEN " +
    prixMin +
    " AND " +
    prixMax +
    " limit " +
    max +
    ";";
  conn.query(query, (err, articles) => {
    if (err) res.send(err);
    else {
      res.send(articles);
    }
  });
});

function findDechetsVille(ville) {
  return new Promise((resolve, reject) => {
     conn.query('SELECT * FROM `articles` WHERE ville= "'+ ville+'" limit 8' , (err, dechets) => {
        if (err) reject(err);
        else resolve(dechets);
      });
  });
}

function findDechetsType(type) {
  return new Promise((resolve, reject) => {
     conn.query('SELECT * FROM `articles` WHERE type='+ type+' limit 8' , (err, dechets) => {
        if (err) reject(err);
        else resolve(dechets);
      });
  });
}

function findDechetsUser(id) {
  return new Promise((resolve, reject) => {
     conn.query("SELECT * FROM `articles` WHERE user_id="+id+' limit 4' , (err, dechets) => {
        if (err) reject(err);
        else resolve(dechets);
      });
  });
}

function findUserDetails(id) {
  return new Promise((resolve, reject) => {
     conn.query("SELECT * FROM `users` WHERE id="+id , (err, user) => {
        if (err) reject(err);
        else resolve(user);
      });
  });
}

function findUsersVille(ville) {
  return new Promise((resolve, reject) => {
     conn.query('SELECT * FROM `users` WHERE ville= "'+ ville+'" limit 4' , (err, user) => {
        if (err) reject(err);
        else resolve(user);
      });
  });
}

router.get("/article/:id", async (req, res) => {
  var id = req.params.id;
  var result = {
    article:null,
    dechetsVille:null,
    dechetsType:null,
    dechetsUser:null,
    usersVille:null,
    userDetails:null
  }
  query ="SELECT * FROM `articles` WHERE id="+id;
  conn.query(query,async (err, articles) => {
    if (err) res.send(err);
    else {
      result.article = articles[0];
      result.dechetsVille = await findDechetsVille(articles[0].ville);
      result.dechetsType = await findDechetsType(articles[0].type);
      result.usersVille = await findUsersVille(articles[0].ville);
      result.userDetails = await findUserDetails(articles[0].user_id);
      result.dechetsUser = await findDechetsUser(articles[0].user_id);
      res.send(result);
    }
  });
});

router.get("/myarticle/:id/:page", async (req, res) => {
  var id = req.params.id;
  var page = req.params.page;
  var max = page * 4;
  query ="SELECT * FROM `articles` WHERE user_id="+id +" limit " +
  max +
  ";";;
  conn.query(query,async (err, articles) => {
    if (err) res.send(err);
    else {
      res.send(articles);
    }
  });
});

module.exports = router;
