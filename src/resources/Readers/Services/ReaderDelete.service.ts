import { HttpResponse, HttpStatusCode } from "../../response";
import ReaderDeleteRepository from "../Respositorys/ReaderDelete.repository";

export default async (email: string): Promise<HttpResponse> => {
  await ReaderDeleteRepository(email);
  return {
    statusCode: HttpStatusCode.NO_CONTENT,
    success: true,
    message: "Usuário deletado com sucesso!",
    timestamp: new Date().toISOString(),
  };
};
