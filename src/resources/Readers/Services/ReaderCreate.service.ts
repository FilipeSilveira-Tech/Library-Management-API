import {
  HttpResponse,
  HttpStatusCode,
  HttpSuccessStatus,
} from "../../response";
import { ReaderCreated } from "../reader.types";
import ReaderCreateRepository from "../Respositorys/ReadersCreate.repository";

export default async (reader_data: ReaderCreated): Promise<HttpResponse> => {
  await ReaderCreateRepository(reader_data);
  return HttpResponse({
    statusCode: HttpStatusCode.CREATED,
    success: HttpSuccessStatus.SUCESSO,
    message: "✅ Usuário criado com sucesso!",
  });
};
