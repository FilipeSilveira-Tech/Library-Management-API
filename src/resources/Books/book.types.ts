import { Loans } from "../../database/generated/prisma/client";
export interface BookCreated {
  title: string;
  isbn: string;
  author: string;
  publisher: string;
  category: string;
  year: string;
  availableQuantity: number;
}

export interface Book extends BookCreated {
  id: number;
  loans: Loans[];
}
