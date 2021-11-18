var express = require('express');
const queries = require('../db/queries');
var router = express.Router();

const bonusParrainage = {
    type: 'parrainage',
    montant : 20,
    is_activated : true,
}

router.post('/set-password/:id/:password', (req, res,next) =>{
    try {
        let user_id = req.params.id;
        let password = req.params.password;
        queries.setPassword(password,user_id)
            .then(qres=>{
                console.log('qres :',qres)
                res.json({"token":'xxxx'})
            })
    } catch (error) {
        console.log(error)
        next(error)
    }
})

router.get('/registration/:phone/:code', (req, res,next) => {
    //let code = req.params.code 
    try {
        let code = req.params.code;
        let phone = req.params.phone;
        queries.getUserByPhone(phone)
            .then(user=>{
                console.log('user :',user, "code",code);
                if(!user){
                    res.json({err:"Téléphone n'éxiste pas !"})
                }
                else if(user.code != code){
                    res.json({err:"Code éroné !"})
                }
                else{
                    res.json(user);
                }
            })
    } catch (error) {
        console.log(error)
        next(error)
    }
})


router.post('/set-parrainage/:user_id/:phone_number', (req, res,next) =>{
    let user_id = req.params.user_id;
    let phone = req.params.phone_number;
    try {
        queries.getUserByPhoneBasic(phone)
            .then(user=>{
                if(!user){
                    res.json({err:"Téléphone n'éxiste pas !"})
                }
                else{
                    let bonus = Object.assign({}, bonusParrainage);
                    bonus.user_id = user_id;
                    queries.setBonusParrainage(bonus)
                        .then(bonus=>{
                            res.json(bonus)
                        })
                    res.json(user);
                }
            })
    } catch (error) {
        console.log(error);
        next(error)
        
    }
    


})


/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({'index':"index"})
  });



module.exports = router;
