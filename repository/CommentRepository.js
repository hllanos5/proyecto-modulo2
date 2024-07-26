import pool from "../bd/Pool.js"
import { CODIGO_OK, CODIGO_ERROR } from '../config/CodigosConfig.js';
import { MENSAJE_OK} from '../config/MensajesConfig.js';

// metodo para crear un comentario
export const crearComentarioRepository = async (id_publicacion, id_usuario, comentario) => {
    try {
        const sql = 'INSERT INTO comentario (`id_publicacion`, `id_usuario`, `comentario`) VALUES (?,?,?)';
        await pool.execute(sql, [ id_publicacion, id_usuario, comentario ]);

        return {mensaje: MENSAJE_OK, codigo: CODIGO_OK};
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

// metodo para modificar comentario
export const modificarComentarioRepository = async (id_comentario, comentario) => {
    try {
        const sql = 'UPDATE comentario set comentario = ? WHERE id_comentario = ?';
        await pool.execute(sql, [ comentario, id_comentario]);

        return {mensaje: MENSAJE_OK, codigo: CODIGO_OK};
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

/* metodo para obtener publicacion */
export const obtenerComentarioRepository = async (id) => {
    try {
        const sql = 'SELECT * FROM comentario WHERE id_comentario = ? ';
        const [rs] = await pool.execute(sql, [id]);

        return {resultado: rs, mensaje: MENSAJE_OK, codigo: CODIGO_OK};
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

// metodo para eliminar un ccomentario en nuestro caso solo cambiaremos de estado
export const eliminarComentarioRepository = async (id_comentario) => {
    try {
        const sql = 'UPDATE comentario SET estado = 0 WHERE id_comentario= ? ';
        await pool.execute(sql, [id_comentario]);

        return {mensaje: MENSAJE_OK, codigo: CODIGO_OK};
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}