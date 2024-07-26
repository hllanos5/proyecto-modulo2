import pool from "../bd/Pool.js"
import { CODIGO_OK, CODIGO_ERROR } from '../config/CodigosConfig.js';
import { MENSAJE_OK} from '../config/MensajesConfig.js';

// metodo para crear un categoria
export const crearComentarioRepository = async (id_publicacion, id_usuario, comentario) => {
    try {
        const sql = 'INSERT INTO comentario (`id_publicacion`, `id_usuario`, `comentario`) VALUES (?,?,?)';
        await pool.execute(sql, [ id_publicacion, id_usuario, comentario ]);

        return {mensaje: MENSAJE_OK, codigo: CODIGO_OK};
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}
