import { prisma } from "../../../database/prisma";
import { Reader } from "../reader.types";

export default async (): Promise<Reader[]> => {
  const readers = await prisma.readers.findMany({
    select: {
      publicId: true,
      name: true,
      email: true,
      phone: true,
      bio: true,
      loans: true,
    },
  });
  return readers;
};
