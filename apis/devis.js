var express = require('express');
const queries = require("../db/queries");

var router = express.Router();

router.get('/list/uncompleted/:client_id', function(req, res, next) {
    let client_id = req.params.client_id;
    queries.getDevisUncompletedByClient(client_id)
        .then((devis)=>{
            res.json(devis)
        })
        .catch(err=>{
            next(err)
        })
});

router.get('/list/:client_id', function(req, res, next) {
    let client_id = req.params.client_id;
    queries.getDevisByClient(client_id)
        .then((devis)=>{
            res.json(devis)
        })
        .catch(err=>{
            next(err)
        })
});

router.get('/:devis_id', function(req, res, next) {
    let devis_id = req.params.devis_id;
    queries.getDevisById(devis_id)
        .then((devis)=>{
            res.json(devis)
        })
        .catch(err=>{
            next(err)
        })
});
router.post('/', async function(req,res,next){
    let devis = req.body;
    
    queries.addDevis(devis)
        .then(devis=>{
            res.json(devis[0])
        })
        .catch(err=>{
            next(err)
        })
})

router.delete('/:id' , async function(req,res,next){
    let devis_id = req.params.id;
    queries.deleteDevis(devis_id)
        .then(qres=>{
            res.json(qres)
        })
        .catch(err=> next(err))
})

router.put("/:id", (req, res) => {
    let devis_id = req.params.id;
    let devis = req.body;
    queries.updateDevis(devis,devis_id)
    .then(devisArr=>{
        res.json(devisArr[0])
    })
    .catch(err=>next(err))
})

module.exports = router;
