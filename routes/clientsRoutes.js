const express = require("express");
const router = express.Router();
const ClientsController = require("../controllers/clientsController");

router.post("/clients", ClientsController.createClient);
router.get("/clients", ClientsController.findAllClients);
router.get("/clients/:id", ClientsController.findOneClient);
router.put("/clients/:id", ClientsController.updateClient);

module.exports = router;
