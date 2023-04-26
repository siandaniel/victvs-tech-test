const express = require("express");
const getExams = require("./controllers");

const app = express();

app.use(express.json());

app.get("/api/data", getExams);

module.exports = app;
