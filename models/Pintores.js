const mongoose = require('mongoose');

//Creamos un schema (nuestra db)

let Schema = mongoose.Schema;

//Crear colección
let PintoresSchema = new Schema({
    name : {
        type : String,
        required : [true, 'Requerimos el nombre']
    },
    corriente : {
        type : String,
        required : [true, 'Se requiere la corriente']
    },
    nacionalidad : {
        type : String
    },
    pintura : {
        type : String,
    }
});

module.exports = mongoose.model('Pintores', PintoresSchema);
