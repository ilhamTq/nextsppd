/*
  Warnings:

  - You are about to alter the column `keperluan` on the `Spt` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "Spt" ALTER COLUMN "keperluan" SET DATA TYPE VARCHAR(255);
