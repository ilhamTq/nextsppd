// url: http://localhost:3000/api/users
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const body = await request.json();
    const { nama, ruang } = body;

    const newGolongan = await prisma.golongan.create({
      data: {
        nama,
        ruang,
      },
    });
    return NextResponse.json(newGolongan);
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};

export const GET = async () => {
  // try {
  //   const golongann = await prisma.golongan.findMany();
  //   return NextResponse.json(golongann);
  // } catch (err) {
  //   return NextResponse.json({ message: "Error", err }, { status: 500 });
  // }
};
