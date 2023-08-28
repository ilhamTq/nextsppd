/*
  Warnings:

  - Added the required column `tahunLatjab` to the `Pegawai` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pegawai" ADD COLUMN     "tahunLatjab" TIMESTAMP(3) NOT NULL;
