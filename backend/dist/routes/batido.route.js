"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const batido_controller_1 = require("../controllers/batido.controller");
const app = express_1.Router();
app.get('/', batido_controller_1.listarBatidos);
app.post('/', batido_controller_1.crearBatidos);
exports.default = app;
