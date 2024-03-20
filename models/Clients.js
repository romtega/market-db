const db = require("../config");

const create = (body) => {
  return db
    .insert(body)
    .into("clients")
    .returning([
      "client_id",
      "name",
      "last_name",
      "email",
      "phone",
      "address",
      "zip_code",
      "city",
    ]);
};

const findAll = () => {
  return db.select("*").from("clients");
};

const findOne = (id) => {
  return db.select("*").from("clients").where({ client_id: id });
};

const update = (id, bodyToUpdate) => {
  return db
    .update(bodyToUpdate)
    .from("clients")
    .where({ product_id: id })
    .returning([
      "name",
      "last_name",
      "email",
      "phone",
      "address",
      "zip_code",
      "city",
    ]);
};

module.exports = {
  create,
  findAll,
  findOne,
  update,
};
