const { Client } = require("knex");
const Clients = require("../models/Clients");

const createClient = (req, res) => {
  const client = req.body;
  Clients.create(client)
    .then((newClient) => {
      res.status(201).json(newClient);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ error: "Hubo un error, intenta mas tarde" });
    });
};

const findAllClients = async (req, res) => {
  try {
    const allClients = await Clients.findAll();
    res.status(200).json(allClients);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Hubo un error, intenta mas tarde" });
  }
};

const findOneClient = async (req, res) => {
  try {
    const id = req.params.id;
    const client = await Clients.findOne(id);
    client.length === 0
      ? res.status(404).json({ message: "No existe el producto" })
      : res.status(200).json(client[0]);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Hubo un error, intenta mas tarde" });
  }
};

const updateClient = async (req, res) => {
  try {
    const id = req.params.id;
    const bodyToUpdate = req.body;
    const updateClient = await Clients.update(id, bodyToUpdate);
    res.status(200).json(updateClient);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Hubo un error, intenta mas tarde" });
  }
};

module.exports = {
  createClient,
  findAllClients,
  findOneClient,
  updateClient,
};
