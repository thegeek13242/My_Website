import Particles from 'react-particles-js';
import parameters from './assets/particles.json';
import './App.css'

const App = () => {
  return (
    <div className="parent-container">
    <div id="particles-js">
    <Particles params={parameters} />
    </div>
    <div className="container">
    <h1 className="name">Aviral Verma</h1>
    </div>
    </div>
  );
}

export default App;
