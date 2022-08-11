const mongoose = require('mongoose');
const { Schema, model } = mongoose; 

//Creating movie Schema 
const movieSchema = new Schema({
    title: {type: String},
    director: {type: String},
    stars: {type: [ String ]},
    image: {type: String},
    description: {type: String},
    showtimes: {type: [ String ]}
}); 

//Setting the schema to the Movie model
const Movie = model('Movie', movieSchema);

//Exporting movie model
module.exports = Movie; 