import screenshotDesktop from "../assets/images/screenshotDesktop.png";

function Home() {
  return (
    <section className="exam-room-container">
      <h1>YOUR EXAMS. ONE PLACE.</h1>
      <section className="demo-container">
        <img
          src={screenshotDesktop}
          alt="Screenshot of the desktop version of the My Exams app"
          id="screenshot"
        ></img>
        <div className="demo-details">
          <h2>Exams Made Easy</h2>
          <p>
            It's now easier than ever to keep track of your upcoming exams with
            our simple 'My Exams' scheduling tool. Whether you're on mobile or
            desktop, follow these simple instructions to get all the information
            you need for a smoother assessment experience:
          </p>
          <ol>
            <li>Click on 'My Exams'.</li>
            <li>
              Use the dropdown menu to filter by candidate name, candidate ID,
              date or location.
            </li>
            <li>
              Click 'View Map' to show a map of your precise exam location.
            </li>
          </ol>
        </div>
      </section>
    </section>
  );
}

export default Home;
