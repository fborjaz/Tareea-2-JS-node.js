import express from 'express'
import { join, dirname } from "path";
import { fileURLToPath } from "url";

import indexRoutes from './routes/index.js'

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(indexRoutes)

app.use(express.static(join(__dirname, 'public')))


app.listen(3500)
console.log(`Server is listening on por 3500`)
