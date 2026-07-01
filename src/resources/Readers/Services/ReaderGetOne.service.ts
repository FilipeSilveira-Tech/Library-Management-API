import {
  HttpResponse,
  HttpStatusCode,
  HttpSuccessStatus,
} from "../../response";
import ReaderGetOneRepository from "../Respositorys/ReaderGetOne.repository";

export default async (uuidReader: string): Promise<HttpResponse> => {
  const reader = await ReaderGetOneRepository(uuidReader);

  return HttpResponse({
    statusCode: HttpStatusCode.OK,
    success: HttpSuccessStatus.SUCESSO,
    data: { reader },
  });
};
