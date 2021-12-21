var express = require('express');
const queries = require("../db/queries");

var router = express.Router();

const bonusPremierService = {
    type: 'parrainage',
    montant : 100,
    is_activated : false,
}

router.get('/', function(req, res, next) {
    console.log('header :',req.headers);
    queries
        .getClients()
        .then((clients)=>{
            console.log('cle',clients);
            //res.setHeader('Access-Control-Allow-Origin', '*')
            //res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT')
            res.json(clients)
        }).catch(err=>{
            console.log('err :0',err);
            next(err)
        })
})

router.get('/:id', function(req, res, next) {
    let id = req.params.id;
    console.log('LOGGED :',req.params.loggedId);
    queries
        .getClientDetailedById(id)
        .then(data=>{
            if( data && data.client)
            res.json(data)
            else
            res.status(404).json({err:'Client Not Found'})
        })
        .catch(err=>
            next(err)
            )
});

router.put("/:id", async (req, res) => {
    let id = req.params.id;
    let client = req.body;
    const existingClient = await queries.getClientByNumberExceptThisID(client.telephone,id)
    console.log('Existing Client',existingClient,'id',id);
    if(existingClient){
        res.status(409).json({'err':'Téléphone existe pour un autre clients !'})
    }
    else
    queries
        .updateClient(client,id)
        .then(client=>{
            res.json(client)
        })
        .catch(err=>{
            console.log('lllll',err);
            res.json({'err':err})
        }
            )
})


router.post('/', async function(req,res,next){
    let client = req.body;
    const existingClient = await queries.getClientByNumber(client.telephone)
    if(existingClient)
        res.status(200).json({msg:'Ce numéro existe déja'})
    else{
    queries.addClient(client)
        .then(qres=>{
            res.json(qres)
        })
        .catch(err=>{
            console.log(err);
            res.status(200).json({msg:err})
        })
    }
})


router.delete('/:id', async(req,res,next)=>{
    let id = req.params.id;
    queries.deleteClient(id)
        .then(qres=>{
            res.json({'msg':'Client supprimé'})
        })
        .catch(err=>next(err))
})


module.exports = router;

