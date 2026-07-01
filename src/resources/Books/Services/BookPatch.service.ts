import {
  HttpResponse,
  HttpStatusCode,
  HttpSuccessStatus,
} from "../../response";
import { Book } from "../book.types";
import { attBook, infoBook } from "../Repositories/BookPatch.repository";

export default async (id: number, book: Book): Promise<HttpResponse> => {
  const qtdBook = await infoBook(id);
  if (qtdBook == null) {
    return HttpResponse({
      statusCode: HttpStatusCode.NOT_FOUND,
      success: HttpSuccessStatus.FALHA,
      message: `Não foi encotrado nenhum livro com o id ${id}`,
    });
  }
  if (book.availableQuantity <= 0) {
    return HttpResponse({
      statusCode: HttpStatusCode.BAD_REQUEST,
      success: HttpSuccessStatus.FALHA,
      message: "Não é permitido quantidades negativas!",
    });
  }

  await attBook(id, book);

  return HttpResponse({
    statusCode: HttpStatusCode.OK,
    success: HttpSuccessStatus.SUCESSO,
    message: "✅ Livro atualizado com sucesso!",
  });
};
