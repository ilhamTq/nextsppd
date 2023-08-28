/*
  Warnings:

  - Added the required column `tgllahir` to the `Pegawai` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tmptlahir` to the `Pegawai` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pegawai" ADD COLUMN     "tgllahir" DATE NOT NULL,
ADD COLUMN     "tmptlahir" VARCHAR(100) NOT NULL;
