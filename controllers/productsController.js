const Products = require("../models/Products");

const createProduct = (req, res) => {
  const product = req.body;
  Products.create(product)
    .then((newProduct) => {
      res.status(201).json(newProduct);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ error: "Hubo un error, intenta mas tarde" });
    });
};

const findAllProducts = async (req, res) => {
  try {
    const allProducts = await Products.findAll();
    res.status(200).json(allProducts);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Hubo un error, intenta mas tarde" });
  }
};

const findOneProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Products.findOne(id);
    product.length === 0
      ? res.status(404).json({ message: "No existe el producto" })
      : res.status(200).json(product[0]);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Hubo un error, intenta mas tarde" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const bodyToUpdate = req.body;
    const updateProduct = await Products.update(id, bodyToUpdate);
    res.status(200).json(updateProduct);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Hubo un error, intenta mas tarde" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await Products.update(id);
    res.status(200).json();
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Hubo un error, intenta mas tarde" });
  }
};

module.exports = {
  createProduct,
  findAllProducts,
  findOneProduct,
  updateProduct,
  deleteProduct,
};
