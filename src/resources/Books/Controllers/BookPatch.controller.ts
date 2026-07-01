import type { Request, Response } from "express";
import BookPatchService from "../Services/BookPatch.service";
import { Book } from "../book.types";
import { HttpInternalError } from "../../response";

export default async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = req.query?.id;
    const bookInfo: Book = req?.body;
    if (!id) {
      return res
        .status(400)
        .json(HttpInternalError("É obrigatório enviar o ID via query 'id"));
    }
    const idNumber = Number(id);

    if (!bookInfo || bookInfo == null) {
      return res
        .status(400)
        .json(
          HttpInternalError(
            "É obrigatório enviar pelo 1 parametro no corpo para a atualização",
          ),
        );
    }
    const { statusCode, ...body } = await BookPatchService(idNumber, bookInfo);
    return res.status(statusCode).json(body);
  } catch (erro) {
    console.error("ERRO: \n", erro);
    return res.status(500).json(HttpInternalError());
  }
};
