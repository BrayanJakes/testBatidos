import {Router} from 'express';
import { listarBatidos, crearBatidos } from '../controllers/batido.controller';


const app = Router();

app.get('/', listarBatidos);
app.post('/', crearBatidos);


export default app;
