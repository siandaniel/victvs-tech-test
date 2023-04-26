import axios from "axios";

export const getExamData = () => {
  return axios.get("http://localhost:4000/api/data").then(({ data }) => {
    return data.examData;
  });
};
