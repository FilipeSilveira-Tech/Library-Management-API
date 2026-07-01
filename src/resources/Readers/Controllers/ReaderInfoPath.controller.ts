import type { Request, Response } from "express";
import ReaderInfoPathService from "../Services/ReaderInfoPath.service";
import { HttpInternalError } from "../../response";

export default async (req: Request, res: Response): Promise<Response> => {
  try {
    const uuidReader = req.body.publicId;
    if (!uuidReader) {
      return res
        .status(400)
        .json(
          HttpInternalError("A propriedade 'publicId' é obrigatória o envio!"),
        );
    }
    if (req.body == null) {
      return res
        .status(400)
        .json(
          HttpInternalError(
            "É obrigatório passar pelo menos 1 priedade no body!",
          ),
        );
    }

    const readerData = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      bio: req.body.bio,
    };
    const { statusCode, ...body } = await ReaderInfoPathService(
      uuidReader,
      readerData,
    );
    return res.status(statusCode).json(body);
  } catch (erro) {
    return res.status(500).json(HttpInternalError());
  }
};
