
exports.up = function(knex) {
    return knex.schema
    .alterTable("bonus", (t) => {
        t.uuid('user_id_thanks_to');
        t.foreign("user_id_thanks_to")
            .references("id")
            .on("user")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
    })
    .then(()=>{
        return knex.schema.alterTable("user", (t) => {
            t.text("role").defaultTo("client");
          })
    })
};

exports.down = function(knex) {
    return knex.schema
    .alterTable("bonus", (t) => {
    t.dropColumn("user_id_thanks_to");
    })
    .then(() => {
        return knex.schema.alterTable("user",(t) => {
          t.dropColumn("role")});
      })
};
