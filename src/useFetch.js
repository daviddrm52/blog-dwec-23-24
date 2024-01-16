import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [magna, setMagna] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout( () => {
            fetch(url)
            .then(resultado => {
                console.log(resultado);
                if(!resultado.ok){
                    throw Error('No se ha podido recuperar la información');
                }
                return resultado.json();
            })
            .then(datos => {
                setMagna(datos);
                setCargando(false);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                setCargando(false);
            })
        }, 750);
    }, [url]);
    return {magna, cargando, error}
}

export default useFetch;