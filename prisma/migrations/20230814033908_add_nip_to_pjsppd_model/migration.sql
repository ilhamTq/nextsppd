/*
  Warnings:

  - Added the required column `nip` to the `Pjsppd` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pjsppd" ADD COLUMN     "nip" BIGINT NOT NULL;
