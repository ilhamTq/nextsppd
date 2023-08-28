// url: http://localhost:3000/api/jurusan
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const body = await request.json();
    const { id, pegawai, idPegawai } = body;

    const newPjspt = await prisma.pjspt.create({
      data: {
        id, pegawai, idPegawai
      }
    })
    return NextResponse.json(newPjspt)
  } catch(err) {
    return NextResponse.json({message: "Error", err}, {status: 500})
  }
}

export const GET = async () => {
  // try {
  //   const jurusann = await prisma.jurusan.findMany()
  //   return NextResponse.json(jurusann)
  // } catch(err) {
  //   return NextResponse.json({message: "Error", err}, {status: 500})
  // }
}