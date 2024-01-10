const BlogList = ({blogs, titulo, handleEliminaBlog}) => {

    // const blogs = props.blogs;
    // const titulo = props.titulo;

    return ( 
        <div className="blog-list">
            <h2>{ titulo }</h2>
            { blogs.map((blog) => {
                return (
                    <div className="blog-preview" key={ blog.id }>
                        <h2>{ blog.titulo }</h2>
                        <p>Escrito por { blog.autor }</p>
                        <h4>{ blog.body }</h4>
                        <img src={ blog.img } alt="dingus"/>
                        <p> <button onClick={ () => handleEliminaBlog(blog.id) }>Elimina el blog { blog.titulo }</button> </p>
                    </div>
                );
            }) }
        </div>
    );
}
 
export default BlogList;