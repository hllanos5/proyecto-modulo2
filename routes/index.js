import { Router } from "express";
import { userRoutes } from "./UserRoutes.js";
import { roleRoutes } from "./RoleRoutes.js";

const API_router = Router();

export const router = (app) => {
    app.use('/api/v1', API_router);

    //Importa la Ruta de Users
    API_router.use('/users', userRoutes);
    //Importar la ruta de Roles
    API_router.use('/roles', roleRoutes);

}