import { listarCategoriaRepository, crearCategoriaRepository, modificarCategoriaRepository } from "../repository/CategoryRepository.js"
import {obtenerUsuarioPorCorreoYPassword } from "../repository/UsersRepository.js"

import { CODIGO_ERROR, USUARIO_COD_NO_ENCONTRADO, USUARIO_COD_SIN_PRIVILEGIOS, 
    USUARIO_COD_CORREO_REQUERIDO, USUARIO_COD_PASSWORD_REQUERIDO, CATEGORIA_COD_NOMBRE_REQUERIDO,
    CATEGORIA_COD_ID_REQUERIDO } from '../config/CodigosConfig.js';

import { USUARIO_NO_ENCONTRADO, USUARIO_SIN_PRIVILEGIOS, USUARIO_CORREO_REQUERIDO,
    USUARIO_PASSWORD_REQUERIDO, CATEGORIA_NOMBRE_REQUERIDO, CATEGORIA_ID_REQUERIDO} from '../config/MensajesConfig.js';

export const listarCategoria = async (req, res) => {

    try {
        const { headers:{ email, password} } = req;
        
        /* I- Validacion de datos */ 
        if( email === undefined ){
            return {mensaje: USUARIO_CORREO_REQUERIDO, codigo: USUARIO_COD_CORREO_REQUERIDO};
        }
        if( password === undefined ){
            return {mensaje: USUARIO_PASSWORD_REQUERIDO, codigo: USUARIO_COD_PASSWORD_REQUERIDO};
        }
        /* F- Validacion de datos */

        /* I- Validacion Accesibilidad */ 
        const oUsuario      = await obtenerUsuarioPorCorreoYPassword(email, password);
        if( oUsuario.resultado.length === 0 ){
            return {mensaje: USUARIO_NO_ENCONTRADO, codigo: USUARIO_COD_NO_ENCONTRADO};
        }
        if( oUsuario.resultado[0].id_rol !== 1 ){
            return {mensaje: USUARIO_SIN_PRIVILEGIOS, codigo: USUARIO_COD_SIN_PRIVILEGIOS};
        }
        /* F- Validacion Accesibilidad */

        const oRespuesta    = await listarCategoriaRepository();
        return oRespuesta;
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

export const crearCategoria = async (req, res) => {

    try {
        const { body: { nombre }, headers:{ email, password} } = req;
               
        /* I- Validacion de datos */ 
        if( email === undefined ){
            return {mensaje: USUARIO_CORREO_REQUERIDO, codigo: USUARIO_COD_CORREO_REQUERIDO};
        }
        if( password === undefined ){
            return {mensaje: USUARIO_PASSWORD_REQUERIDO, codigo: USUARIO_COD_PASSWORD_REQUERIDO};
        }
        if( nombre === undefined ){
            return {mensaje: CATEGORIA_NOMBRE_REQUERIDO, codigo: CATEGORIA_COD_NOMBRE_REQUERIDO};
        }
        /* F- Validacion de datos */

        /* I- Validacion Accesibilidad */ 
        const oUsuario      = await obtenerUsuarioPorCorreoYPassword(email, password);
        if( oUsuario.resultado.length === 0 ){
            return {mensaje: USUARIO_NO_ENCONTRADO, codigo: USUARIO_COD_NO_ENCONTRADO};
        }
        if( oUsuario.resultado[0].id_rol !== 1 ){
            return {mensaje: USUARIO_SIN_PRIVILEGIOS, codigo: USUARIO_COD_SIN_PRIVILEGIOS};
        }
        /* F- Validacion Accesibilidad */

        const oRespuesta = await crearCategoriaRepository(nombre);
        return oRespuesta;
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}


export const modificarCategoria = async (req, res) => {

    try {
        const { body: { nombre }, params: { id }, headers:{ email, password}  } = req;
        /* I- Validacion de datos */ 
        if( id === undefined ){
            return {mensaje: CATEGORIA_ID_REQUERIDO, codigo: CATEGORIA_COD_ID_REQUERIDO};
        }
        if( email === undefined ){
            return {mensaje: USUARIO_CORREO_REQUERIDO, codigo: USUARIO_COD_CORREO_REQUERIDO};
        }
        if( password === undefined ){
            return {mensaje: USUARIO_PASSWORD_REQUERIDO, codigo: USUARIO_COD_PASSWORD_REQUERIDO};
        }
        if( nombre === undefined ){
            return {mensaje: CATEGORIA_NOMBRE_REQUERIDO, codigo: CATEGORIA_COD_NOMBRE_REQUERIDO};
        }
        /* F- Validacion de datos */

        /* I- Validacion Accesibilidad */ 
        const oUsuario      = await obtenerUsuarioPorCorreoYPassword(email, password);
        if( oUsuario.resultado.length === 0 ){
            return {mensaje: USUARIO_NO_ENCONTRADO, codigo: USUARIO_COD_NO_ENCONTRADO};
        }
        if( oUsuario.resultado[0].id_rol !== 1 ){
            return {mensaje: USUARIO_SIN_PRIVILEGIOS, codigo: USUARIO_COD_SIN_PRIVILEGIOS};
        }
        /* F- Validacion Accesibilidad */

        const oRespuesta = await modificarCategoriaRepository(nombre, id);
        return oRespuesta;
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}


export const eliminarRol = async (req, res) => {

    try {
        const { params: { id } } = req;
        /* I- Validacion de datos */ 
        if( id === undefined ){
            return {mensaje: ROL_ID_REQUERIDO, codigo: ROL_COD_ID_REQUERIDO};
        }
        /* F- Validacion de datos */
        const oRespuesta = await eliminarRolRepository(req);
        return oRespuesta;
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}