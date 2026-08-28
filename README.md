# 🐱‍👤 PokeAPI - Backend

Backend de una aplicación Pokédex desarrollado con **Node.js**, **Express** y **JavaScript**.

Este proyecto forma parte de un trabajo práctico académico y tiene como objetivo aplicar conceptos fundamentales de desarrollo backend, APIs REST, protocolo HTTP, trabajo colaborativo con Git/GitHub e integración con servicios externos.

El backend funcionará como intermediario entre el frontend de la aplicación y la **PokeAPI oficial**.

---

## 🎯 Objetivo del proyecto

El objetivo principal es desarrollar una API REST propia que pueda ser consumida por un frontend desarrollado con HTML, CSS y JavaScript.

El frontend **no consumirá directamente la PokeAPI oficial**.

La comunicación prevista será:

```text
Frontend
HTML + CSS + JavaScript
        │
        │ HTTP
        ▼
Backend propio
Node.js + Express
        │
        │ HTTP / fetch
        ▼
PokeAPI oficial
```

Nuestro backend será responsable de:

* recibir solicitudes del frontend;
* consultar la PokeAPI oficial;
* procesar los datos obtenidos;
* seleccionar únicamente la información necesaria;
* devolver respuestas JSON al frontend;
* manejar errores;
* utilizar códigos de estado HTTP apropiados;
* permitir la comunicación con el frontend mediante CORS.

En una etapa posterior se evaluará incorporar **MySQL** para persistir información propia de la aplicación.

---

## 📚 Objetivos académicos

Durante el desarrollo se busca aprender y aplicar:

* Node.js.
* JavaScript en backend.
* ES Modules.
* Protocolo HTTP.
* Request y Response.
* Métodos HTTP.
* Códigos de estado.
* Cabeceras HTTP.
* Creación de servidores.
* Express.
* Rutas.
* Parámetros de URL.
* Query parameters.
* Middlewares.
* CORS.
* Consumo de APIs externas.
* Manejo de errores.
* APIs REST.
* Git.
* GitHub.
* Ramas.
* Commits.
* Pull Requests.
* Trabajo colaborativo.

---

## 🎓 Material de aprendizaje

Como material introductorio para el equipo backend se utilizará un tutorial de Midudev sobre desarrollo de APIs REST con Node.js y Express.

El tutorial permitirá que los integrantes se familiaricen progresivamente con:

```text
HTTP
↓
Request / Response
↓
Servidor con Node.js
↓
Métodos HTTP
↓
Códigos de estado
↓
Cabeceras
↓
Express
↓
Rutas
↓
Middlewares
↓
CORS
↓
API REST
```

Los desarrolladores deberán reproducir inicialmente los ejemplos del tutorial para comprender los conceptos antes de aplicarlos al proyecto grupal.

El código definitivo del proyecto utilizará **ES Modules**.

---

# 🚀 Tecnologías

## Backend

* Node.js.
* Express.
* JavaScript.
* ES Modules.

## APIs

* PokeAPI.

## Base de datos

En una etapa posterior se evaluará incorporar:

* MySQL.

## Herramientas de trabajo

* Git.
* GitHub.
* Trello.
* Postman, Thunder Client o herramientas equivalentes para probar endpoints.

---

# 🏗️ Arquitectura prevista

La primera versión funcional seguirá esta arquitectura:

```text
┌─────────────────────────┐
│        FRONTEND         │
│                         │
│ HTML + CSS + JavaScript │
└────────────┬────────────┘
             │
             │ HTTP Request
             ▼
┌─────────────────────────┐
│         BACKEND         │
│                         │
│    Node.js + Express    │
└────────────┬────────────┘
             │
             │ fetch()
             ▼
┌─────────────────────────┐
│     PokeAPI oficial     │
└─────────────────────────┘
```

El frontend deberá comunicarse únicamente con nuestro backend.

Por ejemplo:

```text
Frontend
GET /api/pokemon/pikachu
        │
        ▼
Nuestro backend
        │
        ▼
https://pokeapi.co/api/v2/pokemon/pikachu
```

El backend obtendrá la información desde PokeAPI, procesará la respuesta y devolverá al frontend solamente los datos necesarios.

---

# 🔄 Flujo de una petición

Ejemplo de una consulta de Pokémon:

```text
1. El usuario busca "Pikachu" en el frontend.

2. El frontend realiza:

GET /api/pokemon/pikachu

3. Nuestro backend recibe la solicitud.

4. El backend consulta:

https://pokeapi.co/api/v2/pokemon/pikachu

5. PokeAPI devuelve los datos.

6. Nuestro backend procesa la información.

7. Nuestro backend devuelve un JSON simplificado.

8. El frontend muestra la información.
```

