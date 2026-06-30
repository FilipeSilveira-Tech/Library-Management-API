import { prisma } from "../../../database/prisma";
import { Book } from "../book.types";

export default async (id: number): Promise<Book | null> => {
  const book = await prisma.books.findUnique({
    where: { id: id },
  });
  return book;
};
