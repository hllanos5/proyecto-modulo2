import pool from "../bd/Pool.js"
import { CODIGO_OK, CODIGO_ERROR } from '../config/CodigosConfig.js';
import { MENSAJE_OK} from '../config/MensajesConfig.js';

/* metodo para listar usuario */
export const listarUsuarioRepository = async () => {
    try {
        const sql = 'SELECT * FROM usuario';
        const [rs] = await pool.execute(sql);

        return {resultado: rs, mensaje: MENSAJE_OK, codigo: CODIGO_OK};
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

// metodo para obtener usuario por correo y contraseña
export const obtenerUsuarioPorCorreoYPassword = async (email, password) => {
    try {
        const sql = 'select * from usuario where  email = ? and password= ?';
        const [rs] = await pool.execute(sql, [email, password]);

        return {resultado: rs, mensaje: MENSAJE_OK, codigo: CODIGO_OK};
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

// metodo para crear un usuario
export const crearUsuarioRepository = async (req) => {
    try {
        const { body: { id_rol, nombre, apellido, email, password } } = req;
        const sql = 'INSERT INTO usuario (`id_rol`, `nombre`, `apellido`, `email`, `password`) VALUES (?,?,?,?,?)';
        await pool.execute(sql, [id_rol, nombre, apellido, email, password]);

        return {mensaje: MENSAJE_OK, codigo: CODIGO_OK};
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

// metodo para modificar un usuario 
export const modificarUsuarioRepository = async (req) => {
    try {
        const { body: { id_rol, nombre, apellido, email, password }, params: {id} } = req;
        const sql = 'UPDATE usuario SET id_rol = ?, nombre = ?, apellido = ?, email = ?, password = ?  WHERE id_usuario= ? ';
        await pool.execute(sql, [id_rol, nombre, apellido, email, password, id]);

        return {mensaje: MENSAJE_OK, codigo: CODIGO_OK};
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

// metodo para eliminar un usuario 
const eliminarUsuarioRepository = async (req) => {
    try {
        const { params: { id } } = req;
        const sql = 'DELETE FROM usuarios WHERE id_usuario= ? ';
        await pool.execute(sql, [id]);

        return {mensaje: MENSAJE_OK, codigo: CODIGO_OK};
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

// metodo para actualizar usuario imagen 
const modificarImagenUsuarioRepository = async (req) => {
    try {
        
        const {params, file} = req;
        console.log(params, file);
        const sql = 'UPDATE usuarios SET imagen = ? WHERE id_usuario= ? ';
        await pool.execute(sql, [file.filename,params.id]);

        return {mensaje: MENSAJE_OK, codigo: CODIGO_OK};
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}