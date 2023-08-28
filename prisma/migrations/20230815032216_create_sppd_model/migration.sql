-- AlterTable
ALTER TABLE "Spt" ALTER COLUMN "keperluan" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "Sppd" (
    "id" SERIAL NOT NULL,
    "nosppd" VARCHAR(100) NOT NULL,
    "idSpt" INTEGER NOT NULL,

    CONSTRAINT "Sppd_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Sppd" ADD CONSTRAINT "Sppd_idSpt_fkey" FOREIGN KEY ("idSpt") REFERENCES "Spt"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
