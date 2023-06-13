const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

const app = express()
//Importamos las rutas con los controladores
const routes = require('./src/routes/routes')

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use('/', routes)

//El puerto el donde funcionara la pagina
app.listen(6000, () => {
    console.log("Listen on the port 6000...");
});