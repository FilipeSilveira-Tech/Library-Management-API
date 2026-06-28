import { HttpResponse, HttpStatusCode } from "../../response";
import { BookCreated } from "../book.types";
import BookCreateRepository from "../Repositories/BookCreate.repository";

export default async (bookData: BookCreated): Promise<HttpResponse> => {
  await BookCreateRepository(bookData);
  return {
    statusCode: HttpStatusCode.OK,
    success: true,
    timestamp: new Date().toISOString(),
    message: "✅ Livro criado com sucesso!",
  };
};
