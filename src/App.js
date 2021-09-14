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
          <p className="description">Namaskar, I am Aviral Verma. I am a CSE undergrad at IIITN.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
