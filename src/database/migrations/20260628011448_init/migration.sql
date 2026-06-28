-- CreateTable
CREATE TABLE "Books" (
    "title" TEXT NOT NULL,
    "ISBN" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "publisher" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "availableQuantity" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Books_pkey" PRIMARY KEY ("ISBN")
);

-- CreateIndex
CREATE UNIQUE INDEX "Books_ISBN_key" ON "Books"("ISBN");
