/*
  Warnings:

  - The `category` column on the `Books` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Books" DROP COLUMN "category",
ADD COLUMN     "category" TEXT[];
