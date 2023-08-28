/*
  Warnings:

  - You are about to alter the column `keperluan` on the `Spt` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(100)`.
  - You are about to alter the column `anggaran` on the `Spt` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(100)`.
  - You are about to alter the column `tempat` on the `Spt` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(100)`.

*/
-- AlterTable
ALTER TABLE "Spt" ALTER COLUMN "keperluan" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "anggaran" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "tempat" SET DATA TYPE VARCHAR(100);
