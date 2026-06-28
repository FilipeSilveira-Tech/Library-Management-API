import { DefaultResponse } from "../../response";
import ReaderGetAllRepository from "../Respositorys/ReaderGetAll.repository";

export default async (): Promise<DefaultResponse> => {
  const resultDB = await ReaderGetAllRepository();
  return resultDB;
};
