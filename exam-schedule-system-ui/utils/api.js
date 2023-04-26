const axios = require("axios");

const getExamData = () => {
  return axios.get("http://localhost:4000/api/data").then(({ data }) => {
    return data.examData;
  });
};

module.exports = getExamData;
