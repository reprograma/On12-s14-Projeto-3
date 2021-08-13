const express = require("express")
const app = express()


const db = require('./src/data/database')
db.connect()

app.use(express.json())

const estudioRouter = require('./src/routes/estudio.routes')
app.use('/estudio', estudioRouter)

const tituloRouter = require('./src/routes/titulo.routes')
app.use('/titulo', tituloRouter)

/* const estudioController = require('./src/controllers/estudioControllers')
app.use('/estudio', estudioController)

const tituloController = require('./src/controllers/tituloControllers')
app.use('titulo', tituloController)
 */

app.listen(8080, () => console.log('servidor rodando perfeitamente na porta 8080'))

