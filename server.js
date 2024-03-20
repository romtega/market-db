const express = require("express");
const db = require("./config");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ mensaje: "home" });
});

// CRUD
// CREATE
app.post("/products", (req, res) => {
  const product = req.body;
  db.insert(product)
    .into("products")
    .returning(["product_id", "name", "description", "sku", "price"])
    .then((newProduct) => {
      res.status(201).json(newProduct);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ error: "Hubo un error, intenta mas tarde" });
    });
});

app.post("/clients", (req, res) => {
  const client = req.body;
  db.insert(client)
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
    ])
    .then((newClient) => {
      res.status(201).json(newClient);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ error: "Hubo un error, intenta mas tarde" });
    });
});

// GET ALL
app.get("/products", async (req, res) => {
  try {
    const allProducts = await db
      .select("*")
      .from("products")
      .where({ active: true });
    res.status(200).json(allProducts);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Hubo un error, intenta mas tarde" });
  }
});

app.get("/clients", async (req, res) => {
  try {
    const allClients = await db.select("*").from("clients");

    res.status(200).json(allClients);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Hubo un error, intenta mas tarde" });
  }
});

// GET BY ID
app.get("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await db
      .select("*")
      .from("products")
      .where({ product_id: id, active: true });
    product.length === 0
      ? res.status(404).json({ message: "No existe el producto" })
      : res.status(200).json(product[0]);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Hubo un error, intenta mas tarde" });
  }
});

app.get("/clients/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const client = await db
      .select("*")
      .from("clients")
      .where({ client_id: id });
    client.length === 0
      ? res.status(404).json({ message: "No existe el cliente" })
      : res.status(200).json(client[0]);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Hubo un error, intenta mas tarde" });
  }
});

//UPDATE BY ID
app.put("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const bodyToUpdate = req.body;
    const updateProduct = await db
      .update(bodyToUpdate)
      .from("products")
      .where({ product_id: id, active: true })
      .returning([
        "product_id",
        "name",
        "description",
        "sku",
        "price",
        "active",
      ]);
    res.status(200).json(updateProduct);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Hubo un error, intenta mas tarde" });
  }
});

app.put("/clients/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const bodyToUpdate = req.body;
    const updateClient = await db
      .update(bodyToUpdate)
      .from("clients")
      .where({ client_id: id })
      .returning([
        "name",
        "last_name",
        "email",
        "phone",
        "address",
        "zip_code",
        "city",
      ]);
    res.status(200).json(updateClient);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Hubo un error, intenta mas tarde" });
  }
});

// DELETE BY ID
app.delete("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await db
      .update({ active: false })
      .from("products")
      .where({ product_id: id });
    res.status(200).json();
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Hubo un error, intenta mas tarde" });
  }
});

app.listen(3000, () => {
  console.log("Server on");
});
