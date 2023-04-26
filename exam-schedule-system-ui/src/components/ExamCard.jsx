function ExamCard({ exam }) {
  return (
    <li className="exam-card">
      <p>Exam Card for exam number {exam.id}</p>
    </li>
  );
}

export default ExamCard;
