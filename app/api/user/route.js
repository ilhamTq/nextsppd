import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { User } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (request) => {
  const body = await request.json();
  const user = await prisma.user.create({
    data:{
        nama: body.nama,
        email: body.email,
        telp: body.telp,
        username: body.username,
        password: body.password
    }
  })
  return NextResponse.json(user)
};
