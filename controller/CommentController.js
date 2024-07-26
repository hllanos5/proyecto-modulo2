import { crearComentarioRepository, modificarComentarioRepository, 
    obtenerComentarioRepository, eliminarComentarioRepository, listarComentarioPorIdPublicacionRepository} from "../repository/CommentRepository.js"
import {obtenerUsuarioPorCorreoYPassword } from "../repository/UsersRepository.js"

import { CODIGO_ERROR, USUARIO_COD_NO_ENCONTRADO, 
    USUARIO_COD_CORREO_REQUERIDO, USUARIO_COD_PASSWORD_REQUERIDO, PUBLICACION_COD_ID,
    COMENTARIO_COD_COMENTARIO_REQUERIDO, COMENTARIO_COD_ID_REQUERIDO, COMENTARIO_COD_NO_ENCONTRADO, 
    COMENTARIO_COD_PUBLICACION_NO_USUARIO } from '../config/CodigosConfig.js';

import { USUARIO_NO_ENCONTRADO, USUARIO_CORREO_REQUERIDO,
    USUARIO_PASSWORD_REQUERIDO, PUBLICACION_ID_REQUERIDO, COMENTARIO_COMENTARIO_REQUERIDO, 
    COMENTARIO_ID_REQUERIDO, COMENTARIO_NO_ENCONTRADO, COMENTARIO_PUBLICACION_NO_USUARIO} from '../config/MensajesConfig.js';

export const crearComentario = async (req, res) => {

    try {
        const { body: { id_publicacion, comentario }, headers:{ email, password} } = req;
               
        /* I- Validacion de datos */ 
        if( email === undefined ){
            return {mensaje: USUARIO_CORREO_REQUERIDO, codigo: USUARIO_COD_CORREO_REQUERIDO};
        }
        if( password === undefined ){
            return {mensaje: USUARIO_PASSWORD_REQUERIDO, codigo: USUARIO_COD_PASSWORD_REQUERIDO};
        }
        if( id_publicacion === undefined ){
            return {mensaje: PUBLICACION_ID_REQUERIDO, codigo: PUBLICACION_COD_ID};
        }
        if( comentario === undefined ){
            return {mensaje: COMENTARIO_COMENTARIO_REQUERIDO, codigo: COMENTARIO_COD_COMENTARIO_REQUERIDO};
        }
        /* F- Validacion de datos */

        //* I- Validacion usuario existente */
        const oUsuario      = await obtenerUsuarioPorCorreoYPassword(email, password);
        if( oUsuario.resultado.length === 0 ){
            return {mensaje: USUARIO_NO_ENCONTRADO, codigo: USUARIO_COD_NO_ENCONTRADO};
        }
        /* F- Validacion usuario existente */

        let id_usuario = oUsuario.resultado[0].id_usuario;

        const oRespuesta = await crearComentarioRepository(id_publicacion, id_usuario, comentario);
        return oRespuesta;
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

export const modificarComentario = async (req, res) => {

    try {
        const { body: { comentario }, headers:{ email, password},  params: { id }, } = req;
               
        /* I- Validacion de datos */ 
        if( email === undefined ){
            return {mensaje: USUARIO_CORREO_REQUERIDO, codigo: USUARIO_COD_CORREO_REQUERIDO};
        }
        if( password === undefined ){
            return {mensaje: USUARIO_PASSWORD_REQUERIDO, codigo: USUARIO_COD_PASSWORD_REQUERIDO};
        }
        if( id === undefined ){
            return {mensaje: COMENTARIO_ID_REQUERIDO, codigo: COMENTARIO_COD_ID_REQUERIDO};
        }
        if( comentario === undefined ){
            return {mensaje: COMENTARIO_COMENTARIO_REQUERIDO, codigo: COMENTARIO_COD_COMENTARIO_REQUERIDO};
        }
        /* F- Validacion de datos */

        //* I- Validacion usuario existente */
        const oUsuario      = await obtenerUsuarioPorCorreoYPassword(email, password);
        console.log(oUsuario);
        if( oUsuario.resultado.length === 0 ){
            return {mensaje: USUARIO_NO_ENCONTRADO, codigo: USUARIO_COD_NO_ENCONTRADO};
        }
        /* F- Validacion usuario existente */

        let id_usuario = oUsuario.resultado[0].id_usuario;
        console.log(id_usuario);

        /* I - Validacion de usuario perteneciente a comentario*/
        
        const oComentario = await obtenerComentarioRepository(id);
        
        if( oComentario.resultado.length === 0 ){
            return {mensaje: COMENTARIO_NO_ENCONTRADO, codigo: COMENTARIO_COD_NO_ENCONTRADO};
        }
        if(oComentario.resultado[0].id_usuario !== id_usuario){
            return {mensaje: COMENTARIO_PUBLICACION_NO_USUARIO, codigo: COMENTARIO_COD_PUBLICACION_NO_USUARIO};
        }
        /* F - Validacion de usuario perteneciente a comentario*/

        const oRespuesta = await modificarComentarioRepository(id, comentario);
        return oRespuesta;
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

export const eliminarComentario = async (req, res) => {

    try {
        const { params: { id }, headers:{ email, password}  } = req;
        /* I- Validacion de datos */ 
        if( email === undefined ){
            return {mensaje: USUARIO_CORREO_REQUERIDO, codigo: USUARIO_COD_CORREO_REQUERIDO};
        }
        if( password === undefined ){
            return {mensaje: USUARIO_PASSWORD_REQUERIDO, codigo: USUARIO_COD_PASSWORD_REQUERIDO};
        }
        if( id === undefined ){
            return {mensaje: COMENTARIO_ID_REQUERIDO, codigo: COMENTARIO_COD_ID_REQUERIDO};
        }
        /* F- Validacion de datos */

        /* I- Validacion usuario existente */
        const oUsuario      = await obtenerUsuarioPorCorreoYPassword(email, password);
        if( oUsuario.resultado.length === 0 ){
            return {mensaje: USUARIO_NO_ENCONTRADO, codigo: USUARIO_COD_NO_ENCONTRADO};
        }
        /* F- Validacion usuario existente */

        let id_usuario = oUsuario.resultado[0].id_usuario;

        /* I - Validacion de usuario perteneciente a comentario*/
        
        const oComentario = await obtenerComentarioRepository(id);
        
        if( oComentario.resultado.length === 0 ){
            return {mensaje: COMENTARIO_NO_ENCONTRADO, codigo: COMENTARIO_COD_NO_ENCONTRADO};
        }
        if(oComentario.resultado[0].id_usuario !== id_usuario){
            return {mensaje: COMENTARIO_PUBLICACION_NO_USUARIO, codigo: COMENTARIO_COD_PUBLICACION_NO_USUARIO};
        }
        /* F - Validacion de usuario perteneciente a comentario*/

        const oRespuesta = await eliminarComentarioRepository(id);
        return oRespuesta;
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

export const listarComentariosPorIdPublicacion = async (req, res) => {
    const { params: { id }} = req;
    try {
        const oRespuesta = await listarComentarioPorIdPublicacionRepository(id);
        return oRespuesta;
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}