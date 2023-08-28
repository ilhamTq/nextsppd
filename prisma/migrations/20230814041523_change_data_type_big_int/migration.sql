/*
  Warnings:

  - You are about to alter the column `nip` on the `Pegawai` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `BigInt`.
  - You are about to alter the column `nip` on the `Pjsppd` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `BigInt`.

*/
-- AlterTable
ALTER TABLE "Pegawai" ALTER COLUMN "nip" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "Pjsppd" ALTER COLUMN "nip" SET DATA TYPE BIGINT;
