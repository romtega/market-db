/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable("clients").then((exists) => {
    if (!exists) {
      return knex.schema.createTable("clients", (table) => {
        table.increments("client_id").primary();
        table.string("name").notNullable();
        table.string("last_name").notNullable();
        table.string("email").notNullable().unique();
        table.string("phone").notNullable();
        table.string("address").notNullable();
        table.string("zip_code").notNullable();
        table.string("city").notNullable();
        // table.boolean("active").notNullable().defaultTo(true);
        table.timestamp("created_at").defaultTo(knex.fn.now());
      });
    }
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
