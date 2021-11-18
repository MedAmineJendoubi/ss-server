
exports.up = async function (knex) {
        res = await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        console.log('res :',res);
        return (
          knex.schema
            .createTable("user", (table) => {
                table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
                table.text("nom");
                table.text("prenom");
                table.text("adresse");
                table.text("telephone");
                table.text("password");
                table.boolean("is_admin").defaultTo(false);
                table.timestamp("created_at").defaultTo(knex.fn.now());
            })
            .then(()=>{
                return knex.schema.createTable("account_verification", (table) => {
                    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
                    table.integer('code');
                    table.uuid('user_id');
                    table
                        .foreign("user_id")
                        .references("id")
                        .on("user")
                        .onUpdate("CASCADE")
                        .onDelete("CASCADE");
                    table.timestamp("created_at").defaultTo(knex.fn.now());

                });
            })
            .then(()=>{
                return knex.schema.createTable("devis", (table) => {
                    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
                    table.text("ref_devis");
                    table.integer("montant");
                    table.text("remarque");
                    table.timestamp("date");
                    table.boolean("is_completed");
                    table.uuid('user_id');
                    table
                        .foreign("user_id")
                        .references("id")
                        .on("user")
                        .onUpdate("CASCADE")
                        .onDelete("CASCADE");
                    table.timestamp("created_at").defaultTo(knex.fn.now());

                });
            })
            .then(()=>{
                return knex.schema.createTable("bonus", (table) => {
                    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
                    table.text("type");
                    table.integer("montant");
                    table.boolean("is_activated");
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
                });
            })
            .then(()=>{
                return knex.schema.createTable("spending", (table) => {
                    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
                    table.integer('montant');
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
                });
            })
        )
}


exports.down = function(knex) {
    return knex.schema
    .dropTable("spending")
    .then(() => {
      return knex.schema.dropTable("bonus");
    })
    .then(() => {
      return knex.schema.dropTable("devis");
    })
    .then(() => {
      return knex.schema.dropTable("account_verification");
    })
    .then(() => {
      return knex.schema.dropTable("user");
    })
};
