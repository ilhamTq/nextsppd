/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_user` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id_user",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "Pegawai" (
    "id" SERIAL NOT NULL,
    "nama" VARCHAR(50) NOT NULL,
    "alamat" VARCHAR(100) NOT NULL,

    CONSTRAINT "Pegawai_pkey" PRIMARY KEY ("id")
);
