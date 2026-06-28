import { prisma } from "../../../database/prisma";
import { ReaderCreated } from "../reader.types";

export default async (reader_data: ReaderCreated): Promise<void> => {
  await prisma.readers.create({
    data: {
      name: reader_data.name,
      email: reader_data.email,
      phone: reader_data.phone,
      bio: reader_data.bio || "Um entusiasta por leituras!",
    },
  });
};
