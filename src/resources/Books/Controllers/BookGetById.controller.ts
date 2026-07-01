import type { Request, Response } from "express";
import BookGetByIdService from "../Services/BookGetById.service";
import { PrismaClientKnownRequestError } from "../../../database/generated/prisma/internal/prismaNamespace";
import { HttpInternalError, HttpStatusCode } from "../../response";

export default async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = req.params?.id;
    if (!id) {
      return res
        .status(HttpStatusCode.BAD_REQUEST)
        .json(HttpInternalError("É obrigatório passar um id via param!"));
    }
    const idNumber = Number(id);
    const { statusCode, ...body } = await BookGetByIdService(idNumber);
    return res.status(statusCode).json(body);
  } catch (erro) {
    if (
      erro instanceof PrismaClientKnownRequestError &&
      erro.code === "P2025"
    ) {
      return res
        .status(HttpStatusCode.NOT_FOUND)
        .json(HttpInternalError("Nenhum livro foi encontrado!"));
    }
    return res.status(HttpStatusCode.SERVER_ERROR).json(HttpInternalError());
  }
};
