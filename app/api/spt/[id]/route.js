// url: http://localhost:3000/api/pegawai/12345
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    const { id } = params;

    const GetSpt = await prisma.spt.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!GetSpt) {
      return NextResponse.json(
        { message: "SPT not found", err },
        { status: 404 }
      );
    }

    return NextResponse.json(GetSpt);
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  try {
    const body = await request.json();
    const {
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
      idPjspt,
      idPegawai,
      idPjsppd,
    } = body;

    const { id } = params;

    const sptUpdate = await prisma.spt.update({
      where: {
        id: Number(id),
      },
      data: {
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
        idPjspt,
        idPegawai,
        idPjsppd,
      },
    });
    if (!sptUpdate) {
      return NextResponse.json(
        { message: "Spt not found", err },
        { status: 404 }
      );
    }

    return NextResponse.json(sptUpdate);
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const { id } = params;

    await prisma.spt.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json("SPT telah dihapus");
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};
