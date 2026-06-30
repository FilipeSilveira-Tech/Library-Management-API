import { HttpResponse, HttpStatusCode } from "../../response";
import BookGetByIdRepository from "../Repositories/BookGetById.repository";

export default async (id: number): Promise<HttpResponse> => {
  const book = await BookGetByIdRepository(id);
  return {
    statusCode: HttpStatusCode.OK,
    success: true,
    timestamp: new Date().toISOString(),
    data: { book },
  };
};
