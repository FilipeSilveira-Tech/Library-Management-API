import {
  HttpResponse,
  HttpStatusCode,
  HttpSuccessStatus,
} from "../../response";
import { BookCreated } from "../book.types";
import BookCreateRepository from "../Repositories/BookCreate.repository";

export default async (bookData: BookCreated): Promise<HttpResponse> => {
  const bookCreated = await BookCreateRepository(bookData);
  return HttpResponse({
    statusCode: HttpStatusCode.OK,
    success: HttpSuccessStatus.SUCESSO,
    message: "✅ Livro criado com sucesso!",
    data: { bookCreated: bookCreated },
  });
};
