
import { Router } from 'express'
import { listarRol, crearRol, modificarRol, eliminarRol } from '../controller/RoleController.js'
import { CODIGO_OK, CODIGO_ERROR } from '../config/CodigosConfig.js';

export const roleRoutes = Router()

//Muestra todos los Rol
roleRoutes.get('/', async (req, res, next) => {
    try {
        const oRespuesta = await listarRol(req);
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


//Insertar Rol
roleRoutes.post('/', async (req, res, next) => {
    try {
        const oRespuesta = await crearRol(req);
        if (oRespuesta.codigo === CODIGO_OK) {
            return res.status(201).json(oRespuesta);
        }
        else {
            return res.status(400).json(oRespuesta);
        }
    } catch (error) {
        return res.status(500).json({mensaje: error.message, codigo: CODIGO_ERROR})
    }
})

//Actualiza el Rol
roleRoutes.put('/:id', async (req, res, next) => {
    try {
        const oRespuesta = await modificarRol(req);
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

//Borra los usuarios
roleRoutes.delete('/:id',async (req, res, next) => {
    try {
        const oRespuesta = await eliminarRol(req);
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