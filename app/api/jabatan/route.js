// url: http://localhost:3000/api/jabatan
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const body = await request.json();
    const {nama} = body;

    const newJabatan = await prisma.jabatan.create({
      data: {
        nama
      }
    })
    return NextResponse.json(newJabatan)
  } catch(err) {
    return NextResponse.json({message: "Error", err}, {status: 500})
  }
}

export const GET = async () => {
  // try {
  //   const jabatann = await prisma.jabatan.findMany()
  //   return NextResponse.json(jabatann)
  // } catch(err) {
  //   return NextResponse.json({message: "Error", err}, {status: 500})
  // }
}