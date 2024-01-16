import Navbar from './Navbar.js';
import Inicio from './Inicio.js';
import Crear from './Crear.js';
import Detalles from './Detalles.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path = "/">
              <Inicio/>
            </Route>
            <Route exact path = "/create">
              <Crear/>
            </Route>
            <Route exact path = "/details">
              <Detalles/>
            </Route>
          </Switch>
        </div>      
      </div>
    </Router>
  );
}

export default App;
