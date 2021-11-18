
exports.up = function(knex) {
 return knex.schema
    .alterTable("user", (t) => {
      t.text("email");
    })
};

exports.down = function(knex) {
    return knex.schema
        .alterTable("user", (t) => {
        t.dropColumn("email");
        })
};
