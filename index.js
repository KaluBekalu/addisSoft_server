const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./db");
const employeeRoutes = require("./routes/employee-router");

const app = express();
const apiPort = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("Hello Addis soft!");
});

app.use("/api", employeeRoutes);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
