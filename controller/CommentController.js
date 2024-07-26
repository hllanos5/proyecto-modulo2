import { crearComentarioRepository } from "../repository/CommentRepository.js"
import {obtenerUsuarioPorCorreoYPassword } from "../repository/UsersRepository.js"

import { CODIGO_ERROR, USUARIO_COD_NO_ENCONTRADO, USUARIO_COD_SIN_PRIVILEGIOS, 
    USUARIO_COD_CORREO_REQUERIDO, USUARIO_COD_PASSWORD_REQUERIDO, PUBLICACION_COD_ID,
    COMENTARIO_COD_COMENTARIO_REQUERIDO } from '../config/CodigosConfig.js';

import { USUARIO_NO_ENCONTRADO, USUARIO_SIN_PRIVILEGIOS, USUARIO_CORREO_REQUERIDO,
    USUARIO_PASSWORD_REQUERIDO, PUBLICACION_ID_REQUERIDO, COMENTARIO_COMENTARIO_REQUERIDO} from '../config/MensajesConfig.js';

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

