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
    </footer>
  );
};

export default Footer;
