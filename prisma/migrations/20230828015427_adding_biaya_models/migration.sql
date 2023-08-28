-- CreateTable
CREATE TABLE "Biaya" (
    "id" SERIAL NOT NULL,
    "biaya_berangkat" INTEGER NOT NULL,
    "biaya_kembali" INTEGER NOT NULL,
    "uang_saku" INTEGER NOT NULL,
    "penginapan" INTEGER NOT NULL,
    "idSppd" INTEGER NOT NULL,

    CONSTRAINT "Biaya_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Biaya" ADD CONSTRAINT "Biaya_idSppd_fkey" FOREIGN KEY ("idSppd") REFERENCES "Sppd"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
