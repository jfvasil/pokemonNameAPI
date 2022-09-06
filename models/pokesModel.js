const mongoose = require('mongoose')

const PokesSchema = new mongoose.Schema({
  pokeName: {
    type: String,
    required: true,
  },
  pokeType: {
    type: String,
    required: true
  },
  favorite: {
    type: Boolean,
    required: true,
  }
})

module.exports = mongoose.model('pokesDB', PokesSchema)