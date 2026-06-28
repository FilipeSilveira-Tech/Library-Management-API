import { HttpResponse, HttpStatusCode } from "../../response";
import ReaderGetAllRepository from "../Respositorys/ReaderGetAll.repository";

export default async (): Promise<HttpResponse> => {
  const resultDB = await ReaderGetAllRepository();
  return {
    statusCode: HttpStatusCode.OK,
    success: true,
    timestamp: new Date().toISOString(),
    data: { resultDB },
  };
};
