import type { Request, Response } from "express";
import BookGetsServices from "../Services/BookGetAll.service";
import { PrismaClientKnownRequestError } from "../../../database/generated/prisma/internal/prismaNamespace";
import { HttpInternalError } from "../../response";

export default async (req: Request, res: Response): Promise<Response> => {
  try {
    const page = req.body?.page;
    const pageSize = req.body?.pageSize;

    const { statusCode, ...body } = await BookGetsServices(page, pageSize);

    return res.status(statusCode).json(body);
  } catch (erro) {
    console.log(typeof req.body);
    if (erro instanceof PrismaClientKnownRequestError) {
      return res
        .status(404)
        .json(HttpInternalError("Nenhum livro encontrado no banco de dados"));
    }
    return res.status(500).json(HttpInternalError());
  }
};
