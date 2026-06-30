import { prisma } from "../../../database/prisma";

interface IGetBooks {
  data: {
    id: number;
    title: string;
    ISBN: string;
    author: string;
    publisher: string;
    category: string[];
    year: string;
    availableQuantity: number;
  }[];
  meta: {
    totalItem: number;
    currentPage: number;
    totalPages: number;
    pageSize: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

export default async (
  page: number = 1,
  pageSize: number = 10,
): Promise<IGetBooks> => {
  const currentPage = Math.max(1, page);
  const limit = Math.max(1, pageSize);

  const offset = (currentPage - 1) * limit;

  const [data, totalItem] = await prisma.$transaction([
    prisma.books.findMany({
      skip: offset,
      take: limit,
      orderBy: {
        title: "asc",
      },
    }),
    prisma.books.count(),
  ]);

  const totalPages = Math.ceil(totalItem / limit);

  return {
    data,
    meta: {
      totalItem,
      currentPage,
      totalPages,
      pageSize: limit,
      hasNextPage: currentPage < totalPages,
      hasPreviousPage: currentPage > 1,
    },
  };
};
