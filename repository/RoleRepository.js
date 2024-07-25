import pool from "../bd/Pool.js"
import { CODIGO_OK, CODIGO_ERROR } from '../config/CodigosConfig.js';
import { MENSAJE_OK} from '../config/MensajesConfig.js';

/* metodo para listar rol */
export const listarRolRepository = async () => {
    try {
        const sql = 'SELECT * FROM rol';
        const [rs] = await pool.execute(sql);

        return {resultado: rs, mensaje: MENSAJE_OK, codigo: CODIGO_OK};
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

// metodo para crear un usuario
export const crearRolRepository = async (req) => {
    try {
        const { body: {  nombre } } = req;
        const sql = 'INSERT INTO rol (`nombre`) VALUES (?)';
        await pool.execute(sql, [ nombre ]);

        return {mensaje: MENSAJE_OK, codigo: CODIGO_OK};
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}