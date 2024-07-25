
import { Router } from 'express'
import { listarCategoria, crearCategoria, modificarCategoria} from '../controller/CategoryController.js'
import { CODIGO_OK, CODIGO_ERROR } from '../config/CodigosConfig.js';

export const categoryRoutes = Router()

//Muestra todos los usuarios
categoryRoutes.get('/', async (req, res, next) => {
    try {
        const oRespuesta = await listarCategoria(req);
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

//Insertar Usuario
categoryRoutes.post('/', async (req, res, next) => {
    try {
        const oRespuesta = await crearCategoria(req);
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


//Actualiza el usuario
categoryRoutes.put('/:id', async (req, res, next) => {
    try {
        const oRespuesta = await modificarCategoria(req);
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
categoryRoutes.delete('/:id',async (req, res, next) => {
    try {
        const oRespuesta = await eliminarUsuario(req);
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