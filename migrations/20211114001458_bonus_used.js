
exports.up = function(knex) {
    return (
        knex.schema.createTable("bonus_spent", (table) => {
            table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
            table.text("type").defaultTo('Bonus utilisé.')
            table.integer("montant");
            table.uuid('devis_id');
            table
                .foreign("devis_id")
                .references("id")
                .on("devis")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");

            table.uuid('user_id');
            table
                .foreign("user_id")
                .references("id")
                .on("user")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table.timestamp("created_at").defaultTo(knex.fn.now());
        })
        .then(()=>{
            return knex.schema.alterTable("devis", (t) => {
                t.text("type").defaultTo("service");
              })
        })
)};

exports.down = function(knex) {
    return knex.schema
    .dropTable("bonus_spent")
    .then(() => {
      return knex.schema.alterTable("bonus",(t) => {
        t.dropColumn("email")});
    })
};
