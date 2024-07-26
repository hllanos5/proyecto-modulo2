
import { Router } from 'express'
import { crearComentario, modificarComentario, eliminarComentario } from '../controller/CommentController.js'
import { CODIGO_OK, CODIGO_ERROR } from '../config/CodigosConfig.js';

export const commentRoutes = Router()

//Insertar comentario
commentRoutes.post('/', async (req, res, next) => {
    try {
        const oRespuesta = await crearComentario(req);
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

//Actualiza el comentario
commentRoutes.put('/:id', async (req, res, next) => {
    try {
        const oRespuesta = await modificarComentario(req);
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

//Borra comentario
commentRoutes.delete('/:id',async (req, res, next) => {
    try {
        const oRespuesta = await eliminarComentario(req);
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