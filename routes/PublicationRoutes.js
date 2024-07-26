
import { Router } from 'express'
import { crearPublicacion, modificarPublicacion, eliminarPublicacion, listarPublicacion,
     listarPublicacionPorCategoria, listarPublicacionPorTitulo } from '../controller/PublicationController.js'
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

//Listar publicaciones
publicationRoutes.get('/', async (req, res, next) => {
    try {
        const oRespuesta = await listarPublicacion(req);
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

//Listar publicaciones por categoria
publicationRoutes.get('/category/:id', async (req, res, next) => {
    try {
        const oRespuesta = await listarPublicacionPorCategoria(req);
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

//Listar publicaciones por titulo
publicationRoutes.get('/titulo', async (req, res, next) => {
    try {
        const oRespuesta = await listarPublicacionPorTitulo(req);
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
