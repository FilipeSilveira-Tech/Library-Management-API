import { prisma } from "../../../database/prisma";

export default async (email: string): Promise<void> => {
  await prisma.readers.delete({
    where: { email: email },
  });
};
