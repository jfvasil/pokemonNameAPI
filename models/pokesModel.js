const mongoose = require('mongoose')

const PokesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true
  },
  favorite: {
    type: Boolean,
    required: true,
  }
})

module.exports = mongoose.model('pokesDB', PokesSchema)