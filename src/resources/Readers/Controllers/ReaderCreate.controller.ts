import type { Request, Response } from "express";
import ReaderCreateService from "../Services/ReaderCreate.service";
import { HttpInternalError } from "../../response";

export default async (req: Request, res: Response): Promise<Response> => {
  try {
    const { statusCode, ...body } = await ReaderCreateService(req.body);
    return res.status(statusCode).json(body);
  } catch (erro) {
    console.error("❌ Erro Interno:", erro);
    return res.status(500).json(HttpInternalError());
  }
};
