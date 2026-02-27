# Chat App

Este proyecto es una simulación de una aplicación para chatear realizada como proyecto final de la Diplomatura en Desarrollo Full Stack de la UTN.
Si bien se trata de un proyecto académico, fue diseñado buscando replicar funcionalidades y estilos de aplicaciones de chat reales, con una interfaz clara y ordenada.

---

## Sobre la app

**_/login_**
Al ingresar a la página el usuario es automaticamente redirijido a iniciar sesión en donde puede ingresar su correo y contraseña en caso de tener una cuenta o utilizar el usuario por defecto a fin de optimizar este paso: 
> Correo: timothee@gmail.com
> Contraseña: pepe123

**_/register_**
En caso de no poseer cuenta, el usuario se puede registrar compleando los campos requeridos (los cuales cuentan con validaciones básicas). 
**_/_**
Finalmente, se ingresa a la página principal de la aplicación donde se encuentran los contactos con los que puede chatear y cuyos mensajes persistiran al recargar la página.
En la parte superior del componente Aside se encuentran dos botones: uno para cerrar sesión y otro para agregar un nuevo contacto.
**_/notfound_**
En caso de ingresar un path que no sea correcto existe una página de error 404 con opciones sobre cómo seguir para mejorar la experiencia del usuario.
**_/about_**
En la página /about se encuentra una descripción general del proyecto, dificultades encontradas y observaciones personales. 
La totalidad del proyecto cuenta con una estética basada en colores fríos y oscuros en general que se mantiene uniforme en toda la aplicación. 

## Tecnologías utilizadas
- HTML - Maquetación del sitio web.
- CSS - Estilos de cada componente del sitio.
- JavaScript - Lógica interna y manipulación de datos.
- React - Uso de estados y funciones globales, desarrollo de interfaces dinámicas.

## Instalación
Para ejecutar el proyecto de manera local es necesario primero clonar el respositorio: 
```
git clone https://github.com/mai-vr/proyecto-final-frontend.git
```
Luego, ingresar a la carpeta del archivo con:
```
cd proyecto-final-frontend
```
Despues es necesario instalar las dependencias con:
```
npm install
```
Por último ejecutar el proyecto en el navegador:
```
npm run dev
```

## Deploy en Vercel
La aplicación se desplegó utilizando Vercel, una plataforma de hosting.
Para realizar el deploy es necesario:
1. Crear una cuenta en [Vercel](https://vercel.com)
2. Vincular la cuenta de GitHub e importar el repositorio del proyecto.
3. Hacer click en 'deploy'.
Una vez hecho esto, Vercel genera una URL pública para ver el proyecto.
[Proyecto desplegado](https://chat-app-nine-xi-50.vercel.app/login)


## Estructura del proyecto
La carpeta src contiene el siguiente código fuente:
``` bash
src:.
├───assets - Contiene imágenes como la foto de perfil por defecto y el logo de la aplicación.
├───components - Los módulos principales de mi página web (Aside y Chats).
├───context - Define funciones y estados que necesito que toda mi aplicación conozca y/o utilice. Además, actualiza valores en toda la página ya que gestiona estados globales.
├───router - Debido a que React es una SPA (Single Page Application) esta carpeta genera una navegación dinámica.
├───services - Es un archivo de apoyo que simula una API de usuarios y de usuarios que han iniciado sesión.
├───styles - Cada view o página posee un archivo de estilos específico para que el proyecto sea organizado y mantenible a futuro.
└───views - Componentes de página de la aplicación. Se encuentra el formulario de inicio de sesión, de registro, para agregar un contacto, la página de error 404 y la página principal de mi aplicación.
```
Debido a la utilización de una librería para generar navegación dinámica en el proyecto, en el archivo 'main.jsx' se renderiza cada componente de página dependiendo de la ruta seleccionada.

---

## Escalabilidad
Este proyecto fue pensado para poder crecer en el futuro. Más adelante se podría agregar una base de datos para guardar la información de los contactos y de los usuarios que inicien sesión. También se podría permitir chatear en tiempo real con otras personas. Además, podría desarrollarse una versión para dispositivos móviles, para que sea más fácil acceder a la aplicación.

