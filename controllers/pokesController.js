const pokesDB = require('../models/pokesModel')
module.exports = {
    getPokes: async (req,res)=>{
        try{
            const pokeNames = await pokesDB.find()
            const namesLeft = await pokesDB.countDocuments()
            res.render('index.ejs', {pokes: pokeNames, remaining: namesLeft})
         }catch(err){
            console.log(err)
        }
    },
    addPokes: async (req, res)=>{
        try{
            await pokesDB.create({name: req.body.addName, type: req.body.addType, favorite: false})
            console.log('Poke has been added!')
            res.redirect('/')
        }catch(err){
            console.log(err)
        }
    },
    makeFav: async (req, res)=>{
        try{
            await pokesDB.findOneAndUpdate({pokeId: req.body.idFromFile},{
                favorite: true
            })
            console.log('Made Favorite')
            res.json('Made Favorite')
        }catch(err){
            console.log(err)
        }
    },
    makeUnFav: async (req, res)=>{
        try{
            await pokesDB.findOneAndUpdate({pokeId: req.body.idFromFile},{
                favorite: false
            })
            console.log('Made UnFavorite')
            res.json('Made UnFavorite')
        }catch(err){
            console.log(err)
        }
    },
    deletePokes: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Todo.findOneAndDelete({ pokeId: req.body.idFromFile})
            console.log('Deleted Poke')
            res.json('Deleted Poke')
        }catch(err){
            console.log(err)
        }
    }
}    

