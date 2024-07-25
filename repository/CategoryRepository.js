import pool from "../bd/Pool.js"
import { CODIGO_OK, CODIGO_ERROR } from '../config/CodigosConfig.js';
import { MENSAJE_OK} from '../config/MensajesConfig.js';

/* metodo para listar usuario */
export const listarCategoriaRepository = async () => {
    try {
        const sql = 'SELECT * FROM categoria';
        const [rs] = await pool.execute(sql);

        return {resultado: rs, mensaje: MENSAJE_OK, codigo: CODIGO_OK};
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

// metodo para crear un rol
export const crearCategoriaRepository = async (nombre) => {
    try {
        const sql = 'INSERT INTO categoria (`nombre`) VALUES (?)';
        await pool.execute(sql, [ nombre ]);

        return {mensaje: MENSAJE_OK, codigo: CODIGO_OK};
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

// metodo para modificar un rol 
export const modificarCategoriaRepository = async (nombre, id) => {
    try {
        const sql = 'UPDATE categoria SET nombre = ? WHERE id_categoria= ? ';
        await pool.execute(sql, [nombre, id]);

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