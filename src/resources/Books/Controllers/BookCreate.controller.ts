import type { Request, Response } from "express";
import BookCreateService from "../Services/BookCreate.service";
import { PrismaClientKnownRequestError } from "../../../database/generated/prisma/internal/prismaNamespace";
export default async (req: Request, res: Response): Promise<Response> => {
  try {
    const bookData = req.body;
    const result = await BookCreateService(bookData);
    return res.status(result.statusCode).json(result);
  } catch (erro) {
    if (
      erro instanceof PrismaClientKnownRequestError &&
      erro.code === "P2002"
    ) {
      return res.status(400).json({
        success: false,
        message: "O livro já está cadastrado no banco de dados!",
        timestamp: new Date().toISOString(),
      });
    }
    console.error("Erro interno", erro);
    return res.status(500).json({
      success: false,
      message: "INTERNAL ERROR - 500",
      timestamp: new Date().toISOString(),
    });
  }
};
