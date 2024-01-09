import Navbar from './Navbar.js';
import Inicio from './Inicio.js';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Inicio></Inicio>
      </div>      
    </div>
  );
}

export default App;
