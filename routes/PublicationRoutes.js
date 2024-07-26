
import { Router } from 'express'
import { crearPublicacion, modificarPublicacion, eliminarPublicacion } from '../controller/PublicationController.js'
import { CODIGO_OK, CODIGO_ERROR } from '../config/CodigosConfig.js';

export const publicationRoutes = Router()

//Insertar publicacion
publicationRoutes.post('/', async (req, res, next) => {
    try {
        const oRespuesta = await crearPublicacion(req);
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
publicationRoutes.put('/:id', async (req, res, next) => {
    try {
        const oRespuesta = await modificarPublicacion(req);
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
publicationRoutes.delete('/:id',async (req, res, next) => {
    try {
        const oRespuesta = await eliminarPublicacion(req);
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


//Muestra todos los Rol
publicationRoutes.get('/', async (req, res, next) => {
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

