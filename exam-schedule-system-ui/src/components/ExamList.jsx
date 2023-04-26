import ExamCard from "./ExamCard";

function ExamList() {
  return (
    <div className="exam-list">
      <h2>Exam List</h2>
      <ul>
        <ExamCard />
        <ExamCard />
        <ExamCard />
        <ExamCard />
        <ExamCard />
      </ul>
    </div>
  );
}

export default ExamList;
