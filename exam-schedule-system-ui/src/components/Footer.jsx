const Footer = () => {
  return (
    <footer>
      <button
        id="lightdark-button"
        onClick={({ target, currentTarget }) => {
          if (target === currentTarget) {
            const classList =
              target.parentNode.parentNode.parentNode.parentNode.classList;
            classList.toggle("light-mode");
          }
        }}
      >
        Light / Dark Mode
      </button>
      <nav className="links">
        <div className="link-group">
          <img
            className="link-icon"
            src="https://www.victvs.co.uk/wp-content/uploads/2020/05/512x512new.png"
            alt="VICTVS logo"
          />
          <a
            href="https://www.victvs.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            VICTVS
          </a>
        </div>
        <div className="link-group">
          <img
            className="link-icon"
            src="https://www.svgrepo.com/show/144030/linkedin-square-logo.svg"
            alt="LinkedIn Icon"
          />
          <a
            href="https://www.linkedin.com/company/victvs/?originalSubdomain=uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
