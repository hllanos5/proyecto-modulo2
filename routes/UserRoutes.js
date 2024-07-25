
import { Router } from 'express'
import { listarUsuario, listarUsuarioConRoles, obtenerUsuarioConRoles, crearUsuario, modificarUsuario, eliminarUsuario, modificarUsuarioImagen } from '../controller/UsersController.js'
import { CODIGO_OK, CODIGO_ERROR } from '../config/CodigosConfig.js';
import { uploadFileMulter } from '../util/Utility.js';

export const userRoutes = Router()

//Muestra todos los usuarios
userRoutes.get('/', async (req, res, next) => {
    try {
        const oRespuesta = await listarUsuario();
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

//Muestra todos los usuarios y roles
userRoutes.get('/users-rol', async (req, res, next) => {
    try {
        const oRespuesta = await listarUsuarioConRoles();
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

//Muestra un usuario
userRoutes.get('/:id', async (req, res, next) => {
    try {
        const oRespuesta = await obtenerUsuarioConRoles(req);
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
userRoutes.post('/', async (req, res, next) => {
    try {
        const oRespuesta = await crearUsuario(req);
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
userRoutes.put('/:id', async (req, res, next) => {
    try {
        const oRespuesta = await modificarUsuario(req);
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
userRoutes.delete('/:id',async (req, res, next) => {
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


//Modificar usuario  con imagen
userRoutes.post('/cargar-imagen/:id',  uploadFileMulter.single("file"), async (req, res, next) => {
    try {
        const oRespuesta = await modificarUsuarioImagen(req);
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