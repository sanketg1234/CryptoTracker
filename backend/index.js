const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

const dbConnection = require("./db/dbConnection");

app.use(express.json());
app.use(cors({ origin: "http://localhost:3001", credentials: true }));

app.use("/api/v1", require("./routes/routes"));

app.listen(port, () => {
  dbConnection();
  console.log("App is listening on port " + port);
});
