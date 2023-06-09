const express = require("express");
const getExams = require("./controllers");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/data", getExams);

app.use((request, response, next) => {
  response.status(404).send({ msg: "Not found - this path does not exist" });
});

module.exports = app;
