import {
  HttpResponse,
  HttpStatusCode,
  HttpSuccessStatus,
} from "../../response";
import BookGetByIdRepository from "../Repositories/BookGetById.repository";

export default async (id: number): Promise<HttpResponse> => {
  const book = await BookGetByIdRepository(id);
  if (book == null) {
    return HttpResponse({
      statusCode: HttpStatusCode.NOT_FOUND,
      success: HttpSuccessStatus.FALHA,
      message: `Nenhum livro encontrado com o id ${id}`,
    });
  }
  return HttpResponse({
    statusCode: HttpStatusCode.OK,
    success: HttpSuccessStatus.SUCESSO,
    data: { book },
  });
};
