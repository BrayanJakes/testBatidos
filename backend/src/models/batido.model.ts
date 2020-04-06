import {Schema, model} from 'mongoose';

const batidoSchema = new Schema({

    nombre: {type: String},
    frutas: {type: Array},
    liquido: {type: Object},
    proteina: {type: String},
    gusto: {type: String},
    caloria: {type: String},


})

const batidoModel = model('batidos', batidoSchema);

export default batidoModel;
