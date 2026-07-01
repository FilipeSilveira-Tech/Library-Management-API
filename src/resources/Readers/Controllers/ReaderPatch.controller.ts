import type { Request, Response } from "express";
import { HttpInternalError, HttpResponse } from "../../response";
import ReaderInfoPathService from "../Services/ReaderInfoPath.service";
import { PrismaClientKnownRequestError } from "../../../database/generated/prisma/internal/prismaNamespace";

export default async (req: Request, res: Response): Promise<Response> => {
  try {
    const email = req.query?.email as string;
    const readerInfo = req?.body;

    if (!email) {
      return res
        .status(400)
        .json(HttpInternalError("É obrigátorio o envio do email no query!"));
    }
    if (!readerInfo || readerInfo == null) {
      return res
        .status(400)
        .json(
          HttpInternalError(
            "É obrigatório o envio de pelo menos um parâmetro para alterar do leitor!",
          ),
        );
    }
    const { statusCode, ...body } = await ReaderInfoPathService(
      email,
      readerInfo,
    );
    return res.status(statusCode).json(body);
  } catch (erro) {
    if (
      erro instanceof PrismaClientKnownRequestError &&
      erro.code === "P2025"
    ) {
      return res
        .status(404)
        .json(HttpInternalError("❌ Usuário não encontrado!"));
    }
    return res.status(500).json(HttpInternalError());
  }
};
