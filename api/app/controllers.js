const fetchExamData = require("./models");

const getExams = (request, response, next) => {
  fetchExamData().then((data) => {
    const examData = JSON.parse(data);
    response.status(200).send({ examData });
  });
};

module.exports = getExams;
