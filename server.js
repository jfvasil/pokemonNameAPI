const express = require('express')
const cors = require('cors')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 8000
require('dotenv').config()

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'PokeNames'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/',async (req, res) =>{
    const pokeNames = await db.collection('PokeNames').find().toArray()
    const namesLeft = await db.collection('PokeNames').countDocuments()
    res.render('index.ejs', {pokes: pokeNames, remaining: namesLeft})
    console.log(res)
})

app.post('/addPoke', (req, res) =>{
     db.collection('PokeNames').insertOne({name: req.body.addName, type: req.body.addType, favorite: false})
     .then(result => {
        console.log('Poke added')
        res.redirect('/')
     })
})
app.put('/makeFav', (req, res) => {
    db.collection('PokeNames').updateOne({name: req.body.pokeName, type: req.body.pokeType},{
        $set: {
            favorite: true
          }
    },{
        sort: {_id: -1},
        upsert: false
    })
    .then(result => {
        console.log('Made Favorite')
        res.json('Made Favorite')
    })
    .catch(error => console.error(error))

})
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})