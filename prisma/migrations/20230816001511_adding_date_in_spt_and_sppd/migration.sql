/*
  Warnings:

  - Added the required column `tglsppd` to the `Sppd` table without a default value. This is not possible if the table is not empty.
  - Added the required column `berangkat` to the `Spt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kembali` to the `Spt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tglspt` to the `Spt` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sppd" ADD COLUMN     "tglsppd" DATE NOT NULL;

-- AlterTable
ALTER TABLE "Spt" ADD COLUMN     "berangkat" DATE NOT NULL,
ADD COLUMN     "kembali" DATE NOT NULL,
ADD COLUMN     "tglspt" DATE NOT NULL;
