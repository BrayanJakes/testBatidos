"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const batidoSchema = new mongoose_1.Schema({
    nombre: { type: String },
    frutas: { type: Array },
    liquido: { type: Object },
    proteina: { type: String },
    gusto: { type: String },
    caloria: { type: String },
});
const batidoModel = mongoose_1.model('batidos', batidoSchema);
exports.default = batidoModel;
