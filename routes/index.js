import { Router } from "express";
import { userRoutes } from "./UserRoutes.js";
import { roleRoutes } from "./RoleRoutes.js";
import { categoryRoutes } from "./CategoryRoutes.js";
import { publicationRoutes } from "./PublicationRoutes.js";
import { commentRoutes } from "./CommentRoutes.js";
import { docRoutes } from "./DocRoutes.js";

const API_router = Router();

export const router = (app) => {
    app.use('/api/v1', API_router);

    //Ruta de los contratos
    API_router.use('/api-docs', docRoutes);
    //Importa la Ruta de Users
    API_router.use('/users', userRoutes);
    //Importar la ruta de Roles
    API_router.use('/roles', roleRoutes);
    //Importar la ruta de Roles
    API_router.use('/category', categoryRoutes);
    //Importar la ruta de Publicaciones
    API_router.use('/publication', publicationRoutes);
    //Importar la ruta de Publicaciones
    API_router.use('/comment', commentRoutes);

}