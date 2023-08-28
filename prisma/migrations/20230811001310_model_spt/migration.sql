-- AlterTable
ALTER TABLE "Pegawai" ALTER COLUMN "nip" SET DATA TYPE VARCHAR(50);

-- CreateTable
CREATE TABLE "Pjspt" (
    "id" SERIAL NOT NULL,
    "idPegawai" INTEGER NOT NULL,

    CONSTRAINT "Pjspt_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pjspt" ADD CONSTRAINT "Pjspt_idPegawai_fkey" FOREIGN KEY ("idPegawai") REFERENCES "Pegawai"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
