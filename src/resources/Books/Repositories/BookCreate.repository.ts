import { prisma } from "../../../database/prisma";
import { BookCreated } from "../book.types";

export default async (bookData: BookCreated): Promise<void> => {
  await prisma.books.create({
    data: {
      ISBN: bookData.isbn,
      author: bookData.author,
      category: bookData.category,
      title: bookData.title,
      publisher: bookData.publisher,
      year: bookData.year,
      availableQuantity: bookData.availableQuantity,
    },
  });
};
