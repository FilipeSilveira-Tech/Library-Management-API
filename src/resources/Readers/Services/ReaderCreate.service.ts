import { ReaderCreated } from "../reader.types";
import ReaderCreateRepository from "../Respositorys/ReadersCreate.repository";

export default async (reader_data: ReaderCreated) => {
  const resultDB = await ReaderCreateRepository(reader_data);
  return resultDB;
};
