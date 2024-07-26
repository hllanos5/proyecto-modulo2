import { crearPublicacionRepository } from "../repository/PublicationRepository.js"
import { obtenerUsuarioPorCorreoYPassword } from "../repository/UsersRepository.js"

import { CODIGO_ERROR, USUARIO_COD_NO_ENCONTRADO, 
    USUARIO_COD_CORREO_REQUERIDO, USUARIO_COD_PASSWORD_REQUERIDO, PUBLICACION_COD_TITULO,
    PUBLICACION_COD_DESCRIPCION } from '../config/CodigosConfig.js';

import { USUARIO_NO_ENCONTRADO, USUARIO_CORREO_REQUERIDO,
    USUARIO_PASSWORD_REQUERIDO, PUBLICACION_TITULO_REQUERIDO, PUBLICACION_DESCRIPCION_REQUERIDO } from '../config/MensajesConfig.js';

export const crearPublicacion = async (req, res) => {

    try {
        const { headers:{ email, password}, body: { titulo, descripcion} } = req;

        let id_usuario = 0;
        
        /* I- Validacion de datos */ 
        if( email === undefined ){
            return {mensaje: USUARIO_CORREO_REQUERIDO, codigo: USUARIO_COD_CORREO_REQUERIDO};
        }
        if( password === undefined ){
            return {mensaje: USUARIO_PASSWORD_REQUERIDO, codigo: USUARIO_COD_PASSWORD_REQUERIDO};
        }
        if( titulo === undefined ){
            return {mensaje: PUBLICACION_TITULO_REQUERIDO, codigo: PUBLICACION_COD_TITULO};
        }
        if( descripcion === undefined ){
            return {mensaje: PUBLICACION_DESCRIPCION_REQUERIDO, codigo: PUBLICACION_COD_DESCRIPCION};
        }
        /* F- Validacion de datos */

        /* I- Validacion usuario existente */ 
        const oUsuario      = await obtenerUsuarioPorCorreoYPassword(email, password);
        if( oUsuario.resultado.length === 0 ){
            return {mensaje: USUARIO_NO_ENCONTRADO, codigo: USUARIO_COD_NO_ENCONTRADO};
        }
        /* F- Validacion usuario existente */

        id_usuario = oUsuario.resultado[0].id_usuario;

        const oRespuesta = await crearPublicacionRepository(id_usuario, titulo, descripcion);
        return oRespuesta;
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

