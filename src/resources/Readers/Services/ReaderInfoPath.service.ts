import {
  HttpResponse,
  HttpStatusCode,
  HttpSuccessStatus,
} from "../../response";
import { ReaderPatch } from "../reader.types";
import ReaderInfoPatchRepository from "../Respositorys/ReaderInfoPatch.repository";

export default async (
  email: string,
  readerData: ReaderPatch,
): Promise<HttpResponse> => {
  await ReaderInfoPatchRepository(email, readerData);

  return HttpResponse({
    statusCode: HttpStatusCode.OK,
    success: HttpSuccessStatus.SUCESSO,
    message: "✅ Leitor modificado com sucesso!",
  });
};
