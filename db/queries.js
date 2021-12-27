const knex = require("./knex");


module.exports = {

  //QUIZZ ANSWER
  setAnswer(quizz_answer){
    return knex('quizz_answer').insert(quizz_answer,'*').then(()=>{
      return knex('bonus').update('is_activated',true).where({devis_id:quizz_answer.devis_id})
    });
  },


  //client requests
  async getMyHistory(user_id) {
    const bonus = await knex("bonus as b")
    .leftJoin("devis as d", "b.devis_id", "d.id")
    .leftJoin("user as u","b.user_id_thanks_to","u.id")
    .select(
      "b.id",
      "b.type",
      "b.montant",
      "b.is_activated",
      "b.devis_id",
      "b.user_id",
      "b.created_at",
      "d.ref_devis",
      "u.nom",
      "u.prenom",
    )
    .where({"b.user_id": user_id,"b.is_activated":true});
    const bonus_spent =await knex("bonus_spent as b")
      .leftJoin("devis as d", "b.devis_id", "d.id")
      .select(
        "b.id",
        "b.type",
        "b.montant",
        "b.devis_id",
        "b.user_id",
        "b.created_at",
        "d.ref_devis"
      )
      .where("b.user_id", user_id);
    
      const devis =await knex("devis as d")
      .leftJoin("bonus as b", "d.id","b.devis_id")
      .select(
        "d.*",
        "b.is_activated",
      )
      .where("d.user_id", user_id);
    return {bonus:bonus,bonus_spent:bonus_spent,devis:devis}
  },

  //CLIENT

  deleteClient(id) {
    return knex("user").where("id", id).del();
  },

  async getClients() {
    const users = await knex("user as u")
      .leftJoin("account_verification as av", "u.id", "av.user_id")
      .whereNot("u.is_admin", true)
      .select(
        "u.nom",
        "u.prenom",
        "u.telephone",
        "u.id",
        "u.adresse",
        "u.updated_at"
      )
      .orderBy("u.updated_at", "desc");
    //.andWhere('av.code',code);
    return users;
  },

  getClientDetailedById(id) {
    return new Promise(function (resolve, reject) {
      const users = knex("user as u")
        .leftJoin("account_verification as av", "u.id", "av.user_id")
        .where("u.id", id)
        .select(
          "u.nom",
          "u.prenom",
          "u.email",
          "u.telephone",
          "u.id",
          "u.adresse",
          "u.updated_at",
          "av.code"
        )
        .orderBy("u.updated_at", "desc")
        .catch((err) => {
          return err;
        });
      //.andWhere('av.code',code);
      const devis = knex("devis as d")
        .select()
        .leftJoin("bonus as b", "d.id", "b.devis_id")
        .leftJoin("bonus_spent as bs", "d.id", "bs.devis_id")
        .select(
          "d.id",
          "d.ref_devis",
          "d.montant",
          "d.remarque",
          "d.date",
          "d.is_completed",
          "d.type",
          "b.id as bonus_id",
          "bs.id as bonus_spent_id"
        )
        .where("d.user_id", id)
        .orderBy("d.date", "desc");
      const bonus = knex("bonus as b")
        .leftJoin("devis as d", "b.devis_id", "d.id")
        .select(
          "b.id",
          "b.type",
          "b.montant",
          "b.is_activated",
          "b.devis_id",
          "b.user_id",
          "b.created_at",
          "d.ref_devis"
        )
        .where("b.user_id", id)
        .orderBy("b.created_at", "desc");

      const bonus_spent = knex("bonus_spent as b")
        .leftJoin("devis as d", "b.devis_id", "d.id")
        .select(
          "b.id",
          "b.type",
          "b.montant",
          "b.devis_id",
          "b.user_id",
          "b.created_at",
          "d.ref_devis"
        )
        .where("b.user_id", id)
        .orderBy("b.created_at", "desc");;

      Promise.all([users, devis, bonus, bonus_spent])
        .then((res) => {
          let data = {
            client: res[0][0],
            devis: res[1],
            bonus: res[2],
            bonus_spent: res[3],
          };
          console.log("data :", data);
          resolve(data);
        })
        .catch((err) => {
          console.log("err ", err);
          return err;
        });
    });
    //return users[0];
  },

  getUserPayloadById(user_id) {
    return knex("user")
      .where("id", user_id)
      .select("id", "nom", "prenom", "role");
  },

  async getClientById(id) {
    const users = await knex("user as u")
      .leftJoin("account_verification as av", "u.id", "av.user_id")
      .where("u.id", id)
      .select(
        "u.nom",
        "u.prenom",
        "u.telephone",
        "u.id",
        "u.adresse",
        "u.updated_at",
        "av.code"
      )
      .orderBy("u.updated_at", "desc")
      .catch((err) => {
        return err;
      });
    //.andWhere('av.code',code);
    return users[0];
  },

  async getClientByNumberExceptThisID(telephone, id) {
    const client = await knex("user")
      .where("telephone", telephone)
      .andWhereNot("id", id)
      .catch((err) => {
        return err;
      });
    return client[0];
  },

  async updateClient(client, id) {
    const updatedClient = await knex("user")
      .update(client)
      .where("id", id)
      .returning(["id", "nom", "prenom"]);
    return updatedClient[0];
  },

  async getUserByPhone(phone) {
    try {
      const user = await knex("user as u")
        .leftJoin("account_verification as av", "u.id", "av.user_id")
        .where("u.telephone", phone)
        .select("u.nom", "u.prenom", "u.telephone", "u.id", "av.code");
      //.andWhere('av.code',code);
      return user[0];
    } catch (error) {
      console.log("err", error);
      return error;
    }
  },

  // AUTH
  async getUserByPhoneBasic(phone, curr_user_id) {
    const user = await knex("user as u")
      .select("id", "nom", "prenom")
      .where("u.telephone", phone)
      .whereNot("u.id", curr_user_id);
    //.andWhere('av.code',code);
    return user[0];
  },

  async setPassword(password, user_id) {
    try {
      return knex("user")
        .returning(["id", "nom", "prenom", "role"])
        .where({ id: user_id })
        .update({ password: password });
    } catch (error) {
      console.log("rr :", error);
      return error;
    }
  },

  async setBonusParrainage(bonus) {
    const cBonus = await knex("bonus").insert(bonus, "*");
    return bonus[0];
  },

  getUsers(id, password) {
    return knex("user").select();
  },

  getUsers(id, password) {
    return knex("user").select();
  },

  async getClientByNumber(telephone) {
    const client = await knex("user")
      .where("telephone", telephone)
      .select("id", "nom", "prenom", "password", "role");
    return client[0];
  },

  async addClient(client, bonus) {
    try {
      let insertedClient = await knex("user").insert(client).returning("*");
      delete insertedClient.password;
      const insertedCode = await knex("account_verification")
        .insert({
          code: Math.floor(1000 + Math.random() * 9000),
          user_id: insertedClient[0].id,
        })
        .returning("code");
      console.log("ins code :", insertedCode);

      return { ...insertedClient[0], ...{ code: insertedCode[0] } };
    } catch (error) {
      return Promise.reject(error);
    }
  },

  // DEVIS
  getDevisById(devis_id) {
    return knex("devis").select().where("id", devis_id);
  },
  getDevisByClient(client_id) {
    return knex("devis").select().where("user_id", client_id);
  },
  getDevisUncompletedByClient(client_id) {
    return knex("devis")
      .select()
      .where("user_id", client_id)
      .andWhere("is_completed", false);
  },

  addDevis(devis) {
    return knex("devis")
      .insert(devis, "*")
      .catch((err) => {
        console.log(err);
        return err;
      });
  },
  deleteDevis(devis_id) {
    return knex("devis").where("id", devis_id).del();
  },
  updateDevis(devis, devis_id) {
    return knex("devis").where("id", devis_id).update(devis, "*");
  },

  // BONUS
  addBonus(bonus) {
    return knex("bonus")
      .insert(bonus, "*")
      .catch((err) => {
        console.log(err);
        return err;
      });
  },

  updateBonus(bonus, bonus_id) {
    return knex("bonus").where("id", bonus_id).update(bonus, "*");
  },

  deleteBonus(bonus_id) {
    return knex("bonus").where("id", bonus_id).del();
  },

  //Bonus spent

  addBonusSpent(bonusS) {
    return knex("bonus_spent")
      .insert(bonusS, "*")
      .catch((err) => {
        console.log(err);
        return err;
      });
  },

  updateBonusSpent(bonusS, bonusS_id) {
    return knex("bonus_spent").where("id", bonusS_id).update(bonusS, "*");
  },

  deleteBonusSpent(bonus_spent_id) {
    return knex("bonus_spent").where("id", bonus_spent_id).del();
  },
};
