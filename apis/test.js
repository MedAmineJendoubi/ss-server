const express = require("express");
const router = express.Router();
const queries = require("../db/queries");

router.get('/',function(req, res, next) {
    res.json({ title: 'Express' });
  })


module.exports = router;
