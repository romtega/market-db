const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ mensaje: "home" });
});

app.listen(3000, () => {
  console.log("Server on");
});

// //GET TODOS LOS PRODUCTOS
// app.get("/products", (req, res) => {
//   const products = [
//     { id: 1, product: "sal" },
//     { id: 2, product: "pimienta" },
//     { id: 3, product: "curcuma" },
//   ];
//   res.status(200).json(products);
// });

// //PARAMS POR ID
// app.get("/products/:id", (req, res) => {
//   const id = req.params.id;
//   const products = [
//     { id: 1, product: "sal" },
//     { id: 2, product: "pimienta" },
//     { id: 3, product: "curcuma" },
//   ];
//   const productFound = products.find((product) => product.id == id);

//   productFound
//     ? res.status(200).json(productFound)
//     : res.status(404).json({ message: "no existe" });
// });

// //POST (CREAR)
// app.post("/products", (req, res) => {
//   const products = [
//     { id: 1, product: "sal" },
//     { id: 2, product: "pimienta" },
//     { id: 3, product: "curcuma" },
//   ];
//   products.push(req.body);
//   res.status(201).json({ message: "Esto es la respuesta del post" });
//   console.log(products);
// });

// app.get("/clients", (req, res) => {
//   console.log("Ruta de  clientes");
//   res.status(200).send("estas en la ruta de clientes");
// });
