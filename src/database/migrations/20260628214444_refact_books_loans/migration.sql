/*
  Warnings:

  - You are about to drop the column `loansId` on the `Books` table. All the data in the column will be lost.
  - You are about to alter the column `availableQuantity` on the `Books` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- DropForeignKey
ALTER TABLE "Books" DROP CONSTRAINT "Books_loansId_fkey";

-- AlterTable
ALTER TABLE "Books" DROP COLUMN "loansId",
ALTER COLUMN "availableQuantity" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Loans" ALTER COLUMN "returnDate" DROP NOT NULL;

-- CreateTable
CREATE TABLE "LoanItems" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "loanId" TEXT NOT NULL,
    "bookId" INTEGER NOT NULL,

    CONSTRAINT "LoanItems_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LoanItems_loanId_bookId_key" ON "LoanItems"("loanId", "bookId");

-- AddForeignKey
ALTER TABLE "LoanItems" ADD CONSTRAINT "LoanItems_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LoanItems" ADD CONSTRAINT "LoanItems_loanId_fkey" FOREIGN KEY ("loanId") REFERENCES "Loans"("id") ON DELETE CASCADE ON UPDATE CASCADE;
