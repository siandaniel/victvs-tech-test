import { useEffect, useState } from "react";
import ExamCard from "./ExamCard";
import { getExamData } from "../utils/api";
import { formatDates } from "../utils/utilities";
import upIcon from "../assets/images/upIcon.jpeg";

function ExamList() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [filterType, setFilterType] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [exams, setExams] = useState([]);
  const [showButton, setShowButton] = useState();

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

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return (
      <img
        src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
        alt="loading bar"
        id="loading-icon"
      />
    );
  }

  if (error) {
    return <p>Error loading exam data</p>;
  }

  return (
    <section className="exam-list">
      <h1>MY EXAMS</h1>
      <div className="filter">
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
      </div>
      <ul>
        {filterExams()
          .sort(function (a, b) {
            return new Date(a.formattedDate) - new Date(b.formattedDate);
          })
          .map((exam) => {
            return <ExamCard exam={exam} key={exam.id} />;
          })}
      </ul>
      {showButton && (
        <div className={"scrollToTop"}>
          <button id="to-top-button" onClick={handleScrollToTop}>
            <img src={upIcon} alt="scroll to top button" />
          </button>
        </div>
      )}
    </section>
  );
}

export default ExamList;
