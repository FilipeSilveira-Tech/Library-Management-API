import type { Request, Response } from "express";
import ReaderInfoPathService from "../Services/ReaderInfoPath.service";

export default async (req: Request, res: Response): Promise<Response> => {
  try {
    const uuidReader = req.body.publicId;
    if (!uuidReader) {
      return res.status(400).json({
        success: false,
        message: `A propriedade 'publicId' é obrigatória o envio!`,
        timestamp: new Date().toISOString(),
      });
    }
    if (req.body == null) {
      return res.status(400).json({
        success: false,
        message: "É obrigatório passar pelo menos 1 priedade no body!",
        timestamp: new Date().toISOString(),
      });
    }

    const readerData = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      bio: req.body.bio,
    };
    const result = await ReaderInfoPathService(uuidReader, readerData);
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
