/*
  Warnings:

  - Changed the type of `nip` on the `Pegawai` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Pegawai" DROP COLUMN "nip",
ADD COLUMN     "nip" INTEGER NOT NULL;
