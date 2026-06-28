import { Router } from "express";
const router = Router();

// == ROTAS GET ==

import ReaderGetRouter from "./Controllers/ReaderGet.controller";
router.get("/readers/", ReaderGetRouter);

// == ROTAS POST ==
import ReaderCreateRouter from "./Controllers/ReaderCreate.controller";
import CreateSchema from "./Schemas/ReaderCreate.schema";
import ReaderMiddleware from "../middlewareZod";
router.post("/readers", ReaderMiddleware(CreateSchema), ReaderCreateRouter);

// == ROTAS PATH ==
import ReaderPatchRoute from "./Controllers/ReaderInfoPath.controller";
import PatchSchema from "./Schemas/ReaderPatchInfo.schemas";
router.patch("/readers", ReaderMiddleware(PatchSchema), ReaderPatchRoute);

// == ROTAS DELETE ==
import ReaderDeleteRoute from "./Controllers/ReaderDelete.controller";
router.delete("/readers", ReaderDeleteRoute);

export default router;
