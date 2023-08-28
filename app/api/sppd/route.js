// url: http://localhost:3000/api/pegawai
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const body = await request.json();
    const { id, nosppd, tglsppd, idSpt, spt } = body;

    const newSppd = await prisma.sppd.create({
      data: {
        id,
        nosppd,
        tglsppd,
        idSpt,
        spt,
      },
    });
    return NextResponse.json(newSppd);
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    const sppdd = await prisma.sppd.findMany();
    return NextResponse.json(sppdd);
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};
