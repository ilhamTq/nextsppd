/*
  Warnings:

  - Added the required column `masaKerja` to the `Pegawai` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tahunLatjab` to the `Pegawai` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tahunlulus` to the `Pegawai` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tmtGolongan` to the `Pegawai` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tmtJabatan` to the `Pegawai` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pegawai" ADD COLUMN     "masaKerja" DATE NOT NULL,
ADD COLUMN     "tahunLatjab" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "tahunlulus" DATE NOT NULL,
ADD COLUMN     "tmtGolongan" DATE NOT NULL,
ADD COLUMN     "tmtJabatan" DATE NOT NULL;
