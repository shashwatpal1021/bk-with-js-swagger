import express from 'express'
import swaggerUi from 'swagger-ui-express'

const { default: swaggerFile } = await import("../swagger_output.json", {
  assert: {
    type: "json",
  },
});


const app = express()
const port = 3000

app.use(express.json(
  { limit: '16kb' }
))

app.use(express.urlencoded(
  { extended: true, limit: '16kb' }
))
app.get('/', (req, res) => res.send('Hello World!'))
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

import userRoutes from "./routes/users.js";

// app.get('/', (req, res) => res.send('Hello World!'))
app.use('/users', userRoutes)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))