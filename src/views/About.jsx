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
                        Este proyecto es una simulación de una aplicación para chatear realizada como proyecto final de la
                        Diplomatura en Desarrollo Full Stack de la UTN. <br />
                        Si bien se trata de un proyecto académico, fue diseñado buscando replicar funcionalidades y estilos
                        de aplicaciones de chat reales, con una interfaz clara y ordenada.
                    </p>
                </div>
                <div className="about-info-grid">

                    <div className="tecnic-desc">
                        <div className="tecnic-header">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="#B8BEDA" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 10h3V7L6.5 3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1-3 3l-6-6a6 6 0 0 1-8-8z" /></svg>
                            <h4>
                                Tecnologías utilizadas
                            </h4>
                        </div>
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
                    <div className="tecnic-desc right-containers">
                        <div className="tecnic-header">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="#B8BEDA" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7h3a1 1 0 0 0 1-1V5a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-1a2 2 0 0 0-4 0v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a2 2 0 0 0 0-4H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1" /></svg>
                            <h4>
                                Partes principales
                            </h4>
                        </div>

                        <ul>
                            <li>Registro e inicio de sesión con validaciones de datos.</li>
                            <li>Visualización de usuarios disponibles para conversar.</li>
                            <li>Interfaz principal donde se envían y reciben mensajes.</li>
                        </ul>
                    </div>
                    <div className="tecnic-desc">
                        <div className="tecnic-header">
                            <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 20 20"><path fill="#B8BEDA" d="M15 11q.221 0 .435.023c.2.022.355.178.397.373l.222 1.036a.5.5 0 0 0 .642.37l1.006-.325a.46.46 0 0 1 .52.156q.26.352.439.758a.465.465 0 0 1-.125.529l-.785.709a.5.5 0 0 0 0 .742l.785.708a.465.465 0 0 1 .125.53q-.178.405-.439.757a.465.465 0 0 1-.52.157l-1.006-.326a.5.5 0 0 0-.642.371l-.222 1.034a.47.47 0 0 1-.397.374a4 4 0 0 1-.873 0a.465.465 0 0 1-.396-.373l-.22-1.035a.5.5 0 0 0-.643-.37l-1.006.325a.46.46 0 0 1-.52-.157a4 4 0 0 1-.44-.758a.46.46 0 0 1 .126-.529l.785-.708a.5.5 0 0 0 0-.742l-.785-.71a.46.46 0 0 1-.125-.528q.179-.406.438-.758a.46.46 0 0 1 .52-.156l1.007.326a.5.5 0 0 0 .642-.371l.22-1.036a.465.465 0 0 1 .397-.373Q14.778 11 15 11m0 3a1 1 0 1 0 0 2a1 1 0 0 0 0-2M7.499 1q.455 0 .892.063l.288.045l.073.02a.5.5 0 0 1 .326.368l.395 1.844a.5.5 0 0 0 .642.37l1.792-.58l.073-.018a.5.5 0 0 1 .461.168c.51.598.915 1.29 1.184 2.046a.5.5 0 0 1-.137.538l-1.4 1.265a.5.5 0 0 0 0 .742l1.4 1.264a.5.5 0 0 1 .137.538a6.5 6.5 0 0 1-1.184 2.046a.5.5 0 0 1-.534.15l-1.792-.58a.5.5 0 0 0-.642.371l-.395 1.843a.5.5 0 0 1-.4.388q-.57.107-1.18.109c-.404 0-.8-.04-1.18-.11a.5.5 0 0 1-.4-.387l-.393-1.843a.5.5 0 0 0-.642-.37l-1.793.58a.5.5 0 0 1-.534-.151a6.5 6.5 0 0 1-1.184-2.046a.5.5 0 0 1 .137-.538l1.4-1.264a.5.5 0 0 0 .072-.661l-.072-.081l-1.4-1.265a.5.5 0 0 1-.137-.538A6.5 6.5 0 0 1 2.556 3.28l.052-.052a.5.5 0 0 1 .482-.098l1.793.58a.5.5 0 0 0 .642-.37l.394-1.844l.021-.072a.5.5 0 0 1 .377-.316Q6.891 1.001 7.5 1m0 1q-.342 0-.674.043l-.321 1.506a1.5 1.5 0 0 1-1.93 1.113L3.11 4.188q-.407.537-.676 1.166L3.58 6.387l.116.116a1.5 1.5 0 0 1-.116 2.11L2.434 9.645c.178.417.406.808.676 1.165l1.464-.472a1.5 1.5 0 0 1 1.93 1.113l.321 1.504q.333.043.674.045q.34-.002.673-.045l.322-1.504a1.5 1.5 0 0 1 1.93-1.113l1.462.473c.27-.358.498-.749.675-1.166L11.42 8.613a1.5 1.5 0 0 1 0-2.226l1.142-1.033a5.5 5.5 0 0 0-.675-1.166l-1.462.474a1.5 1.5 0 0 1-1.93-1.113l-.322-1.506A6 6 0 0 0 7.499 2m0 3.25a2.25 2.25 0 1 1 0 4.5a2.25 2.25 0 0 1 0-4.5m0 1a1.25 1.25 0 1 0 .002 2.501A1.25 1.25 0 0 0 7.5 6.25" /></svg>
                            <h4>
                                Funcionamiento interno
                            </h4>
                        </div>
                        <p>
                            Si no hay sesión activa, el usuario es redirigido al login.
                        </p>
                        <p>
                            Los datos y mensajes se guardan en localStorage para mantener la sesión tras recargar.
                        </p>
                        <p>
                            Una vez logueado, puede chatear o agregar nuevos contactos.
                        </p>
                    </div>
                    <div className="tecnic-desc right-containers">
                        <div className="tecnic-header">
                            <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 48 48"><defs><mask id="IconifyId19c9507135e9d6dd01"><g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><path stroke-linecap="round" d="M22 9H11a3 3 0 0 0-3 3v21h32V22" /><path fill="#555" d="M4 33h40v2a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6z" /><path stroke-linecap="round" d="m33 7l-4 4l4 4m6-8l4 4l-4 4" /></g></mask></defs><path fill="#B8BEDA" d="M0 0h48v48H0z" mask="url(#IconifyId19c9507135e9d6dd01)" /></svg>
                            <h4>
                                Desiciones de desarrollo
                            </h4>
                        </div>
                        <ul>
                            <li>
                                Aplicación separada en componentes específicos (Aside, Chats).
                            </li>
                            <li>
                                Un archivo CSS por componente.
                            </li>
                            <li>
                                Página de error 404 personalizada.
                            </li>
                            <li>
                                Diseño responsive.
                            </li>
                        </ul>
                    </div>
                    <div className="tecnic-desc">
                        <div className="tecnic-header">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path d="M16.5 7.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2z" /><path stroke="#B8BEDA" stroke-linecap="square" stroke-width="2" d="M16.5 7.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0ZM20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2z" /></g></svg>
                            <h4>
                                Observaciones personales
                            </h4>
                        </div>

                        <p>
                            Fue un proyecto desafiante que me permitió aplicar conocimientos y aprender nuevas funcionalidades,
                            como el manejo de imágenes en formato string.
                        </p>
                    </div>
                    <div className="tecnic-desc right-containers">
                        <div className="tecnic-header">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="#B8BEDA" stroke-width="1.5"><path d="M16 15a7 7 0 1 1-14 0a7 7 0 0 1 14 0Z" /><path stroke-linecap="round" stroke-linejoin="round" d="m12 8.5l-.531-1.329c-.16-.397-.24-.596-.346-.761a2 2 0 0 0-1.288-.872C9.643 5.5 9.428 5.5 9 5.5s-.643 0-.835.038a2 2 0 0 0-1.288.872c-.107.165-.186.364-.345.761L6 8.5" /><path stroke-linecap="round" d="M22 7.5L20.5 6m0 0L19 4.5M20.5 6L19 7.5M20.5 6L22 4.5" /><path stroke-linecap="round" stroke-linejoin="round" d="M17 6c-3 0-2.59-2.56-5.14-3.733C9.62 1.237 8.77 3.407 9.052 5" /></g></svg>
                            <h4>
                                Dificultades
                            </h4>
                        </div>

                        <p>
                            Una de las mayores desafíos fue guardar en los datos y mensajes de los usuarios en el almacenamiento interno del navegador para que, al recargar la página, estos datos no desaparezcan.
                        </p>
                    </div>
                </div>

            </section>
            <footer className="about-footer">
                <a href="/login">Iniciar sesion</a>
                <a href="/register">Registrarse</a>
                <a href="https://github.com/mai-vr/proyecto-final-frontend.git">Repositorio</a>
            </footer>

        </>
    )
}

export { About }