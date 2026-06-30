import type { Request, Response } from "express";
import BookGetByIdService from "../Services/BookGetById.service";
import { PrismaClientKnownRequestError } from "../../../database/generated/prisma/internal/prismaNamespace";

export default async (req: Request, res: Response): Promise<Response> => {
  try {
    const timestamp = new Date().toISOString();
    const id = req.params?.id;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "É obrigatório passar um id via query!",
        timestamp: timestamp,
      });
    }
    const idNumber = Number(id);
    const result = await BookGetByIdService(idNumber);
    return res.status(result.statusCode).json(result);
  } catch (erro) {
    if (
      erro instanceof PrismaClientKnownRequestError &&
      erro.code === "P2025"
    ) {
      return res.status(404).json({
        success: false,
        message: "Nenhum livro foi encontrado!",
        timestamp: new Date().toISOString(),
      });
    }
    return res.status(500).json({
      success: false,
      message: "INTERNAL ERRO - 500",
      timestamp: new Date().toISOString(),
    });
  }
};
