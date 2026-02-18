const NotFound = () => {
    return (
        <section className="not-found">
            <h1>
                Error 404
            </h1>
            <h4>
                No se encontró la página
            </h4>
            <div className="next-option">
                <a href='/'>
                    Ir al inicio
                </a>  
                <a href='/login'>
                    Iniciar sesión
                </a>
            </div>
        </section>
    )
}

export { NotFound }