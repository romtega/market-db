const { table } = require("../config");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable("products").then((exists) => {
    if (exists) {
      return knex.schema.hasColumn("products", "client").then((exists) => {
        if (!exists) {
          return knex.schema.table("products", (table) => {
            table.integer("client").unsigned().references("clients.client_id");
          });
        }
      });
    }
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
