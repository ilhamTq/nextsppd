-- CreateTable
CREATE TABLE "User" (
    "id_user" SERIAL NOT NULL,
    "nama" VARCHAR(25) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "telp" VARCHAR(20) NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id_user")
);
