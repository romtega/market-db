const express = require("express");
const productsRoutes = require("./routes/productsRoutes");
const clientsRoutes = require("./routes/clientsRoutes");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ mensaje: "home" });
});

app.use(productsRoutes);
app.use(clientsRoutes);

app.listen(3000, () => {
  console.log("Server on");
});
