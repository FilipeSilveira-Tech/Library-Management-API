import type { Loans } from "../../database/generated/prisma/client";
export interface ReaderCreated {
  name: string;
  email: string;
  phone: string;
  bio?: string;
}

export interface Reader {
  publicId: string;
  name: string;
  email: string;
  phone: string;
  bio: string | null;
  loans: Loans[];
}
