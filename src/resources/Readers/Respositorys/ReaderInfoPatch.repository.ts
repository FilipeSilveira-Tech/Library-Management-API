import { prisma } from "../../../database/prisma";
import { ReaderPatch } from "../reader.types";

export default async (
  uuidReader: string,
  readerData: ReaderPatch,
): Promise<void> => {
  await prisma.readers.update({
    where: { publicId: uuidReader },
    data: {
      name: readerData.name,
      email: readerData.email,
      phone: readerData.phone,
      bio: readerData.bio,
    },
  });
};
