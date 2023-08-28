// url: http://localhost:3000/api/pegawai
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const body = await request.json();
    const {
      id,
      nospt,
      berangkat,
      kembali,
      lama,
      dari,
      tujuan,
      angkutan,
      keperluan,
      anggaran,
      mt_anggaran,
      //tempat ditetapkan
      tempat,
      tglspt,
      pjspt,
      idPjspt,
      pegawai,
      idPegawai,
      pjsppd,
      idPjsppd,
    } = body;

    const newSpt = await prisma.spt.create({
      data: {
        id,
        nospt,
        berangkat,
        kembali,
        lama,
        dari,
        tujuan,
        angkutan,
        keperluan,
        anggaran,
        mt_anggaran,
        //tempat ditetapkan
        tempat,
        tglspt,
        pjspt,
        idPjspt,
        pegawai,
        idPegawai,
        pjsppd,
        idPjsppd,
      },
    });
    return NextResponse.json(newSpt);
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    const sptt = await prisma.spt.findMany();
    return NextResponse.json(sptt);
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};
