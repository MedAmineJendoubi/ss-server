var express = require('express');
const queries = require('../db/queries');
var router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



const bonusParrainage = {
    type: 'parrainage',
    montant : 20,
    is_activated : true,
}

router.put('/set-password/:id', (req, res,next) =>{
    try {
        console.log('DOT ENv',process.env.SECRET_KEY);
        let user_id = req.params.id;
        let password = req.body.password;
        let salt = bcrypt.genSaltSync(10);
        let hashedPass = bcrypt.hashSync(password, salt)
        console.log('hashed :',hashedPass);
        queries.setPassword(hashedPass,user_id)
            .then(userArr=>{
                console.log('arr',userArr);
                let payload = {
                    fullname: userArr[0].prenom + ' ' + userArr[0].nom,
                    subject: userArr[0].id,
                    role: userArr[0].role,
                };
                console.log('payload :',payload);
                let token = jwt.sign(payload, process.env.SECRET_KEY);
                
                res.json({token:token,user:userArr[0]})
            })
    } catch (error) {
        console.log(error)
        next(error)
    }
})


router.post("/refresh-access-token", (req, res, next) => {
  try {
    
    let { accessToken } = req.body;
    console.log('access token',accessToken);
    let payload = jwt.verify(accessToken, process.env.SECRET_KEY);
    console.log('payload :',payload);
    queries
      .getUserPayloadById(payload.subject)
      .then((userArr) => {
        if (!userArr[0])
          res.status(202).json({
            message: "phoneErr",
          });
        else {
          let payload = {
            fullname: userArr[0].prenom + ' ' + userArr[0].nom,
            subject: userArr[0].id,
            role: userArr[0].role,
        };
          res.status(200).json({token:accessToken,user:userArr[0]});
        }
      })
      .catch((err) => console.log(err));
    } catch (error) {
      console.log('err :',error);
      res.json({message:err})
    }
});


router.post("/sign-in", (req, res, next) => {
  try {
    
  
  let { telephone, password } = req.body;
  queries
    .getClientByNumber(telephone)
    .then((client) => {
      if (!client)
        res.status(202).json({
          message: "phoneErr",
        });
      else if(!client.password)
        res.status(202).json({
          message: "noPasswd",
        });
      else if (!bcrypt.compareSync(password, client.password))
        res.status(202).json({
          message: "pwdErr",
        });
      else {
        let payload = {
          fullname: client.nom + " " + client.prenom,
          subject: client.id,
          role: client.role,
        };
        delete client.password;
        let token = jwt.sign(payload, process.env.SECRET_KEY);
        res.status(200).json({token:token,user:client});
      }
    })
    .catch((err) => console.log(err));
  } catch (error) {
    res.status(202).json({
      message: "pwdErr",
    });
  }
});





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


router.post('/set-parrainage/:user_id', (req, res,next) =>{
    let user_id = req.params.user_id;
    let phone = req.body.telephone;
    try {
        queries.getUserByPhoneBasic(phone,user_id)
            .then(user=>{
                if(!user){
                    res.json({err:"Ce numéro est invalide !"})
                }
                else{
                    let bonus = Object.assign({}, bonusParrainage);
                    bonus.user_id = user.id;                //! the one that gets the bonus
                    bonus.user_id_thanks_to = user_id       //! the one that said he referred me
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



module.exports = router;
