var express = require('express');
const queries = require("../db/queries");

var router = express.Router();

router.get("/my-history", function (req, res, next) {
  try {
    let my_id = req.loggedId;
    queries
        .getMyHistory(my_id)
        .then((qres) => {
      res.json(qres);
    });
  } catch (error) {
      console.log('err',error);
    res.status(500).json(error);
  }
});


router.post("/quizz-answer", function (req, res, next) {
  try {
    let quizz_answer = req.body;
    quizz_answer.user_id = req.loggedId;
    console.log('QUIZZ ANSWER ',quizz_answer);
    queries
        .setAnswer(quizz_answer)
        .then((qres) => {
          res.json(qres);
        });
  } catch (error) {
      console.log('err',error);
    res.status(500).json(error);
  }
});


module.exports = router;
