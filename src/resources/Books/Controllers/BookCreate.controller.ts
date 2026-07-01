import type { Request, Response } from "express";
import BookCreateService from "../Services/BookCreate.service";
import { PrismaClientKnownRequestError } from "../../../database/generated/prisma/internal/prismaNamespace";
import { HttpStatusCode, HttpInternalError } from "../../response";
export default async (req: Request, res: Response): Promise<Response> => {
  try {
    const bookData = req.body;
    const { statusCode, ...body } = await BookCreateService(bookData);
    return res.status(statusCode).json(body);
  } catch (erro) {
    if (
      erro instanceof PrismaClientKnownRequestError &&
      erro.code === "P2002"
    ) {
      return res
        .status(HttpStatusCode.NOT_FOUND)
        .json(HttpInternalError("O livro já está cadastro no banco de dados!"));
    }
    console.error("Erro interno", erro);
    return res.status(500).json(HttpInternalError());
  }
};