Ejemplo de respuesta de nuestra API:

```json
{
  "id": 25,
  "name": "pikachu",
  "image": "URL_DE_LA_IMAGEN",
  "height": 4,
  "weight": 60,
  "types": [
    "electric"
  ],
  "stats": {
    "hp": 35,
    "attack": 55,
    "defense": 40,
    "speed": 90
  }
}
```

La estructura definitiva podrá modificarse según las necesidades del frontend.

---

# 🔌 Endpoints previstos

Los endpoints definitivos serán definidos durante el desarrollo.

Algunos ejemplos posibles son:

```http
GET /api/pokemon
```

Obtener un listado de Pokémon.

```http
GET /api/pokemon/:id
```

Buscar un Pokémon por ID.

```http
GET /api/pokemon/:name
```

Buscar un Pokémon por nombre.

También podrán incorporarse filtros utilizando query parameters.

Por ejemplo:

```http
GET /api/pokemon?limit=20&offset=0
```

La estructura definitiva de endpoints será acordada entre el equipo backend y las necesidades del frontend.

---

# 🗄️ Persistencia y MySQL

La primera etapa del proyecto no requerirá necesariamente una base de datos.

Inicialmente se priorizará comprender:

```text
Frontend
↓
Backend
↓
PokeAPI
```

Posteriormente se evaluará incorporar MySQL para almacenar información propia de la aplicación.

Algunas posibilidades futuras podrían ser:

* Pokémon favoritos.
* Pokémon guardados.
* Equipos Pokémon.
* Colecciones personalizadas.

Estas funcionalidades todavía no forman parte del alcance inicial y deberán ser definidas antes de implementarse.

---

# 🧩 CRUD

Durante el aprendizaje se trabajarán los principales métodos HTTP:

```text
GET
POST
PUT
PATCH
DELETE
```

Esto permitirá comprender cómo funciona un CRUD dentro de una API REST.

El CRUD definitivo del proyecto será definido posteriormente.

Los Pokémon oficiales obtenidos desde PokeAPI serán principalmente datos de consulta.

En caso de incorporar MySQL, el CRUD podrá aplicarse sobre información propia de nuestra aplicación.

---

# 🛡️ Manejo de errores

La API utilizará códigos de estado HTTP apropiados.

Entre ellos:

```text
200 OK
201 Created
204 No Content
400 Bad Request
404 Not Found
500 Internal Server Error
```

También se deberán manejar posibles errores provenientes de la PokeAPI oficial.

Ejemplo:

```json
{
  "error": "Pokemon no encontrado"
}
```

Las respuestas de error deberán mantener una estructura consistente.

---

# 🌐 CORS

El frontend y el backend podrán ejecutarse en diferentes orígenes.

Por ejemplo:

```text
Frontend
http://localhost:5500
```

```text
Backend
http://localhost:3000
```

Por esta razón se deberá configurar CORS para permitir la comunicación entre ambos proyectos.

---

# 📁 Estructura inicial del proyecto

La estructura podrá evolucionar durante el desarrollo.

Una estructura inicial posible es:

```text
backend/
│
├── src/
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   ├── middlewares/
│   └── app.js
│
├── server.js
├── package.json
└── README.md
```

No será obligatorio utilizar toda esta estructura desde el primer día.

El proyecto podrá comenzar con una estructura sencilla similar a la utilizada durante el tutorial y evolucionar progresivamente a medida que se incorporen nuevas funcionalidades.

---

# ⚙️ Instalación

Clonar el repositorio:

```bash
git clone <https://github.com/zotel1/planificacion-informatica-backend.git>
```

Ingresar al proyecto:

```bash
cd backend
```

Instalar dependencias:

```bash
npm install
```

Iniciar el servidor:

```bash
npm start
```

Durante el desarrollo:

```bash
npm run dev
```

El servidor estará disponible inicialmente en:

```text
http://localhost:3000
```

---

# 🌿 Estrategia de ramas

El proyecto utilizará tres niveles principales de ramas:

```text
main
 ↑
dev
 ↑
feature/*
```

## main

Contendrá únicamente versiones estables del proyecto.

No se desarrollarán funcionalidades directamente sobre esta rama.

## dev

Será la rama de integración.

Las funcionalidades terminadas y revisadas se incorporarán primero a `dev`.

## feature/*

Cada tarea deberá desarrollarse en una rama independiente.

Las ramas deberán utilizar una convención descriptiva para que cualquier integrante pueda identificar rápidamente qué funcionalidad contiene cada una.

