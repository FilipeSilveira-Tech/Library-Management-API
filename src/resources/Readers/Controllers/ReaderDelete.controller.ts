import type { Request, Response } from "express";
import ReaderDeleteService from "../Services/ReaderDelete.service";
import { PrismaClientKnownRequestError } from "../../../database/generated/prisma/internal/prismaNamespace";
import { HttpInternalError } from "../../response";

export default async (req: Request, res: Response): Promise<Response> => {
  try {
    const email = req.query.email;
    if (!email || email == null || req.query == null) {
      return res
        .status(400)
        .json(HttpInternalError("O parametro 'email' é obrigatório"));
    }
    if (typeof email !== "string") {
      return res
        .status(400)
        .json(HttpInternalError("O parametro 'email' deve ser string"));
    }

    const { statusCode, ...body } = await ReaderDeleteService(email);
    return res.status(statusCode).json(body);
  } catch (erro) {
    if (
      erro instanceof PrismaClientKnownRequestError &&
      erro.code === "P2025"
    ) {
      return res
        .status(404)
        .json(
          HttpInternalError(
            "❌ Nenhum usuário foi encontrado com o email informado!",
          ),
        );
    }
    return res.status(500).json(HttpInternalError());
  }
};
