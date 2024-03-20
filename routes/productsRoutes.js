const express = require("express");
const router = express.Router();
const ProductsController = require("../controllers/productsController");

router.post("/products", ProductsController.createProduct);
router.get("/products", ProductsController.findAllProducts);
router.get("/products/:id", ProductsController.findOneProduct);
router.put("/products/:id", ProductsController.updateProduct);
router.delete("/products/:id", ProductsController.deleteProduct);

module.exports = router;
