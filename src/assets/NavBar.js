import './NavBar.css'
const NavBar = () => {
    return(
        <nav className="nav-container">
            <div className="nav-name">
                <h2>Aviral Verma</h2>
                </div>
                    <div><a href="#about">About Me</a></div>
                    <div><a href="#projects">Projects</a></div>
                    <div><a href="#contact">Contact</a>
                    <ul className="contact-list">
                        <li><a href="https://github.com/thegeek13242" rel="noreferrer" target="_blank">GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/aviral-verma-19b9b4201/" rel="noreferrer" target="_blank">LinkedIn</a></li>
                    </ul>
                </div>
        </nav>
    );
}

export default NavBar;