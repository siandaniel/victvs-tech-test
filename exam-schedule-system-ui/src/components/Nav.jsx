import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="upper-nav">
      <Link to="/">Home</Link>
      <Link to="/myexams">My Exams</Link>
      <a
        href="https://www.victvs.co.uk/about-victvs/"
        target="_blank"
        rel="noopener noreferrer"
      >
        About Us
      </a>
    </nav>
  );
}

export default Nav;
