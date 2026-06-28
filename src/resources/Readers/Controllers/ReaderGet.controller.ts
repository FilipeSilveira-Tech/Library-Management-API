import type { Request, Response } from "express";
import ReaderGetAllService from "../Services/ReaderGetAll.service";
import ReaderGetOneService from "../Services/ReaderGetOne.service";

export default async (req: Request, res: Response): Promise<Response> => {
  try {
    const timestamp = new Date().toISOString();
    const id = req.query.id;
    if (!id) {
      const result = await ReaderGetAllService();
      return res.status(result.statusCode).json(result);
    }

    if (id == null || id == undefined) {
      return res.status(400).json({
        success: false,
        message: "O parametro :id é obrigatório",
        timestamp: timestamp,
      });
    }
    const idString = id as string;
    const result = await ReaderGetOneService(idString);
    return res.status(result.statusCode).json(result);
  } catch (erro) {
    console.error("❌ Erro interno: ", erro);
    return res.status(500).json({
      success: false,
      message: "INTERNAL ERROR - 500",
      timestamp: new Date().toISOString(),
      error: erro,
    });
  }
};
