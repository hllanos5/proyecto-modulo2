import {listarUsuarioRepository, listarUsuarioConRolesRepository,
        obtenerUsuarioConRolesRepository, crearUsuarioRepository,
        modificarUsuarioRepository, eliminarUsuarioRepository, modificarImagenUsuarioRepository } from "../repository/UsersRepository.js"

import { CODIGO_OK, CODIGO_ERROR } from '../config/CodigosConfig.js';

export const listarUsuario = async (req, res) => {

    try {
        const oRespuesta = await listarUsuarioRepository();
        return oRespuesta;
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

export const listarUsuarioConRoles = async (req, res) => {

    try {
        const oRespuesta = await listarUsuarioConRolesRepository();
        return oRespuesta;
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

export const obtenerUsuarioConRoles = async (req, res) => {

    try {
        const oRespuesta = await obtenerUsuarioConRolesRepository(req);
        return oRespuesta;
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

export const crearUsuario = async (req, res) => {

    try {
        const oRespuesta = await crearUsuarioRepository(req);
        return oRespuesta;
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

export const modificarUsuario = async (req, res) => {

    try {
        const oRespuesta = await modificarUsuarioRepository(req);
        return oRespuesta;
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

export const eliminarUsuario = async (req, res) => {

    try {
        const oRespuesta = await eliminarUsuarioRepository(req);
        return oRespuesta;
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

export const modificarUsuarioImagen = async (req, res) => {

    try {
        const oRespuesta = await modificarImagenUsuarioRepository(req);
        return oRespuesta;
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}