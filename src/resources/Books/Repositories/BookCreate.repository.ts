import { prisma } from "../../../database/prisma";
import { BookCreated } from "../book.types";

export default async (
  bookData: BookCreated,
): Promise<{
  title: string;
  ISBN: string;
  author: string;
  publisher: string;
  category: string[];
  year: string;
  availableQuantity: number;
  id: number;
}> => {
  const newBook = await prisma.books.create({
    data: {
      ISBN: bookData.ISBN,
      author: bookData.author,
      category: bookData.category,
      title: bookData.title,
      publisher: bookData.publisher,
      year: bookData.year,
      availableQuantity: bookData.availableQuantity,
    },
  });
  return newBook;
};
