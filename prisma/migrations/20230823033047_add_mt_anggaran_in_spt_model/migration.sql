/*
  Warnings:

  - Added the required column `mt_anggaran` to the `Spt` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Spt" ADD COLUMN     "mt_anggaran" VARCHAR(255) NOT NULL,
ALTER COLUMN "anggaran" SET DATA TYPE VARCHAR(255);
