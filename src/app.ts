import "dotenv/config";
import express from "express";
const { PORT } = process.env;

const app = express();
app.use(express.json());

// IMPORT ROTAS:
import logRoute from "./resources/logMiddleware";
app.use(logRoute);

import ReadersRoutes from "./resources/Readers/reader.routes";
import BooksRoutes from "./resources/Books/book.routes";

app.get("/health", (req, res, next) => {
  const startTime = performance.now();
  res.status(200).json({
    success: true,
    executionTime: Math.trunc(performance.now() - startTime),
    uptime: process.uptime(),
    message: "OK",
  });
});

app.use(ReadersRoutes);
app.use(BooksRoutes);

app.listen(PORT, () => {
  console.log(`API ONLINE! PORT ${PORT}`);
});
