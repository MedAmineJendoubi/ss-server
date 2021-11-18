var express = require('express');
const queries = require("../db/queries");

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  queries.getUsers()
    .then((result) => {
      res.json(result)  
    }).catch((err) => {
      console.log(err)
    });
});

module.exports = router;
