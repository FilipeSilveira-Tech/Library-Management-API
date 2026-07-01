import { prisma } from "../../../database/prisma";
import { Book } from "../book.types";

export const attBook = async (id: number, book: Book): Promise<void> => {
  await prisma.books.update({
    where: { id: id },
    data: {
      ISBN: book?.ISBN,
      author: book?.author,
      category: book?.category,
      publisher: book?.publisher,
      title: book?.title,
      year: book?.year,
      availableQuantity: book?.availableQuantity,
    },
  });
};

export const infoBook = async (id: number) => {
  return await prisma.books.findUnique({
    where: { id: id },
    select: { availableQuantity: true },
  });
};
