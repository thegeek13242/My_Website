import "./NavBar.css";
const NavBar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-element">
        <a className="nav-link" href="#about">
          About Me
        </a>
      </div>
      <div className="nav-element">
        <a className="nav-link" href="#projects">
          Projects
        </a>
      </div>
      <div className="nav-element">
        <a
          className="nav-link"
          href="https://drive.google.com/file/d/1X4nZawkMt91jERICN8S5RRNucoY2jq97/view?usp=sharing"
        >
          Resume
        </a>
      </div>
      <div className="nav-element">
        <a className="nav-link" href="#contact">
          Contact
        </a>
        <ul className="contact-list">
          <li>
            <a
              href="https://github.com/thegeek13242"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/aviral-verma-19b9b4201/"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
