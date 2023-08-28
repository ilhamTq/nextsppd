/*
  Warnings:

  - You are about to drop the column `golongan` on the `Pjsppd` table. All the data in the column will be lost.
  - You are about to drop the column `ruang` on the `Pjsppd` table. All the data in the column will be lost.
  - Added the required column `idGolongan` to the `Pjsppd` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pjsppd" DROP COLUMN "golongan",
DROP COLUMN "ruang",
ADD COLUMN     "idGolongan" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Pjsppd" ADD CONSTRAINT "Pjsppd_idGolongan_fkey" FOREIGN KEY ("idGolongan") REFERENCES "Golongan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
