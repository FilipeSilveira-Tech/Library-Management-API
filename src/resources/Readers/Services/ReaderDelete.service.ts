import {
  HttpResponse,
  HttpStatusCode,
  HttpSuccessStatus,
} from "../../response";
import ReaderDeleteRepository from "../Respositorys/ReaderDelete.repository";

export default async (email: string): Promise<HttpResponse> => {
  await ReaderDeleteRepository(email);

  return HttpResponse({
    statusCode: HttpStatusCode.OK,
    success: HttpSuccessStatus.SUCESSO,
    message: "✅ Usuário deletado com sucesso!",
  });
};
