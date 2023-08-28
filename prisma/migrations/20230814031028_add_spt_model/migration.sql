-- AlterTable
ALTER TABLE "Pegawai" ALTER COLUMN "nip" SET DATA TYPE BIGINT;

-- CreateTable
CREATE TABLE "Spt" (
    "id" SERIAL NOT NULL,
    "nospt" VARCHAR(100) NOT NULL,
    "lama" VARCHAR(100) NOT NULL,
    "dari" VARCHAR(100) NOT NULL,
    "tujuan" VARCHAR(100) NOT NULL,
    "angkutan" VARCHAR(100) NOT NULL,
    "keperluan" TEXT NOT NULL,
    "anggaran" VARCHAR(255) NOT NULL,
    "tempat" VARCHAR(255) NOT NULL,
    "idPjspt" INTEGER NOT NULL,
    "idPegawai" INTEGER NOT NULL,
    "idPjsppd" INTEGER NOT NULL,

    CONSTRAINT "Spt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pjsppd" (
    "id" SERIAL NOT NULL,
    "nama" VARCHAR(100) NOT NULL,
    "jabatan" VARCHAR(100) NOT NULL,

    CONSTRAINT "Pjsppd_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Spt" ADD CONSTRAINT "Spt_idPjspt_fkey" FOREIGN KEY ("idPjspt") REFERENCES "Pjspt"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Spt" ADD CONSTRAINT "Spt_idPegawai_fkey" FOREIGN KEY ("idPegawai") REFERENCES "Pegawai"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Spt" ADD CONSTRAINT "Spt_idPjsppd_fkey" FOREIGN KEY ("idPjsppd") REFERENCES "Pjsppd"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
