# Frontend

Aplicacion creada en la version [Angular CLI](https://github.com/angular/angular-cli) version 16.0.2.

# Description

Aplicacion creada con Angular Framework y Node.js, para realizar un basico de muro log in y creacion de usuario con respectivos filtros. Usando Figma para Mockup. Bootstrap para el Grid y manejo de espacios, Css para configurar colores.

## Installation

Descarga o clona el projecto y en consola `npm install`, asi se instala todas las dependencias del proyecto.

## Development frontend

Para correr la aplicacion en consola `ng serve` . Abre un navegador y viaja a `http://localhost:4200/`.

## Installation Backend

Luego Descarga o clona el projecto de backend tambien ponemos en consola `npm install`, para instalar dependecias.

## Development backend
Opcion 1
Crear una Base de datos en Docker sin necesidad de docker-compose `docker run -d -p 27017:27017 --name NOMBRE BASE DE DATOS -v mongo-data:/data/db -e MONGODB_INITDB_ROOT_USERNAME=root -e MONGODB_INITDB_ROOT_PASSWORD=123abc mongo:latest`
Configuramos en nuestro app.js de nuestro projecto Node.js, la coneccion a la base de datos, por defecto dejare una base de datos realizada con mongodb Atlas.
En Consola `npm run start`. Para correr el proyecto `http://localhost:3000/`.


Opcion 2
Si tienes Docker Instalado, puedes configurar el `Dockerfile` con las respectivas carpetas que se usa segun su computadora recordar que mac, linux y windows tienes configuraciones diferentes
Al configurar este archivo podemos en una linea de comandos `docker-compose up` donde levantarameos los servicios de node y mongoDB