Formato:

```text
feature/BE-XX-descripcion-corta-de-la-tarea
```

Donde:

* `feature` indica que se está desarrollando una funcionalidad;
* `BE` identifica que la tarea corresponde al backend;
* `XX` corresponde al número de la tarea en Trello;
* la última parte describe brevemente qué se está desarrollando.

Ejemplos:

```text
feature/BE-01-crear-servidor-http
feature/BE-02-agregar-express
feature/BE-03-crear-ruta-pokemon
feature/BE-04-buscar-pokemon-por-id
feature/BE-05-consumir-pokeapi
feature/BE-06-configurar-cors
feature/BE-07-manejar-errores
```

El nombre exacto de la rama será indicado dentro de cada tarjeta de Trello para que los desarrolladores principiantes puedan utilizarlo directamente.

---

# 🔄 Flujo de trabajo con Git y GitHub

Cada integrante deberá trabajar utilizando su propia cuenta de GitHub y realizar sus propios commits.

El flujo general será:

```text
dev
 │
 │ crear rama
 ▼
feature/BE-XX-descripcion-corta
 │
 │ desarrollar
 │
 │ commit
 │
 │ push
 ▼
Pull Request
 │
 ▼
dev
 │
 │ integración + pruebas
 ▼
main
```

Antes de comenzar una tarea:

```bash
git checkout dev
```

```bash
git pull origin dev
```

Después deberá crear la rama indicada en la tarjeta de Trello.

Por ejemplo:

```bash
git checkout -b feature/BE-05-consumir-pokeapi
```

El desarrollador realizará toda la tarea dentro de esa rama.

Después de realizar cambios:

```bash
git status
```

Para revisar qué archivos fueron modificados.

Luego:

```bash
git add .
```

Crear un commit descriptivo:

```bash
git commit -m "feat: consumir pokeapi desde el backend"
```

Subir la rama:

```bash
git push origin feature/BE-05-consumir-pokeapi
```

Finalmente deberá crearse un Pull Request hacia:

```text
dev
```

---

# 📝 Convención de commits

Los commits deberán intentar describir claramente qué cambio se realizó.

Ejemplos:

```text
feat: crear servidor http inicial
```

```text
feat: agregar endpoint para buscar pokemon
```

```text
feat: consumir pokeapi desde el backend
```

```text
fix: corregir respuesta cuando pokemon no existe
```

```text
docs: actualizar documentacion de endpoints
```

No se recomienda utilizar mensajes poco descriptivos como:

```text
cambios
```

```text
actualizacion
```

```text
prueba
```

```text
codigo nuevo
```

El objetivo es que el historial de Git permita comprender cómo evolucionó el proyecto y qué aportó cada integrante.

---

# 🔍 Pull Requests

No se deberán subir funcionalidades directamente a `main`.

Cada funcionalidad deberá pasar por:

```text
Desarrollo
↓
Commit
↓
Push
↓
Pull Request
↓
Revisión
↓
Pruebas
↓
Merge a dev
```

Cuando `dev` tenga una versión estable y probada:

```text
dev
↓
Pull Request
↓
main
```

Los desarrolladores no deberán realizar cambios directamente sobre `main`.

---

# ✅ Criterios generales para considerar una tarea terminada

Una tarea no se considerará finalizada solamente porque el código esté escrito.

Como mínimo deberá cumplir:

* funcionalidad implementada;
* código ejecutando sin errores;
* pruebas manuales realizadas;
* códigos de estado HTTP correctos cuando corresponda;
* desarrollo realizado en la rama indicada;
* commits realizados por el desarrollador;
* commits con mensajes descriptivos;
* rama subida a GitHub;
* Pull Request creado hacia `dev`;
* código revisado;
* cambios aprobados;
* documentación actualizada si corresponde.

---

# 📋 Checklist Git para cada tarea

Como los integrantes están aprendiendo Git y GitHub, las tarjetas de Trello incluirán inicialmente un checklist similar al siguiente:

```text
☐ Ir a la rama dev

☐ Actualizar dev con:
   git pull origin dev

☐ Crear la rama indicada en la tarjeta

☐ Comprobar la rama actual con:
   git branch

☐ Desarrollar la tarea

☐ Probar que el código funciona

☐ Revisar cambios con:
   git status

☐ Agregar archivos con:
   git add .

☐ Crear un commit descriptivo

☐ Subir la rama a GitHub

☐ Crear Pull Request hacia dev

☐ Esperar revisión

☐ Corregir observaciones si existen

☐ Realizar merge una vez aprobada
```

