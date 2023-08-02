// url: http://localhost:3000/api/users
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const body = await request.json();
    const {nama, email, telp, username, password} = body;

    const newUser = await prisma.user.create({
      data: {
        nama,
        email,
        telp,
        username,
        password
      }
    })
    return NextResponse.json(newUser)
  } catch(err) {
    return NextResponse.json({message: "Error", err}, {status: 500})
  }
}

export const GET = async () => {
  try {
    const users = await prisma.user.findMany()
    return NextResponse.json(users)
  } catch(err) {
    return NextResponse.json({message: "Error", err}, {status: 500})
  }
}