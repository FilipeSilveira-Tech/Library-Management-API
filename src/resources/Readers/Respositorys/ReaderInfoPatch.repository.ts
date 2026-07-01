import { prisma } from "../../../database/prisma";
import { ReaderPatch } from "../reader.types";

export default async (
  email: string,
  readerData: ReaderPatch,
): Promise<void> => {
  await prisma.readers.update({
    where: { email: email },
    data: {
      name: readerData?.name,
      email: readerData?.email,
      phone: readerData?.phone,
      bio: readerData?.bio,
    },
  });
};
