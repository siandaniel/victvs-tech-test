const fetchExamData = require("./models");

const getExams = (request, response, next) => {
  fetchExamData()
    .then((data) => {
      const examData = JSON.parse(data);
      response.status(200).send({ examData });
    })
    .catch((err) => {
      console.error(err);
      response.status(500).send("Error reading exam data file");
    });
};

module.exports = getExams;
