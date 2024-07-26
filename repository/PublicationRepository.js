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

// metodo para modificar una publicacion 
export const modificarCategoriaRepository = async (titulo, descripcion, id_publicacion) => {
    try {
        const sql = 'UPDATE publicacion SET titulo = ?, descripcion = ? WHERE id_publicacion= ? ';
        await pool.execute(sql, [titulo, descripcion, id_publicacion]);

        return {mensaje: MENSAJE_OK, codigo: CODIGO_OK};
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

// metodo para eliminar una publicacion en nuestro caso solo cambiaremos de estado
export const eliminarPublicacionRepository = async (id) => {
    try {
        const sql = 'UPDATE publicacion SET estado = 0 WHERE id_publicacion= ? ';
        await pool.execute(sql, [id]);

        return {mensaje: MENSAJE_OK, codigo: CODIGO_OK};
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

export const obtenerUltimaPublicacionRepository = async () => {
    try {
        const sql = 'select * from publicacion  order by 1 desc limit 1';
        const [rs] = await pool.execute(sql);

        return {mensaje: MENSAJE_OK, codigo: CODIGO_OK, resultado: rs};
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

export const insertarCategoriaPublicacionRepository = async (id_publicacion, id_categoria) => {
    try {
        const sql = 'insert into categoria_publicacion (id_publicacion, id_categoria) VALUES (?,?) ';
        await pool.execute(sql, [id_publicacion, id_categoria]);

        return {mensaje: MENSAJE_OK, codigo: CODIGO_OK};
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

export const modificarCategoriaPublicacionRepository = async (id_categoria,id_publicacion) => {
    try {
        const sql = 'update categoria_publicacion set id_categoria = ? WHERE id_publicacion = ? ';
        await pool.execute(sql, [id_categoria, id_publicacion]);

        return {mensaje: MENSAJE_OK, codigo: CODIGO_OK};
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

export const listarPublicacionRepository = async () => {
    try {
        const sql = `select p.*, c.* from publicacion p 
                    inner join categoria_publicacion  cp
                    on ( p.id_publicacion = cp.id_publicacion)
                    inner join categoria c 
                    on (c.id_categoria = cp.id_categoria)`;
        const [rs] = await pool.execute(sql);

        return {mensaje: MENSAJE_OK, codigo: CODIGO_OK, resultado: rs};
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

export const listarPublicacionPorCategoriaRepository = async (id_categoria) => {
    try {
        const sql = `select p.*, c.* from publicacion p 
                    inner join categoria_publicacion  cp
                    on ( p.id_publicacion = cp.id_publicacion)
                    inner join categoria c 
                    on (c.id_categoria = cp.id_categoria)
                    where c.id_categoria = ?`;
        const [rs] = await pool.execute(sql, [id_categoria]);

        return {mensaje: MENSAJE_OK, codigo: CODIGO_OK, resultado: rs};
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

export const listarPublicacionPorTituloRepository = async (titulo) => {
    console.log(titulo);
    try {
        const sql = `select p.*, c.* from publicacion p 
                    inner join categoria_publicacion  cp
                    on ( p.id_publicacion = cp.id_publicacion)
                    inner join categoria c 
                    on (c.id_categoria = cp.id_categoria)
                    where p.titulo like ?`;
        const [rs] = await pool.execute(sql, ['%'+titulo+'%']);

        return {mensaje: MENSAJE_OK, codigo: CODIGO_OK, resultado: rs};
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}