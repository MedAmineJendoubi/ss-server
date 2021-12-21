var express = require('express');
const queries = require("../db/queries");

var router = express.Router();

/* GET users listing. */
router.get('/user', function(req, res, next) {
  if(req.params.loggedId){
  let loggedId = req.params.loggedId
  queries.getUsers()
    .then((result) => {
      res.json(result)  
    }).catch((err) => {
      console.log(err)
    });
  }
  else res.json({user:null})
});

module.exports = router;
