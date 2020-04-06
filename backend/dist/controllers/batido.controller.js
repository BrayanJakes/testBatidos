"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const batido_model_1 = __importDefault(require("../models/batido.model"));
exports.listarBatidos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield batido_model_1.default.find((err, resp) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                mensage: 'Error en DB',
                err
            });
        }
        return res.json({
            ok: true,
            mensage: 'Batidos en DB activos',
            batidos: resp
        });
    });
});
exports.crearBatidos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const batido = req.body;
    const newBatido = new batido_model_1.default(batido);
    yield newBatido.save((err, save) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                mensage: 'Error en DB',
                err
            });
        }
        res.json({
            ok: true,
            mensage: 'Batido Guardado',
            batido: save
        });
    });
});
