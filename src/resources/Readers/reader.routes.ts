import { Router } from "express";
const router = Router();

// == ROTAS GET ==
import ReadersGet from "./Controllers/ReaderGetAll.controller";
router.get("/readers", ReadersGet);

// == ROTAS POST ==
import ReaderCreate from "./Controllers/ReaderCreate.controller";
import CreateSchema from "./Schemas/ReaderCreate.schema";
import CreateMiddleware from "./Middlewares/ReaderCreate.middleware";
router.post("/readers", CreateMiddleware(CreateSchema), ReaderCreate);

// == ROTAS PATH ==

// == ROTAS DELETE ==

export default router;
