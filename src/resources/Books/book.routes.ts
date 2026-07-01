import { Router } from "express";
import MiddlewareZod from "../middlewareZod";
const router = Router();

// === ROTA GET ===
import BookGetAllController from "./Controllers/BookGetAll.controller";
router.get("/books", BookGetAllController);

import BookGetByIdController from "./Controllers/BookGetById.controller";
router.get("/books/:id", BookGetByIdController);

// === ROTA POST ===
import BookCreateSchema from "./Schemas/BookCreate.schema";
import BookCreateController from "./Controllers/BookCreate.controller";
router.post("/books", MiddlewareZod(BookCreateSchema), BookCreateController);

// === ROTA PATCH ===
import BookPatchController from "./Controllers/BookPatch.controller";
router.patch("/books", BookPatchController);

// === ROTA DELTE ===

export default router;
