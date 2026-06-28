import type { Request, Response } from "express";
import ReaderGetService from "../Services/ReaderGetAll.service";

export default async (req: Request, res: Response): Promise<Response> => {
  try {
    const result = await ReaderGetService();
    return res.status(result.statusCode).json(result);
  } catch (erro) {
    console.error("❌ Erro interno: ", erro);
    return res.status(500).json({
      success: false,
      message: "INTERNAL ERROR - 500",
      timestamp: new Date().toISOString(),
    });
  }
};
