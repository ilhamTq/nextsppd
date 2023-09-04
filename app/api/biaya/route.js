// url: http://localhost:3000/api/users
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const body = await request.json();
    const {
      id,
      biaya_berangkat,
      biaya_kembali,
      uang_saku,
      penginapan,
      sppd,
      idSppd,
    } = body;

    const newBiaya = await prisma.biaya.create({
      data: {
        id,
        biaya_berangkat,
        biaya_kembali,
        uang_saku,
        penginapan,
        sppd,
        idSppd,
      },
    });
    return NextResponse.json(newBiaya);
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    const biayaa = await prisma.biaya.findMany();
    return NextResponse.json(biayaa);
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};
