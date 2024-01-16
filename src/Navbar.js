import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navBar">
            <h1>Kai'Sa Airlines</h1>
            <div className="links">
                <Link to='/'>Inicio</Link>
                <Link to='/create'>Nuevo registro</Link>
                <Link to='/details'>Detalles</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;