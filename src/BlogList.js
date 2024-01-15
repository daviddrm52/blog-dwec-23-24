const BlogList = ({blogs, titulo}) => {

    // const blogs = props.blogs;
    // const titulo = props.titulo;

    return ( 
        <div className="blog-list">
            <h2>{ titulo }</h2>
            { blogs.map((blog) => {
                return (
                    <div className="blog-preview" key={ blog.Matricula }>
                        <h2>{ blog.Matricula }</h2>
                        <p><b>Modelo: </b> { blog.Modelo }</p>
                        <p><b>Capacidad: </b> { blog.Capacidad }</p>
                        <p><b>Edad del avión: </b> { blog.Años } años.</p>
                        <p><b>Nombre del avión: </b> { blog.Nombre }</p>
                        <p><b>Estado del avión: </b> { blog.Estado }</p>
                        <p><b>Pintura aplicada: </b> { blog.Librea }</p>
                        <p><b>Estado actual: </b> { blog.Estado_actual }</p>
                    </div>
                    // <div className="blog-preview" key={ blog.id }>
                    //     <h2>{ blog.titulo }</h2>
                    //     <p>Escrito por { blog.autor }</p>
                    //     <h4>{ blog.body }</h4>
                    //     <img src={ blog.img } alt="dingus"/>
                    //     <p> <button onClick={ () => handleEliminaBlog(blog.id) }>Elimina el blog { blog.titulo }</button> </p>
                    // </div>
                );
            }) }
        </div>
    );
}
 
export default BlogList;

/*
 * /blogs:      GET: Devuelve todos los blogs
 * /blogs/{id}  GET: Devuelve solo un blog
 * /blogs:      POST: Añade un nuevo blog
 * /blogs/{id}  DELETE: Elimina un blog
 */