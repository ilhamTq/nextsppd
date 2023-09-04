-- DropForeignKey
ALTER TABLE "Biaya" DROP CONSTRAINT "Biaya_idSppd_fkey";

-- DropForeignKey
ALTER TABLE "Pegawai" DROP CONSTRAINT "Pegawai_idGolongan_fkey";

-- DropForeignKey
ALTER TABLE "Pegawai" DROP CONSTRAINT "Pegawai_idJabatan_fkey";

-- DropForeignKey
ALTER TABLE "Pjsppd" DROP CONSTRAINT "Pjsppd_idGolongan_fkey";

-- DropForeignKey
ALTER TABLE "Pjspt" DROP CONSTRAINT "Pjspt_idPegawai_fkey";

-- DropForeignKey
ALTER TABLE "Sppd" DROP CONSTRAINT "Sppd_idSpt_fkey";

-- DropForeignKey
ALTER TABLE "Spt" DROP CONSTRAINT "Spt_idPegawai_fkey";

-- DropForeignKey
ALTER TABLE "Spt" DROP CONSTRAINT "Spt_idPjsppd_fkey";

-- DropForeignKey
ALTER TABLE "Spt" DROP CONSTRAINT "Spt_idPjspt_fkey";

-- AddForeignKey
ALTER TABLE "Pegawai" ADD CONSTRAINT "Pegawai_idGolongan_fkey" FOREIGN KEY ("idGolongan") REFERENCES "Golongan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pegawai" ADD CONSTRAINT "Pegawai_idJabatan_fkey" FOREIGN KEY ("idJabatan") REFERENCES "Jabatan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pjspt" ADD CONSTRAINT "Pjspt_idPegawai_fkey" FOREIGN KEY ("idPegawai") REFERENCES "Pegawai"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Spt" ADD CONSTRAINT "Spt_idPjspt_fkey" FOREIGN KEY ("idPjspt") REFERENCES "Pjspt"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Spt" ADD CONSTRAINT "Spt_idPegawai_fkey" FOREIGN KEY ("idPegawai") REFERENCES "Pegawai"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Spt" ADD CONSTRAINT "Spt_idPjsppd_fkey" FOREIGN KEY ("idPjsppd") REFERENCES "Pjsppd"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pjsppd" ADD CONSTRAINT "Pjsppd_idGolongan_fkey" FOREIGN KEY ("idGolongan") REFERENCES "Golongan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sppd" ADD CONSTRAINT "Sppd_idSpt_fkey" FOREIGN KEY ("idSpt") REFERENCES "Spt"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Biaya" ADD CONSTRAINT "Biaya_idSppd_fkey" FOREIGN KEY ("idSppd") REFERENCES "Sppd"("id") ON DELETE CASCADE ON UPDATE CASCADE;