A medida que el equipo gane experiencia, este checklist podrá simplificarse.

---

# 👥 Trabajo colaborativo

El backend será desarrollado por un equipo de cuatro integrantes.

El equipo estará compuesto por:

* tres desarrolladores backend;
* un Product Owner que también participará en tareas técnicas.

Todos los integrantes deberán aprender y utilizar:

* Git;
* GitHub;
* ramas;
* commits;
* Pull Requests;
* revisión de código.

El objetivo no es solamente desarrollar el producto, sino también aprender a trabajar de manera colaborativa.

Cada integrante deberá realizar sus propios commits utilizando su propia cuenta.

Esto permitirá que el historial del repositorio refleje claramente la participación individual.

---

# 📋 Gestión de tareas

El trabajo será organizado mediante Trello.

Cada tarjeta podrá contener:

* identificador de tarea;
* título descriptivo;
* descripción;
* responsable;
* prioridad;
* conceptos relacionados;
* nombre exacto de la rama Git;
* criterios de aceptación;
* checklist técnico;
* checklist Git/GitHub;
* pruebas necesarias;
* estado de la tarea.

Ejemplo:

```text
BE-05 — Consumir PokeAPI desde el backend
```

Rama asociada:

```text
feature/BE-05-consumir-pokeapi
```

De esta forma, la tarjeta de Trello y la rama de GitHub estarán directamente relacionadas.

---

# 🔗 Integración con el frontend

El frontend será desarrollado por otro equipo utilizando:

* HTML.
* CSS.
* JavaScript.

El equipo frontend utilizará como material de referencia el tutorial:

**Crea una Pokédex con HTML, CSS y JavaScript (PokéAPI)** de freeCodeCamp Español.

Durante la etapa inicial, el tutorial frontend podrá utilizar llamadas directas hacia PokeAPI como parte del aprendizaje.

Durante la integración del proyecto, esas llamadas deberán reemplazarse por llamadas hacia nuestro backend.

Por ejemplo:

En lugar de:

```javascript
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
```

el frontend utilizará:

```javascript
fetch("http://localhost:3000/api/pokemon/pikachu")
```

Nuestro backend será responsable de consultar PokeAPI y devolver la respuesta necesaria.

---

# 🔄 Relación entre frontend, backend y PokeAPI

El flujo final esperado será:

```text
┌──────────────────────┐
│      FRONTEND        │
│ HTML + CSS + JS      │
└──────────┬───────────┘
           │
           │ GET /api/pokemon/25
           ▼
┌──────────────────────┐
│   NUESTRO BACKEND    │
│ Node.js + Express    │
└──────────┬───────────┘
           │
           │ fetch()
           ▼
┌──────────────────────┐
│   PokeAPI oficial    │
└──────────┬───────────┘
           │
           │ JSON
           ▼
┌──────────────────────┐
│   NUESTRO BACKEND    │
│ procesa los datos    │
└──────────┬───────────┘
           │
           │ JSON simplificado
           ▼
┌──────────────────────┐
│      FRONTEND        │
│ muestra el Pokémon   │
└──────────────────────┘
```

---

# 🛣️ Evolución prevista

El desarrollo se realizará progresivamente.

## Etapa 1 — Fundamentos

```text
Node.js
HTTP
Request / Response
Métodos HTTP
Códigos de estado
```

## Etapa 2 — Express

```text
Express
Rutas
Middlewares
CORS
Manejo de errores
```

## Etapa 3 — API propia

```text
Endpoints propios
Parámetros
Query parameters
Respuestas JSON
```

## Etapa 4 — Integración con PokeAPI

```text
Backend
↓
fetch()
↓
PokeAPI
```

## Etapa 5 — Integración con frontend

```text
Frontend
↓
Nuestra API
↓
PokeAPI
```

## Etapa 6 — Persistencia

Se evaluará incorporar:

```text
MySQL
```

para funcionalidades propias de la aplicación.

---

# 🧪 Testing

Durante las primeras etapas se realizarán pruebas manuales de los endpoints mediante herramientas como:

* Postman;
* Thunder Client;
* navegador cuando corresponda.

Más adelante se evaluará incorporar pruebas automatizadas.

Antes de integrar cambios desde `dev` hacia `main`, se deberá comprobar que las funcionalidades principales funcionan correctamente.

---

# 📌 Estado del proyecto

🚧 **En desarrollo**

Proyecto académico con fecha de entrega final prevista para:

**12 de noviembre de 2026**

La arquitectura, los endpoints y algunas funcionalidades podrán evolucionar durante el desarrollo según los contenidos de la materia y las necesidades de integración con el frontend.
