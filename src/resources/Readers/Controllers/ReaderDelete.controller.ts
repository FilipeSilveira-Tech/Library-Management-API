import type { Request, Response } from "express";
import ReaderDeleteService from "../Services/ReaderDelete.service";
import { PrismaClientKnownRequestError } from "../../../database/generated/prisma/internal/prismaNamespace";

export default async (req: Request, res: Response): Promise<Response> => {
  try {
    const email = req.query.email;
    if (!email || email == null || req.query == null) {
      return res.status(400).json({
        success: false,
        message: "O parametro 'email' é obrigatório",
        timestamp: new Date().toISOString(),
      });
    }
    if (typeof email !== "string") {
      return res.status(400).json({
        success: false,
        message: "O parametro 'email' deve ser string",
        timestamp: new Date().toISOString(),
      });
    }

    const result = await ReaderDeleteService(email);
    return res.status(result.statusCode).json(result);
  } catch (erro) {
    if (
      erro instanceof PrismaClientKnownRequestError &&
      erro.code === "P2025"
    ) {
      return res.status(404).json({
        success: false,
        message: `❌ Nenhum usuário foi encontrado com o email informado!`,
        timestamp: new Date().toISOString(),
        error: erro.code,
      });
    }

    console.error("❌ Erro interno: ", erro);
    return res.status(500).json({
      success: false,
      message: "INTERNAL ERROR - 500",
      timestamp: new Date().toISOString(),
    });
  }
};
