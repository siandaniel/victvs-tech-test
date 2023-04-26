import { useEffect, useState } from "react";
import ExamCard from "./ExamCard";
import { getExamData } from "../utils/api";

function ExamList() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [exams, setExams] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    getExamData()
      .then((examsFromApi) => {
        console.log(examsFromApi);
        setExams(examsFromApi);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);

  if (loading) {
    return (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
        alt="loading bar"
        id="loading-icon"
      />
    );
  }

  if (error) {
    return <p>Error loading exam data</p>;
  }

  return (
    <div className="exam-list">
      <h2>Exam List</h2>
      <ul>
        {exams.map((exam, index) => {
          return <ExamCard exam={exam} key={exam.id} />;
        })}
      </ul>
    </div>
  );
}

export default ExamList;
