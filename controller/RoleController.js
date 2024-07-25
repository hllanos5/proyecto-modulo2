import {listarRolRepository } from "../repository/RoleRepository.js"

import { CODIGO_OK, CODIGO_ERROR } from '../config/CodigosConfig.js';

export const listarRol = async (req, res) => {

    try {
        const oRespuesta = await listarRolRepository();
        return oRespuesta;
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}
