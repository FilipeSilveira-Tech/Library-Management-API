import { prisma } from "../../../database/prisma";
import { Reader } from "../reader.types";

export default async (uuidReader: string): Promise<Reader | null> => {
  const reader = await prisma.readers.findUnique({
    where: { publicId: uuidReader },
    select: {
      bio: true,
      email: true,
      name: true,
      phone: true,
      publicId: true,
      loans: true,
    },
  });
  return reader;
};
