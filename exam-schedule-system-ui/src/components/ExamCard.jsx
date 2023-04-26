function ExamCard({ exam }) {
  return (
    <li className="exam-card">
      <h3>{exam.Title}</h3>
      <p>{exam.Description}</p>
      <p>{exam.Candidateid}</p>
      <p>{exam.CandidateName}</p>
      <p>{exam.Date}</p>
      <p>{exam.LocationName}</p>
    </li>
  );
}

export default ExamCard;
