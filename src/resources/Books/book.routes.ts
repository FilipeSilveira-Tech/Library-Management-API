import { Router } from "express";
import MiddlewareZod from "../middlewareZod";
const router = Router();

// === ROTA GET ===

// === ROTA POST ===
import BookCreateSchema from "./Schemas/BookCreate.schema";
import BookCreateController from "./Controllers/BookCreate.controller";
router.post("/books", MiddlewareZod(BookCreateSchema), BookCreateController);

// === ROTA PATCH ===

// === ROTA DELTE ===

export default router;
