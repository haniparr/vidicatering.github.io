/*
  Warnings:

  - Added the required column `category` to the `BlogModel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `BlogModel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BlogModel" ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL;
