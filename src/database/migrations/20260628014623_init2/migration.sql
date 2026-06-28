/*
  Warnings:

  - The primary key for the `Books` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `loansId` to the `Books` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "LoansStatus" AS ENUM ('CANCELLED', 'DAMAGED', 'EXPIRED', 'LOST', 'OVERDUE', 'RENEWED', 'REQUESTED', 'RETURNED');

-- AlterTable
ALTER TABLE "Books" DROP CONSTRAINT "Books_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "loansId" TEXT NOT NULL,
ADD CONSTRAINT "Books_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "Readers" (
    "id" SERIAL NOT NULL,
    "publicId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "bio" TEXT,

    CONSTRAINT "Readers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Loans" (
    "id" TEXT NOT NULL,
    "loanDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expectedReturnDate" TIMESTAMP(3) NOT NULL,
    "returnDate" TIMESTAMP(3) NOT NULL,
    "status" "LoansStatus" NOT NULL,
    "readerId" INTEGER NOT NULL,

    CONSTRAINT "Loans_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Readers_publicId_key" ON "Readers"("publicId");

-- CreateIndex
CREATE UNIQUE INDEX "Readers_email_key" ON "Readers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Loans_id_key" ON "Loans"("id");

-- AddForeignKey
ALTER TABLE "Books" ADD CONSTRAINT "Books_loansId_fkey" FOREIGN KEY ("loansId") REFERENCES "Loans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loans" ADD CONSTRAINT "Loans_readerId_fkey" FOREIGN KEY ("readerId") REFERENCES "Readers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
