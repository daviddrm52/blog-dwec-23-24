import './App.css';
import Navbar from './Navbar.js';
import Home from './Home.js';


function App() {

  // const titulo = "Welcome to the new blog!";
  // const likes = 50;
  // const persona = {
  //   nombre: "Akane",
  //   apellido: "Kurokawa"
  // };
  // const link = "https://www.google.com";

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Home></Home>



        {/* <p>Likes: {likes}</p>
        <p>{persona.nombre} {persona.apellido}</p>
        <a href={link}>Google</a>
        <p>{ [2, 4, 5, 1, 5] }</p>
        <p>{ Math.random() * 10 }</p> */}
      </div>      
    </div>
  );
}

export default App;
