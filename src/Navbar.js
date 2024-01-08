const Navbar = () => {
    return ( 
        <nav className="navBar">
            <h1>El blog de DWEC</h1>
            <div className="links">
                <a href="/">Inicio</a>
                <a href="/create">Nuevo blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;