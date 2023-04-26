import moment from "moment";

export const formatDates = (exams) => {
  exams.forEach((exam) => {
    const dateObj = moment(exam.Date, "DD/MM/YYYY HH:mm:ss");
    exam.formattedDate = dateObj.toDate();
  });
  return exams;
};
