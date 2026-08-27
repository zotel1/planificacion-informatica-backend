🐱‍👤 PokeAPI - Backend

Backend de la aplicación PokeAPI, desarrollado con Node.js y Express.

El proyecto tiene como objetivo desarrollar una API REST desde cero, aplicando conceptos fundamentales del desarrollo backend y del protocolo HTTP.

Durante el desarrollo se trabajarán conceptos como creación de rutas, métodos HTTP, códigos de estado, cabeceras, middlewares y manejo de CORS.

🚀 Tecnologías
Node.js — entorno de ejecución de JavaScript.
Express — framework para el desarrollo de la API REST.
JavaScript — lenguaje utilizado para desarrollar el backend.
HTTP / HTTPS — protocolos de comunicación.
Git / GitHub — control de versiones y trabajo colaborativo.
📚 Conceptos aplicados

El proyecto está basado en los contenidos trabajados en el Capítulo 2, donde se desarrolla una API utilizando Node.js y Express.

Entre los principales conceptos se encuentran:

Protocolo HTTP.
Métodos HTTP (GET, POST, PUT, PATCH, DELETE).
Creación y organización de rutas.
Parámetros de URL.
Query parameters.
Códigos de estado HTTP.
Cabeceras HTTP.
Manejo de solicitudes y respuestas.
Middleware.
CORS (Cross-Origin Resource Sharing).
Diferencias entre HTTP y HTTPS.
Migración de métodos nativos de Node.js hacia Express.
Manejo básico de errores.
📋 Funcionalidades

La API permitirá gestionar información relacionada con Pokémon.

Entre las funcionalidades previstas se encuentran:

📋 Obtener un listado de Pokémon.
🔎 Buscar un Pokémon específico.
➕ Crear nuevos registros.
✏️ Modificar información existente.
🗑️ Eliminar registros.
🔍 Filtrar información mediante parámetros.
⚠️ Gestionar errores y devolver códigos de estado HTTP apropiados.
🔌 Endpoints

Los endpoints serán definidos durante el desarrollo del proyecto.

Ejemplo de estructura:

GET    /api/pokemon
GET    /api/pokemon/:id
POST   /api/pokemon
PUT    /api/pokemon/:id
PATCH  /api/pokemon/:id
DELETE /api/pokemon/:id
Ejemplo de respuesta
{
    "id": 25,
    "name": "Pikachu",
    "type": "electric"
}

Los endpoints y estructuras definitivas pueden modificarse a medida que avance el proyecto.

📁 Estructura del proyecto
backend/
│
├── src/
│   ├── routes/
│   ├── controllers/
│   ├── middlewares/
│   ├── services/
│   └── app.js
│
├── server.js
├── package.json
└── README.md

La estructura podrá evolucionar durante el desarrollo a medida que se incorporen nuevas funcionalidades.

⚙️ Instalación

Clonar el repositorio:

git clone <URL_DEL_REPOSITORIO>

Ingresar al directorio del backend:

cd backend

Instalar las dependencias:

npm install

Iniciar el servidor:

npm start

Durante el desarrollo también se puede utilizar:

npm run dev

El servidor estará disponible, por defecto, en:

http://localhost:3000
🌐 Comunicación con el Frontend

El backend proporcionará una API REST que será consumida por el frontend desarrollado con HTML, CSS y JavaScript.

┌─────────────────────────┐
│       FRONTEND          │
│    HTML + CSS + JS      │
└────────────┬────────────┘
             │
             │ HTTP Requests
             ▼
┌─────────────────────────┐
│        BACKEND          │
│    Node.js + Express    │
└────────────┬────────────┘
             │
             ▼
        Datos Pokémon

Debido a que frontend y backend pueden ejecutarse en diferentes orígenes, se implementará el manejo de CORS para permitir la comunicación entre ambos.

🛡️ Manejo de errores

La API utilizará códigos de estado HTTP apropiados para informar el resultado de cada operación.

Algunos ejemplos:

200 OK
201 Created
204 No Content
400 Bad Request
404 Not Found
500 Internal Server Error

Las respuestas de error tendrán una estructura consistente para facilitar su interpretación desde el frontend.

🌿 Flujo de trabajo con Git

Cada integrante deberá trabajar en una rama independiente.

Ejemplo:

git checkout -b feature/pokemon-routes

Después de completar una funcionalidad:

git add .
git commit -m "feat: agregar rutas de pokemon"
git push origin feature/pokemon-routes

Finalmente, se realizará un Pull Request hacia la rama principal.

👥 Trabajo colaborativo

El backend será desarrollado de manera colaborativa.

Las tareas podrán dividirse en diferentes áreas, por ejemplo:

Rutas y endpoints.
Controladores.
Middlewares.
Manejo de errores.
CORS.
Lógica relacionada con Pokémon.
Integración con el frontend.
Documentación.
📌 Estado del proyecto

🚧 En desarrollo

Este proyecto se encuentra en desarrollo y forma parte de un trabajo práctico grupal.

La estructura, endpoints y funcionalidades pueden modificarse durante el proceso de desarrollo.