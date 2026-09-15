// Importa Express para crear y configurar el servidor
import express from 'express'

// Importa CORS para permitir solicitudes desde otros dominios
import cors from 'cors'

// Importa las rutas relacionadas con el estado de la API
import healthRoutes from './routes/health.routes.js'

// Importa las rutas relacionadas con los Pokémon
import pokemonRoutes from './routes/pokemon.routes.js'

// Importa las rutas relacionadas con los tipos de Pokémon
import typeRoutes from './routes/type.routes.js'

// Importa las rutas relacionadas con la colección del usuario
import collectionRoutes from './routes/collection.routes.js'

// Importa el middleware que se ejecuta cuando no se encuentra una ruta
import { notFound } from './middlewares/notFound.middleware.js'

// Importa el middleware encargado de manejar los errores de la aplicación
import { errorHandler } from './middlewares/error.middleware.js'

// Crea una instancia de la aplicación de Express
const app = express()

// Obtiene los orígenes permitidos desde las variables de entorno
//
// FRONTEND_URL: URL del frontend en desarrollo
// FRONTEND_PRODUCTION_URL: URL del frontend en producción
//
// filter(Boolean) elimina cualquier valor vacío, undefined o null
const allowedOrigins = [
  process.env.FRONTEND_URL,
  process.env.FRONTEND_PRODUCTION_URL
].filter(Boolean)

// Configura CORS para controlar qué aplicaciones pueden realizar
// solicitudes al backend
app.use(
  cors({
    // Esta función se ejecuta cada vez que llega una solicitud
    origin: (origin, callback) => {
      // Permite las solicitudes que no tienen origen, como algunas solicitudes
      // realizadas desde herramientas del backend o aplicaciones locales
      //
      // También permite las solicitudes cuyo origen se encuentra en la lista
      // de orígenes autorizados
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true)
        return
      }

      // Si el origen no está autorizado, se crea un error personalizado
      const error = new Error('Origen no permitido por CORS')

      // Asigna el código de estado HTTP 403, que significa "prohibido"
      error.statusCode = 403

      // Envía el error al siguiente middleware encargado de manejar errores
      callback(error)
    }
  })
)

// Permite que Express interprete los cuerpos de las solicitudes
// que contienen datos en formato JSON
app.use(express.json())

// Registra las rutas relacionadas con la verificación del estado de la API
// Por ejemplo: GET /api/health
app.use('/api/health', healthRoutes)

// Registra las rutas relacionadas con los Pokémon
// Por ejemplo: GET /api/pokemon
app.use('/api/pokemon', pokemonRoutes)

// Registra las rutas relacionadas con los tipos de Pokémon
// Por ejemplo: GET /api/types
app.use('/api/types', typeRoutes)

// Registra las rutas relacionadas con la colección del usuario
// Por ejemplo: GET /api/collection
app.use('/api/collection', collectionRoutes)

// Si ninguna de las rutas anteriores coincide con la solicitud,
// se ejecuta el middleware de recurso no encontrado
app.use(notFound)

// Maneja todos los errores enviados por los middlewares o las rutas
//
// Este middleware debe estar al final para poder capturar
// los errores generados anteriormente
app.use(errorHandler)

// Exporta la aplicación para utilizarla en el archivo principal del servidor
export default app
