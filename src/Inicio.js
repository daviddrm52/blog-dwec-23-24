import { useState, useEffect } from "react";
import BlogList from './BlogList.js';

const Inicio = () => {

    // HOOKS (ganchos para los amigos)
    // useState
    // useEffect

    /* Hook antiguo */
    // const [nombre, setNombre] = useState("Akane Kurokawa");
    // const [edad, setEdad] = useState(18);
    // const [profesion, setProfesion] = useState("Actriz de teatro");

    // const handleClick = () => {
    //     setNombre("Aqua Hoshino");
    //     setEdad(17);
    //     setProfesion("Actor de cine y teatro");
    //     console.log("Persona cambiada");
    // };

    // Props: ejemplo
    // <BlogList blogs = { blogs } titulo = "Listado completo de blogs" />

    // const image1 = require('./img/CHN713AC_B773_AC.png');
    // const image2 = require('./img/Akane_portada.jpg');
    // const image3 = require('./img/CHN5607A_C567_CHJ.png');

    // const [blogs, setBlogs] = useState([
    //     {titulo: "Air Chiquin", body: "Segunda principal aerolinea de la Republica de Chiquitin", autor: "daviddrm52", img: image1, id: 1},
    //     {titulo: "Oshi No Ko", body: "Manga que muestra el otro lado del mundo del espectaculo", autor: "Aka", img: image2, id: 2},
    //     {titulo: "Consorcio CHJ", body: "55 años de la creación del consorcio CHJ", autor: "daviddrm52", img: image3, id: 3}
    // ]);

    const [nombre, setNombre] = useState("Akane Kurokawa");

    useEffect(() => {
        setTimeout( () => {
            fetch('http://localhost:8000/blogs')
            .then(resultado => {
                console.log(resultado);
                if(!resultado.ok){
                    throw Error('No se ha podido recuperar la información');
                }
                return resultado.json();
            })
            .then(datos => {
                setBlogs(datos);
                setCargando(false);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                setCargando(false);
            })
        }, 100);
    }, []);

    //Hook para el JSON
    const [blogs, setBlogs] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    return (
        <div className="home">
            { cargando && <div>Cargando...</div> }
            { error && <div>{ error }</div> }
            { blogs && <BlogList blogs = { blogs } titulo = "Listado completo de aviones de Kai'Sa Airlines"/>}
            {/* <p>{ nombre }</p> */}
            {/* <p><button onClick={() => setNombre("Aqua Hoshino")}>Cambio de nombre</button></p> */}
            {/* <BlogList blogs = { blogs.filter(blog => blog.autor === "daviddrm52") } titulo = "Blogs de daviddrm52" />
            <BlogList blogs = { blogs.filter(blog => blog.id === 2) } titulo = "Blog del dia" />
            <BlogList blogs = { blogs.filter(blog => blog.titulo === "Air Chiquin") } titulo = "Blog de la semana"/> */}
            {/* <h2>Pagina de Inicio</h2>
            <p>Bienvenido/a {nombre}</p>
            <p>{nombre} tiene {edad} años, y su profesion actual es {profesion}.</p>
            <div className="Home">
                <button onClick={handleClick}>Cambiar persona</button>
            </div> */}
        </div>
    );
}

export default Inicio;

// Kiryu best driver 

// Iniciar server json: npx json-server --watch data/bd.json --port 8000
// Iniciar react: npm run start