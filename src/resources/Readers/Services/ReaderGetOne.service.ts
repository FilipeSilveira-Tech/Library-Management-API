import { HttpResponse, HttpStatusCode } from "../../response";
import ReaderGetOneRepository from "../Respositorys/ReaderGetOne.repository";

export default async (uuidReader: string): Promise<HttpResponse> => {
  const reader = await ReaderGetOneRepository(uuidReader);
  return {
    statusCode: HttpStatusCode.OK,
    success: true,
    timestamp: new Date().toISOString(),
    data: { reader },
  };
};
