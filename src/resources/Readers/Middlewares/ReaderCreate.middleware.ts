import { Request, Response, NextFunction } from "express";
import { z, ZodObject } from "zod";
import { AnyZodObject } from "zod/v3";

export default (schema: ZodObject) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<any> => {
    const result = await schema.safeParseAsync(req.body);

    if (!result.success) {
      return res.status(400).json({
        sucess: false,
        message: "Dados de requisição inválidos",
        errors: result.error.format(),
      });
    }

    req.body = result.data;
    return next();
  };
};
