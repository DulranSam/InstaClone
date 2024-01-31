const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const main = require("./routes/home");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Hi Docker! 🐳</h1>");
});

app.use("/home", main);

app.listen(process.env.PORT, () => {
  console.log(`Servers up on port ${process.env.PORT}`);
});
