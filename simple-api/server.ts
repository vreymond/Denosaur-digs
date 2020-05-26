// Import the oak utils for app and router. Oak works similar than Express in Node, we are using the version 4.0.0 of oak
import { Application, Router } from 'https://deno.land/x/oak@v4.0.0/mod.ts'

// Let use the host parameters, but we set default values
const PORT = 8000
const HOST = 'localhost'

// Start instances of app and router
const app = new Application()
const router = new Router()

// This API will have only an get method
router.get('/api', (context) => {
  context.response.body = 'Hello from Deno API!'
})

// We let the app use the routes define above
app.use(router.routes())
app.use(router.allowedMethods())

// Start the app in the host and the port setted
const HOST_PORT = `${HOST}:${PORT}`
console.log(`Listen on ${HOST_PORT}`)
app.listen(HOST_PORT)