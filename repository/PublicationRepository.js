import pool from "../bd/Pool.js"
import { CODIGO_OK, CODIGO_ERROR } from '../config/CodigosConfig.js';
import { MENSAJE_OK} from '../config/MensajesConfig.js';

/* metodo para obtener publicacion */
export const obtenerPublicacionRepository = async (id) => {
    try {
        const sql = 'SELECT * FROM publicacion WHERE id_publicacion = ? ';
        const [rs] = await pool.execute(sql, [id]);

        return {resultado: rs, mensaje: MENSAJE_OK, codigo: CODIGO_OK};
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

// metodo para crear una publicacion
export const crearPublicacionRepository = async (id_usuario, titulo, descripcion) => {
    try {
        const sql = 'INSERT INTO publicacion (`id_usuario`, `titulo`, `descripcion`) VALUES (?,?,?)';
        await pool.execute(sql, [ id_usuario, titulo, descripcion ]);

        return {mensaje: MENSAJE_OK, codigo: CODIGO_OK};
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

// metodo para modificar un rol 
export const modificarCategoriaRepository = async (titulo, descripcion, id_publicacion) => {
    try {
        const sql = 'UPDATE publicacion SET titulo = ?, descripcion = ? WHERE id_publicacion= ? ';
        await pool.execute(sql, [titulo, descripcion, id_publicacion]);

        return {mensaje: MENSAJE_OK, codigo: CODIGO_OK};
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

// metodo para eliminar un rol en nuestro caso solo cambiaremos de estado
export const eliminarCategoriaRepository = async (req) => {
    try {
        const { params: { id } } = req;
        const sql = 'UPDATE categoria SET estado = 0 WHERE id_categoria= ? ';
        await pool.execute(sql, [id]);

        return {mensaje: MENSAJE_OK, codigo: CODIGO_OK};
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}