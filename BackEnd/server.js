// ServerJS Avaya SDP Customer Log, communication with Mongo DB Atlas

// Avaya SDP customer log Backend
// by Bernardo F. Martinez Meave
// Server main program

const express = require ('express')
const colors = require('colors')
const dotenv = require ('dotenv').config()
const port = process.env.PORT || 6666
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')

connectDB()

const app = express()

app.use(express.json()) //para recibir info por un formulario en body
app.use(express.urlencoded({extended: false}))


app.use('/api/sdplogs', require('./routes/sdplogsRoutes'))

app.use(errorHandler)

app.listen(port, ()=> console.log(`Avaya SDP Customer log MongoDB server started listening on TCP port: ${port}`))