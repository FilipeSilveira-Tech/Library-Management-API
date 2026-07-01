import {
  HttpResponse,
  HttpStatusCode,
  HttpSuccessStatus,
} from "../../response";
import BookGetsRepository from "../Repositories/BookGetAll.repository";

export default async (
  page: number = 1,
  pageSize: number = 10,
): Promise<HttpResponse> => {
  const data = await BookGetsRepository(page, pageSize);
  return HttpResponse({
    statusCode: HttpStatusCode.OK,
    success: HttpSuccessStatus.SUCESSO,
    data,
  });
};
