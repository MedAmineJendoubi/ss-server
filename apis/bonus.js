var express = require('express');
const queries = require("../db/queries");

var router = express.Router();

router.get('/', function(req, res, next) {
    res.json({'index':"index"})
});

router.post('/', async function(req,res,next){
    let bonus = req.body;
    
    queries.addBonus(bonus)
        .then(bonus=>{
            res.json(bonus[0])
        })
        .catch(err=>{
            next(err)
        })
})

router.post('/spent', async function(req,res,next){
    let bonus = req.body;
    
    queries.addBonusSpent(bonus)
        .then(bonus=>{
            res.json(bonus[0])
        })
        .catch(err=>{
            next(err)
        })
})

router.delete('/:id' , async function(req,res,next){
    let id = req.params.id;
    queries.deleteBonus(id)
    .then(bonus=>{
        res.json(bonus[0])
    })
    .catch(err=>{
        next(err)
    })
})

router.delete('/spent/:id' , async function(req,res,next){
    let id = req.params.id;
    queries.deleteBonusSpent(id)
    .then(bonusS=>{
        res.json(bonusS[0])
    })
    .catch(err=>{
        next(err)
    })
})

router.put("/:id", (req, res) => {
    let bonus_id = req.params.id;
    let bonus = req.body;
    queries.updateBonus(bonus,bonus_id)
    .then(bonusSArr=>{
        res.json(bonusSArr[0])
    })
    .catch(err=>next(err))
})

router.put("/spent/:id", (req, res) => {
    let bonusSpent_id = req.params.id;
    let bonusSpent = req.body;
    queries.updateBonusSpent(bonusSpent,bonusSpent_id)
    .then(bonusSArr=>{
        console.log('b a:',bonusSArr);
        res.json(bonusSArr[0])
    })
    .catch(err=>next(err))
})

module.exports = router;
