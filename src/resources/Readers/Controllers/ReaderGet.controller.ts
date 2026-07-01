import type { Request, Response } from "express";
import ReaderGetAllService from "../Services/ReaderGetAll.service";
import ReaderGetOneService from "../Services/ReaderGetOne.service";
import { HttpInternalError } from "../../response";

export default async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = req.query.id;
    if (!id) {
      const { statusCode, ...body } = await ReaderGetAllService();
      return res.status(statusCode).json(body);
    }

    if (id == null || id == undefined) {
      return res
        .status(400)
        .json(HttpInternalError("O parametro :id é obrigatório"));
    }
    const idString = id as string;
    const { statusCode, ...body } = await ReaderGetOneService(idString);
    return res.status(statusCode).json(body);
  } catch (erro) {
    return res.status(500).json(HttpInternalError());
  }
};
