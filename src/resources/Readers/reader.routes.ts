import { Router } from "express";
const router = Router();

// IMPORTS ROTAS & MIDDLEWARES
import ReaderCreate from "./Controllers/ReaderCreate.controller";
import CreateSchema from "./Schemas/ReaderCreate.schema";
import CreateMiddleware from "./Middlewares/ReaderCreate.middleware";

// == ROTAS GET ==

// == ROTAS POST ==
router.post("/readers", CreateMiddleware(CreateSchema), ReaderCreate);

// == ROTAS PATH ==

// == ROTAS DELETE ==

export default router;
