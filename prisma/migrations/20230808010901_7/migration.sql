/*
  Warnings:

  - Added the required column `agama` to the `Pegawai` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idGolongan` to the `Pegawai` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idJabatan` to the `Pegawai` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idJenispdd` to the `Pegawai` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idJurusan` to the `Pegawai` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idLatjabatan` to the `Pegawai` table without a default value. This is not possible if the table is not empty.
  - Added the required column `masaKerja` to the `Pegawai` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nip` to the `Pegawai` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tahunlulus` to the `Pegawai` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telp` to the `Pegawai` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tmtGolongan` to the `Pegawai` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tmtJabatan` to the `Pegawai` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pegawai" ADD COLUMN     "agama" VARCHAR(100) NOT NULL,
ADD COLUMN     "idGolongan" INTEGER NOT NULL,
ADD COLUMN     "idJabatan" INTEGER NOT NULL,
ADD COLUMN     "idJenispdd" INTEGER NOT NULL,
ADD COLUMN     "idJurusan" INTEGER NOT NULL,
ADD COLUMN     "idLatjabatan" INTEGER NOT NULL,
ADD COLUMN     "masaKerja" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "nip" INTEGER NOT NULL,
ADD COLUMN     "tahunlulus" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "telp" VARCHAR(100) NOT NULL,
ADD COLUMN     "tmtGolongan" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "tmtJabatan" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Latjabatan" (
    "id" SERIAL NOT NULL,
    "nama" VARCHAR(100) NOT NULL,

    CONSTRAINT "Latjabatan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Jenispdd" (
    "id" SERIAL NOT NULL,
    "nama" VARCHAR(100) NOT NULL,

    CONSTRAINT "Jenispdd_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Jurusan" (
    "id" SERIAL NOT NULL,
    "nama" VARCHAR(100) NOT NULL,

    CONSTRAINT "Jurusan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pegawai" ADD CONSTRAINT "Pegawai_idGolongan_fkey" FOREIGN KEY ("idGolongan") REFERENCES "Golongan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pegawai" ADD CONSTRAINT "Pegawai_idJabatan_fkey" FOREIGN KEY ("idJabatan") REFERENCES "Jabatan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pegawai" ADD CONSTRAINT "Pegawai_idLatjabatan_fkey" FOREIGN KEY ("idLatjabatan") REFERENCES "Latjabatan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pegawai" ADD CONSTRAINT "Pegawai_idJenispdd_fkey" FOREIGN KEY ("idJenispdd") REFERENCES "Jenispdd"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pegawai" ADD CONSTRAINT "Pegawai_idJurusan_fkey" FOREIGN KEY ("idJurusan") REFERENCES "Jurusan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
