import { config } from "dotenv"

config()

const CODIGO_OK = process.env['CODIGO_OK']
const CODIGO_ERROR = process.env['CODIGO_ERROR']

const USUARIO_COD_NO_ENCONTRADO = process.env['USUARIO_COD_NO_ENCONTRADO']
const USUARIO_COD_SIN_PRIVILEGIOS = process.env['USUARIO_COD_SIN_PRIVILEGIOS']
const USUARIO_COD_CORREO_REQUERIDO = process.env['USUARIO_COD_CORREO_REQUERIDO']
const USUARIO_COD_PASSWORD_REQUERIDO = process.env['USUARIO_COD_PASSWORD_REQUERIDO']
const USUARIO_COD_ROL_REQUERIDO = process.env['USUARIO_COD_ROL_REQUERIDO']
const USUARIO_COD_NOMBRE_REQUERIDO = process.env['USUARIO_COD_NOMBRE_REQUERIDO']
const USUARIO_COD_APELLIDO_REQUERIDO = process.env['USUARIO_COD_APELLIDO_REQUERIDO']
const USUARIO_COD_ID_REQUERIDO = process.env['USUARIO_COD_ID_REQUERIDO']

const ROL_COD_NOMBRE_REQUERIDO = process.env['ROL_COD_NOMBRE_REQUERIDO']
const ROL_COD_ID_REQUERIDO = process.env['ROL_COD_ID_REQUERIDO']

const CATEGORIA_COD_NOMBRE_REQUERIDO = process.env['CATEGORIA_COD_NOMBRE_REQUERIDO']
const CATEGORIA_COD_ID_REQUERIDO = process.env['CATEGORIA_COD_ID_REQUERIDO']

const PUBLICACION_COD_TITULO = process.env['PUBLICACION_COD_TITULO']
const PUBLICACION_COD_DESCRIPCION = process.env['PUBLICACION_COD_DESCRIPCION']

export { CODIGO_OK, CODIGO_ERROR, USUARIO_COD_NO_ENCONTRADO, USUARIO_COD_SIN_PRIVILEGIOS,
     USUARIO_COD_CORREO_REQUERIDO, USUARIO_COD_PASSWORD_REQUERIDO, USUARIO_COD_ROL_REQUERIDO, USUARIO_COD_NOMBRE_REQUERIDO,
     USUARIO_COD_APELLIDO_REQUERIDO, USUARIO_COD_ID_REQUERIDO, ROL_COD_NOMBRE_REQUERIDO, ROL_COD_ID_REQUERIDO,
     CATEGORIA_COD_NOMBRE_REQUERIDO, CATEGORIA_COD_ID_REQUERIDO, PUBLICACION_COD_TITULO, 
     PUBLICACION_COD_DESCRIPCION }