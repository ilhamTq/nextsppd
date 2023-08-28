// url: http://localhost:3000/api/jurusan
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const body = await request.json();
    const { id, nip, nama, jabatan, golongan, idGolongan } = body;

    const newPejabat = await prisma.pjsppd.create({
      data: {
        id,
        nip,
        nama,
        jabatan,
        golongan,
        idGolongan,
      },
    });
    return NextResponse.json(newPejabat);
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};

export const GET = async () => {
  // try {
  //   const jurusann = await prisma.jurusan.findMany()
  //   return NextResponse.json(jurusann)
  // } catch(err) {
  //   return NextResponse.json({message: "Error", err}, {status: 500})
  // }
};
