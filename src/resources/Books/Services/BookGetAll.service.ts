import { HttpResponse, HttpStatusCode } from "../../response";
import BookGetsRepository from "../Repositories/BookGetAll.repository";

export default async (
  page: number = 1,
  pageSize: number = 10,
): Promise<HttpResponse> => {
  const data = await BookGetsRepository(page, pageSize);
  return {
    statusCode: HttpStatusCode.OK,
    success: true,
    timestamp: new Date().toISOString(),
    data,
  };
};
