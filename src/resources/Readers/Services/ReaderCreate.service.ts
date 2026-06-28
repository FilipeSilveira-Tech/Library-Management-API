import { HttpResponse, HttpStatusCode } from "../../response";
import { ReaderCreated } from "../reader.types";
import ReaderCreateRepository from "../Respositorys/ReadersCreate.repository";

export default async (reader_data: ReaderCreated): Promise<HttpResponse> => {
  await ReaderCreateRepository(reader_data);
  return {
    statusCode: HttpStatusCode.CREATED,
    success: true,
    message: "✅ Usuário criado com sucesso!",
    timestamp: new Date().toISOString(),
  };
};
