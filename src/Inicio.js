import { useState } from "react";

const Inicio = () => {

    //HOOKS (ganchos para los amigos)
    //useState
    // const [nombre, setNombre] = useState("Akane Kurokawa");
    // const [edad, setEdad] = useState(18);
    // const [profesion, setProfesion] = useState("Actriz de teatro");

    // const handleClick = () => {
    //     setNombre("Aqua Hoshino");
    //     setEdad(17);
    //     setProfesion("Actor de cine y teatro");
    //     console.log("Persona cambiada");
    // };

    const image1 = require('./img/CHN713AC_B773_AC.png');
    const image2 = require('./img/Akane_portada.jpg');
    const image3 = require('./img/CHN5607A_C567_CHJ.png');

    const [blogs, setBlogs] = useState([
        {titulo: "Air Chiquin", body: "Segunda principal aerolinea de la Republica de Chiquitin", autor: "daviddrm52", img: image1, id: 1},
        {titulo: "Oshi No Ko", body: "Manga que muestra el otro lado del mundo del espectaculo", autor: "Aka", img: image2, id: 2},
        {titulo: "Consorcio CHJ", body: "55 años de la creación del consorcio CHJ", autor: "daviddrm52", img: image3, id: 3}
    ]);

    return (
        <div className="Inicio">
            { blogs.map((blog) => {
                return (
                    <div className="blog-preview" key={ blog.id }>
                        <h2>{ blog.titulo }</h2>
                        <p>Escrito por { blog.autor }</p>
                        <h4>{ blog.body }</h4>
                        <img src={ blog.img } alt="dingus"/>
                    </div>
                );
            }) }

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
