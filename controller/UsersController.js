import {listarUsuarioRepository, obtenerUsuarioPorCorreoYPassword } from "../repository/UsersRepository.js"

import { CODIGO_ERROR, USUARIO_COD_NO_ENCONTRADO, USUARIO_COD_SIN_PRIVILEGIOS, 
    USUARIO_COD_CORREO_REQUERIDO, USUARIO_COD_PASSWORD_REQUERIDO } from '../config/CodigosConfig.js';

import { USUARIO_NO_ENCONTRADO, USUARIO_SIN_PRIVILEGIOS, USUARIO_CORREO_REQUERIDO,
    USUARIO_PASSWORD_REQUERIDO} from '../config/MensajesConfig.js';

export const listarUsuario = async (req, res) => {

    try {
        const { body: { email, password } } = req;

        if( email === undefined ){
            return {mensaje: USUARIO_CORREO_REQUERIDO, codigo: USUARIO_COD_CORREO_REQUERIDO};
        }
        if( password === undefined ){
            return {mensaje: USUARIO_PASSWORD_REQUERIDO, codigo: USUARIO_COD_PASSWORD_REQUERIDO};
        }

        const oUsuario      = await obtenerUsuarioPorCorreoYPassword(email, password);
        if( oUsuario.resultado.length === 0 ){
            return {mensaje: USUARIO_NO_ENCONTRADO, codigo: USUARIO_COD_NO_ENCONTRADO};
        }
        if( oUsuario.resultado[0].id_rol !== 1 ){
            return {mensaje: USUARIO_SIN_PRIVILEGIOS, codigo: USUARIO_COD_SIN_PRIVILEGIOS};
        }

        const oRespuesta    = await listarUsuarioRepository();
        return oRespuesta;
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

export const listarUsuarioConRoles = async (req, res) => {

    try {
        const oRespuesta = await listarUsuarioConRolesRepository();
        return oRespuesta;
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

export const obtenerUsuarioConRoles = async (req, res) => {

    try {
        const oRespuesta = await obtenerUsuarioConRolesRepository(req);
        return oRespuesta;
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

export const crearUsuario = async (req, res) => {

    try {
        const oRespuesta = await crearUsuarioRepository(req);
        return oRespuesta;
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

export const modificarUsuario = async (req, res) => {

    try {
        const oRespuesta = await modificarUsuarioRepository(req);
        return oRespuesta;
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

export const eliminarUsuario = async (req, res) => {

    try {
        const oRespuesta = await eliminarUsuarioRepository(req);
        return oRespuesta;
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

export const modificarUsuarioImagen = async (req, res) => {

    try {
        const oRespuesta = await modificarImagenUsuarioRepository(req);
        return oRespuesta;
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}