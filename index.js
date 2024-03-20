import express from "express";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ mensaje: "home" });
});

app.get("/products", (req, res) => {
  console.log("Ruta de productos");
  res.status(200).json({ mensaje: "products" });
});

app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const arr = [
    { id: 1, product: "sal" },
    { id: 2, product: "pimienta" },
    { id: 3, product: "curcuma" },
  ];
  const product = arr.find((product) => product.id == id);

  product
    ? res.status(299).json(product)
    : res.status(404).json({ message: "no existe" });
});

app.get("/clients", (req, res) => {
  console.log("Ruta de  clientes");
  res.status(200).send("estas en la ruta de clientes");
});

app.listen(3000, () => {
  console.log("el servidor esta funcionando correctamente con nodemon");
});
