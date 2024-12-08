const express = require("express");
//env use
require("dotenv").config();
const app = express();
app.use(express.json());
app.use("/api", require("./router"));
app.use((req, res, next) => {
  res.status(404).json({ error: "404 Error", message: "Not Found" });
});
//port
const port = process.env.PORT || 8025;
//server start
app.listen(port, () => {
  console.log(`This server start with ${port}`);
});
