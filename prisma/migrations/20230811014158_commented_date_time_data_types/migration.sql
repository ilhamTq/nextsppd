/*
  Warnings:

  - You are about to drop the column `masaKerja` on the `Pegawai` table. All the data in the column will be lost.
  - You are about to drop the column `tahunLatjab` on the `Pegawai` table. All the data in the column will be lost.
  - You are about to drop the column `tahunlulus` on the `Pegawai` table. All the data in the column will be lost.
  - You are about to drop the column `tmtGolongan` on the `Pegawai` table. All the data in the column will be lost.
  - You are about to drop the column `tmtJabatan` on the `Pegawai` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Pegawai" DROP COLUMN "masaKerja",
DROP COLUMN "tahunLatjab",
DROP COLUMN "tahunlulus",
DROP COLUMN "tmtGolongan",
DROP COLUMN "tmtJabatan";
