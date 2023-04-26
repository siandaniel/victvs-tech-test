import Filter from "./Filter";
import ExamList from "./ExamList";

function ExamsContainer() {
  return (
    <section className="exams-container">
      <p>Exams Container</p>
      <Filter />
      <ExamList />
    </section>
  );
}

export default ExamsContainer;
