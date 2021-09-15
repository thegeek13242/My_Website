import "./NavBar.css";
import github from "./GitHub-Mark-Light-32px.png";
import linkedin from "./linkedin.png";
import medium from "./Medium.png";

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
      <a href="https://github.com/thegeek13242">
        <img className="github" src={github} alt="github logo" />
      </a>
      </div>
      <div className="nav-element">
      <a href="https://www.linkedin.com/in/aviral-verma-19b9b4201/">
        <img className="linkedin" src={linkedin} alt="linkedin logo" width="32px" height="32px"/>
      </a>
      </div>
      <div className="nav-element">
      <a href="https://medium.com/@aviralv35">
        <img className="medium" src={medium} alt="medium logo" width="32px" height="32px"/>
      </a>
      </div>
    </nav>
  );
};

export default NavBar;
