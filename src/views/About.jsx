import chatLogo from '../assets/chat.png'
import '../styles/about.css'

const About = () => {
    return (
        <>
            <section className="about">
                <div className="main-container">
                    <div className="logo-app">
                        <img src={chatLogo} alt="logo" />
                        <h2>
                            Chat App
                        </h2>
                    </div>
                    <p>
                        Este proyecto es una simulación de una aplicación para chatear realizada como proyecto final de la diplomatura en desarrollo Full Stack (UTN).
                    </p>
                </div>
                <div className="general-desc" id="main-parts">
                    <h4>
                        Partes principales
                    </h4>
                    <p>
                        En esta aplicación el usuario debe iniciar sesión o registrarse en caso de no tener una cuenta para poder acceder a las conversaciones con sus contactos. Asimismo, puede agregar nuevos si lo desea.<br></br>
                        La totalidad de la aplicación mantiene un estilo uniforme elegante y profesional basado en una gama de colores fríos.
                    </p>
                </div>
                <div className="extra-info-container">
                    <div className="tecnic-desc" id="languages-used">
                        <h4>
                            Tecnologías utilizadas
                        </h4>
                        <ul>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 8 8"><path fill="#B8BEDA" d="m1 7l3 1l3-1l1-7H0m1 1h6v1H2.5L3 3h3.5L6 6H2V5h3V4H2" /></svg>
                                HTML
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 8 8"><path fill="#B8BEDA" d="m1 7l3 1l3-1l1-7H0m1.5 3H5l.5-1H1V1h6L6 6H2V5h3V4H1.5" /></svg>
                                CSS
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 16 16"><path fill="#B8BEDA" fill-rule="evenodd" d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM9.053 7.596v3.127l-.007 1.752q0 .498-.186.752t-.556.263q-.342 0-.528-.234q-.185-.234-.185-.684v-.175H6.37v.185q0 .665.253 1.113q.255.45.703.674q.44.225 1.016.225q.88 0 1.406-.498q.527-.498.527-1.485l.007-1.752V7.596zm3.808-.108q-.585 0-1.006.244a1.67 1.67 0 0 0-.634.674a2.1 2.1 0 0 0-.225.996q0 .753.293 1.182q.303.42.967.732l.469.215q.438.186.625.43q.185.244.185.635q0 .478-.166.703q-.156.224-.527.224q-.361.001-.547-.244q-.186-.243-.205-.752h-1.162q.02.996.498 1.524q.479.527 1.386.527q.909 0 1.417-.518q.507-.517.507-1.484q0-.81-.332-1.289t-1.045-.79l-.449-.196q-.39-.166-.556-.381q-.166-.214-.166-.576q0-.4.165-.596q.177-.195.508-.195q.361 0 .508.234q.156.234.176.703h1.123q-.03-.976-.498-1.484q-.47-.518-1.309-.518" /></svg>
                                JavaScript
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="#B8BEDA" d="M12 10.11c1.03 0 1.87.84 1.87 1.89c0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a23 23 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86c.27.06.57.11.88.16zm6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16zm1.45-7.05c1.47.84 1.63 3.05 1.01 5.63c2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63c-1.46.84-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.38 1.95c-1.46-.84-1.62-3.05-1-5.63c-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63c1.47-.84 3.46.12 5.38 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26c2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26c-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16c-.07-.28-.18-.57-.29-.86zm-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7c.64-.35.83-1.82.32-3.96c-.77.16-1.58.28-2.4.36c-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16c.07.28.18.57.29.86zm2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a23 23 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9" /></svg>
                                React
                            </li>
                        </ul>
                    </div>
                    <div className="tecnic-desc">
                        <h4>
                            Especificidades
                        </h4>
                        <p>
                            Al momento de entrar a la aplicación automaticamente se redirije al usuario a la página de inicio de sesión para que no pueda acceder si no tiene una cuenta. Allí se validan los datos ingresados guardados
                            en el almacenamiento interno del navegador y se muestra la página con los chats.
                        </p>
                        <p>
                            En la parte superior de la barra lateral existen dos opciones:
                        </p>
                        <ul>
                            <ol>
                                Cerrar sesión - se encarga de borrar el email y la contraseña ingresados por el usuario del almacenamiento interno.
                            </ol>
                            <ol>
                                Agregar contactos - añade un nuevo contacto a la lista de usuarios pre definida por el mock de la API. Para poder renderizar su
                                foto de perfil se utiliza base64 que transforma en string la imagen y permite renderizarla posteriormente en la seccion 'aside'.
                            </ol>
                        </ul>
                        <p>
                            En caso de no poseer una cuenta, el usuario puede registrarse ingresando sus datos (obligatorios y con validaciones de caracteres mínimos), que serán guardados en el
                            almacenamiento interno para mantener la sesión iniciada.
                        </p>
                        <p>
                            Se incluyó una página en caso de que la url ingresada no sea correcta. En esta se incluyen tres botones que redirijen al usuario a una página válida.
                        </p>
                    </div>
                    <div className="tecnic-desc">
                        <h4>
                            Organización
                        </h4>
                        <p>
                            El proyecto se dividió en los componentes Aside y Chats para organizar mejor las responsabilidades.
                            Cada página también es un componente con una función específica. Además, se creó un archivo '.css'
                            por componente para mantener los estilos ordenados y facilitar su mantenimiento.
                        </p>
                    </div>
                    <div className="tecnic-desc">
                        <h4>
                            Observaciones personales
                        </h4>
                        <p>
                            Personalmente este proyecto significó un gran desafío que me permitió poner en práctica la teoría vista hasta el momento
                            como así también implicó investigar y aprender sobre otras funcionalidades útiles (como convertir una imagen a string).
                        </p>
                    </div>
                    <div className="tecnic-desc">
                        <h4>
                            Dificultades
                        </h4>
                        <p>
                            Una de las mayores desafíos fue guardar en los datos y mensajes de los usuarios en el almacenamiento interno del navegador para que, al recargar la página, estos datos no desaparezcan.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export { About }