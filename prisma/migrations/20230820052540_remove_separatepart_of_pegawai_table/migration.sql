/*
  Warnings:

  - You are about to drop the column `alamat` on the `Pegawai` table. All the data in the column will be lost.
  - You are about to drop the column `idJenispdd` on the `Pegawai` table. All the data in the column will be lost.
  - You are about to drop the column `idJurusan` on the `Pegawai` table. All the data in the column will be lost.
  - You are about to drop the column `idLatjabatan` on the `Pegawai` table. All the data in the column will be lost.
  - You are about to drop the column `masaKerja` on the `Pegawai` table. All the data in the column will be lost.
  - You are about to drop the column `tahunLatjab` on the `Pegawai` table. All the data in the column will be lost.
  - You are about to drop the column `tahunlulus` on the `Pegawai` table. All the data in the column will be lost.
  - You are about to drop the column `telp` on the `Pegawai` table. All the data in the column will be lost.
  - You are about to drop the column `tmtGolongan` on the `Pegawai` table. All the data in the column will be lost.
  - You are about to drop the column `tmtJabatan` on the `Pegawai` table. All the data in the column will be lost.
  - You are about to drop the `Jenispdd` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Jurusan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Latjabatan` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Pegawai" DROP CONSTRAINT "Pegawai_idJenispdd_fkey";

-- DropForeignKey
ALTER TABLE "Pegawai" DROP CONSTRAINT "Pegawai_idJurusan_fkey";

-- DropForeignKey
ALTER TABLE "Pegawai" DROP CONSTRAINT "Pegawai_idLatjabatan_fkey";

-- AlterTable
ALTER TABLE "Pegawai" DROP COLUMN "alamat",
DROP COLUMN "idJenispdd",
DROP COLUMN "idJurusan",
DROP COLUMN "idLatjabatan",
DROP COLUMN "masaKerja",
DROP COLUMN "tahunLatjab",
DROP COLUMN "tahunlulus",
DROP COLUMN "telp",
DROP COLUMN "tmtGolongan",
DROP COLUMN "tmtJabatan";

-- DropTable
DROP TABLE "Jenispdd";

-- DropTable
DROP TABLE "Jurusan";

-- DropTable
DROP TABLE "Latjabatan";
