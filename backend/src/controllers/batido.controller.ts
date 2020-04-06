import {Request, Response} from 'express';
import batidosModel from '../models/batido.model';
import { Batido } from '../interfaces/batido.interface';

export const listarBatidos = async (req: Request, res: Response) => {
       
       
        await batidosModel.find((err, resp: Batido) => {

            if(err){
                return res.status(500).json({
                    ok: false,
                    mensage: 'Error en DB',
                    err
                })
            }
            return res.json({
                ok: true,
                mensage: 'Batidos en DB activos',
                batidos: resp
            })

        }) 
}


export const crearBatidos = async (req: Request, res: Response) => {
       
   const batido: Batido = req.body;
   const newBatido = new batidosModel(batido);
   await newBatido.save((err, save) => {
    if(err){
        return res.status(500).json({
            ok: false,
            mensage: 'Error en DB',
            err
        })
    }

     res.json({
        ok: true,
        mensage: 'Batido Guardado',
        batido: save
    })
   })
   
}

