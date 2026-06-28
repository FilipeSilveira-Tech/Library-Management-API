import { NextFunction, Response, Request } from "express";
import type { Send } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
  const start = Math.trunc(performance.now());
  const oldSend = res.send;
  const duration = Math.trunc(performance.now() - start);
  console.log(
    `[${new Date().toLocaleTimeString()}] Método: ${req.method} | Rota: ${req.url} - ${res.statusCode} (${duration}ms)`,
  );
  next();
};
