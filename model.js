const mongoose = require('mongoose');

const cancionSchema = new mongoose.Schema ({
tema : String,
artista : String,
genero : String,
})

const temas = mongoose.model('temas', cancionSchema)

module.exports = temas