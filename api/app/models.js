const fs = require("fs").promises;

const fetchExamData = () => {
  return fs.readFile("./data/data.json", "utf-8");
};

module.exports = fetchExamData;
