const express = require('express')
const app = express()
const connectDB = require('./config/database')
const pokeRoutes = require('./routers/pokesRouter')
const PORT = 8000


require('dotenv').config({path: './config/.env'})

connectDB()




app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', pokeRoutes)





app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})