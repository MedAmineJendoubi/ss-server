
exports.up = function(knex) {
    return knex.schema
    .createTable("quizz_answer", (table) => {
        table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
        table.specificType('stringarray', 'text ARRAY');

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
};

exports.down = function(knex) {
    return knex.schema
    .dropTable("quizz_answer")
};
