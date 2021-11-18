

exports.up = function (knex) {
    return addUpdateTimeAll(knex, tables).then(() => {
      console.log("ALL TRIGGER ARE CREATED");
    });
  };
  
exports.down = function (knex) {
    return knex
      .raw(
        `
          DROP FUNCTION update_modified_column cascade
        `
      )
      .then(() => {
        for (let i = 0; i < tables.length; i++) {
          return knex.schema.alterTable(tables[i], (t) => {
            t.dropColumn("updated_at");
          });
        }
      });
  };
  
  const tables = [
    "bonus",
    "devis",
    "spending",
    "user",
  ];
  
  function addUpdateTimeAll(knex, tables) {
    return knex
      .raw(
        `
                CREATE FUNCTION update_modified_column()
                RETURNS TRIGGER AS $$
                BEGIN
                  NEW.updated_at = now();
                  RETURN NEW;
                END;
                $$ language 'plpgsql';
            `
      )
      .then(() => {
        for (let i = 0; i < tables.length; i++) {
          addTimeStamps(knex, tables[i]);
        }
      });
  }
  
  function addTimeStamps(knex, name) {
    return knex.schema
      .alterTable(name, (t) => {
        t.timestamp("updated_at").defaultTo(knex.fn.now());
      })
      .then(() => {
        //   We need to ensure the function exists, then add the table trigger
        return knex
          .raw(
            `
                DROP TRIGGER IF EXISTS update_${name}_updated_at  on ??;
                    `,
            [`public.${name}`]
          )
          .then(() => {
            return knex.raw(
              `
                    CREATE TRIGGER update_${name}_updated_at
                    BEFORE UPDATE ON ??
                    FOR EACH ROW
                    EXECUTE PROCEDURE update_modified_column();
                  `,
              [`public.${name}`]
            );
          })
          .catch((err) => console.log("ERR:", name));
      });
  }
  