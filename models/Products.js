const db = require("../config");

const create = (body) => {
  return db
    .insert(body)
    .into("products")
    .returning(["product_id", "name", "description", "sku", "price"]);
};

const findAll = () => {
  return db.select("*").from("products").where({ active: true });
};

const findOne = (id) => {
  return db
    .select("*")
    .from("products")
    .where({ product_id: id, active: true });
};

const update = (id, bodyToUpdate) => {
  return db
    .update(bodyToUpdate)
    .from("products")
    .where({ product_id: id, active: true })
    .returning(["product_id", "name", "description", "sku", "price", "active"]);
};

const logicDelete = (id) => {
  return db
    .update({ active: false })
    .from("products")
    .where({ product_id: id });
};

module.exports = {
  create,
  findAll,
  findOne,
  update,
  logicDelete,
};
