import pool from "../bd/Pool.js"
import { CODIGO_OK, CODIGO_ERROR } from '../config/CodigosConfig.js';
import { MENSAJE_OK} from '../config/MensajesConfig.js';

/* metodo para listar usuario */
const listarUsuarioRepository = async () => {
    try {
        const sql = 'SELECT * FROM usuarios';
        const [rs] = await pool.execute(sql);

        return {resultado: rs, mensaje: MENSAJE_OK, codigo: CODIGO_OK};
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

// metodo para listar usuario con roles
const listarUsuarioConRolesRepository = async () => {
    try {
        const sql = 'select u.*, r.id_rol,r.nombre_rol from usuarios u inner join roles r on (u.id_rol = r.id_rol)';
        const [rs] = await pool.execute(sql);

        return {resultado: rs, mensaje: MENSAJE_OK, codigo: CODIGO_OK};
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

// metodo para obtener un usuario con roles
const obtenerUsuarioConRolesRepository = async (req) => {
    try {
        const {params, query, body, headers} = req;
        const sql = 'select u.*, r.id_rol,r.nombre_rol from usuarios u inner join roles r on (u.id_rol = r.id_rol) WHERE u.id_usuario = ?';
        const [rs] = await pool.execute(sql, [params.id]);

        return {resultado: rs, mensaje: MENSAJE_OK, codigo: CODIGO_OK};
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}


// metodo para crear un usuario
const crearUsuarioRepository = async (req) => {
    try {
        const { body: { nombre, email, password, id_rol } } = req;
        const sql = 'INSERT INTO usuarios (`nombre`, `email`, `password`, `id_rol`) VALUES (?,?,?,?)';
        await pool.execute(sql, [nombre, email, password, id_rol]);

        return {mensaje: MENSAJE_OK, codigo: CODIGO_OK};
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

// metodo para modificar un usuario 
const modificarUsuarioRepository = async (req) => {
    try {
        const { body: { nombre, email, password, id_rol }, params: {id} } = req;
        const sql = 'UPDATE usuarios SET nombre = ?, email = ?, password = ?, id_rol = ? WHERE id_usuario= ? ';
        await pool.execute(sql, [nombre, email, password, id_rol, id]);

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

export  {listarUsuarioRepository, listarUsuarioConRolesRepository, obtenerUsuarioConRolesRepository,
        crearUsuarioRepository, modificarUsuarioRepository, eliminarUsuarioRepository, modificarImagenUsuarioRepository}