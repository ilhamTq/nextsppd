/*
  Warnings:

  - Added the required column `ruang` to the `Golongan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `golongan` to the `Pjsppd` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ruang` to the `Pjsppd` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Golongan" ADD COLUMN     "ruang" VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE "Pjsppd" ADD COLUMN     "golongan" VARCHAR(100) NOT NULL,
ADD COLUMN     "ruang" VARCHAR(100) NOT NULL;
