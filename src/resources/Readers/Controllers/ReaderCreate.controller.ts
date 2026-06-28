import type { Request, Response } from "express";
import ReaderCreateService from "../Services/ReaderCreate.service";

export default async (req: Request, res: Response): Promise<Response> => {
  try {
    const result = await ReaderCreateService(req.body);
    return res.status(result.statusCode).json(result);
  } catch (erro) {
    console.error("❌ Erro Interno:", erro);
    return res.status(500).json({
      success: false,
      message: "INTERNAL ERROR - 500",
      timestamp: new Date().toISOString(),
    });
  }
};
