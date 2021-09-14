import Particles from "react-particles-js";
import parameters from "./assets/particles.json";
import "./App.css";
import NavBar from "./assets/NavBar";

const App = () => {
  return (
    <div className="parent-container">
      <div id="particles-js">
        <Particles params={parameters} />
      </div>
      <div className="container">
        <NavBar></NavBar>
        <div className="description-container">
          <h1 className="name">Aviral Verma</h1>
          <p className="description">Namaskar, I am Aviral Verma, a 2<sup>nd</sup> year <em>Computer Science undergraduate</em> at <b>Indian Institute of Information Technology, Nagpur</b>.
          I am currently learning Full Stack Web Development and I am literally open to learn about any new technology <span role="img" aria-label="Smiling Face">😁.</span>
          I am looking for internships in (but not limited to) the domain of Web Development.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
