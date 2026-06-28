import { HttpResponse, HttpStatusCode } from "../../response";
import { ReaderPatch } from "../reader.types";
import ReaderInfoPatchRepository from "../Respositorys/ReaderInfoPatch.repository";

export default async (
  uuidReader: string,
  readerData: ReaderPatch,
): Promise<HttpResponse> => {
  await ReaderInfoPatchRepository(uuidReader, readerData);
  return {
    statusCode: HttpStatusCode.OK,
    success: true,
    message: "Usuário modificado com sucesso!",
    timestamp: new Date().toISOString(),
  };
};
