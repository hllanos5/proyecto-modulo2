
import { Router } from 'express'
import { listarRol } from '../controller/RoleController.js'
import { CODIGO_OK, CODIGO_ERROR } from '../config/CodigosConfig.js';

export const roleRoutes = Router()

//Muestra todos los usuarios
roleRoutes.get('/', async (req, res, next) => {
    try {
        const oRespuesta = await listarRol();
        if (oRespuesta.codigo === CODIGO_OK) {
            return res.status(200).json(oRespuesta);
        }
        else {
            return res.status(400).json(oRespuesta);
        }
    } catch (error) {
        return res.status(500).json({mensaje: error.message, codigo: CODIGO_ERROR})
    }
})
