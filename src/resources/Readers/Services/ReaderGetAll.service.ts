import {
  HttpResponse,
  HttpStatusCode,
  HttpSuccessStatus,
} from "../../response";
import ReaderGetAllRepository from "../Respositorys/ReaderGetAll.repository";

export default async (): Promise<HttpResponse> => {
  const readers = await ReaderGetAllRepository();

  return HttpResponse({
    statusCode: HttpStatusCode.OK,
    success: HttpSuccessStatus.SUCESSO,
    data: { readers },
  });
};
