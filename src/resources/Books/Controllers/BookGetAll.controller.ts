import type { Request, Response } from "express";
import BookGetsServices from "../Services/BookGetAll.service";
import { PrismaClientKnownRequestError } from "../../../database/generated/prisma/internal/prismaNamespace";

export default async (req: Request, res: Response): Promise<Response> => {
  try {
    const page = req.body?.page;
    const pageSize = req.body?.pageSize;

    const result = await BookGetsServices(page, pageSize);

    return res.status(result.statusCode).json(result);
  } catch (erro) {
    console.log(typeof req.body);
    if (erro instanceof PrismaClientKnownRequestError) {
      return res.status(404).json({
        success: false,
        message: "Nenhum livro encontrado no banco de dados",
        timestamp: new Date().toISOString(),
      });
    }
    return res.status(500).json({
      success: false,
      message: "INTERNAL ERROR - 500",
      timestamp: new Date().toISOString(),
    });
  }
};
