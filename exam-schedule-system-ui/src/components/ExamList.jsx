import { useEffect, useState } from "react";
import ExamCard from "./ExamCard";
import { getExamData } from "../utils/api";
import { formatDates } from "../utils/utilities";

function ExamList() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [filterType, setFilterType] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [exams, setExams] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    getExamData()
      .then((examsFromApi) => {
        const formattedExams = formatDates(examsFromApi);
        setExams(formattedExams);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);

  useEffect(() => {
    setFilterValue("");
  }, [filterType]);

  function handleFilterTypeChange(event) {
    setFilterType(event.target.value);
  }

  function handleFilterValueChange(event) {
    setFilterValue(event.target.value);
  }

  function filterExams() {
    let filteredExams = exams;

    if (filterType === "Candidateid" && filterValue !== "") {
      filteredExams = filteredExams.filter(
        (exam) => exam.Candidateid === parseInt(filterValue)
      );
    } else if (filterType === "CandidateName" && filterValue !== "") {
      filteredExams = filteredExams.filter(
        (exam) => exam.CandidateName.toLowerCase() === filterValue.toLowerCase()
      );
    } else if (filterType === "Date" && filterValue !== "") {
      filteredExams = filteredExams.filter(
        (exam) => exam.Date.substring(0, 10) === filterValue
      );
    } else if (filterType === "LocationName" && filterValue !== "") {
      filteredExams = filteredExams.filter(
        (exam) => exam.LocationName.toLowerCase() === filterValue.toLowerCase()
      );
    }
    return filteredExams;
  }

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
      <label htmlFor="filter-type">Filter by:</label>
      <select
        id="filter-type"
        value={filterType}
        onChange={handleFilterTypeChange}
      >
        <option value="">All Exams</option>
        <option value="Candidateid">Candidate ID</option>
        <option value="CandidateName">Candidate Name</option>
        <option value="Date">Date</option>
        <option value="LocationName">Location</option>
      </select>
      {filterType !== "" && (
        <>
          <label htmlFor="filter-value">
            {filterType === "Date" ? "DD/MM/YYYY:" : ""}
          </label>
          <input
            id="filter-value"
            type="text"
            value={filterValue}
            onChange={handleFilterValueChange}
          />
        </>
      )}
      <ul>
        {filterExams()
          .sort(function (a, b) {
            return new Date(a.formattedDate) - new Date(b.formattedDate);
          })
          .map((exam) => {
            return <ExamCard exam={exam} key={exam.id} />;
          })}
      </ul>
    </div>
  );
}

export default ExamList;
