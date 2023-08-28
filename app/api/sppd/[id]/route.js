// url: http://localhost:3000/api/pegawai/12345
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    const { id } = params;

    const GetSppd = await prisma.sppd.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!GetSppd) {
      return NextResponse.json(
        { message: "SPPD not found", err },
        { status: 404 }
      );
    }

    return NextResponse.json(GetSppd);
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  try {
    const body = await request.json();
    const { nosppd, tglsppd, idSpt } = body;

    const { id } = params;

    const sppdUpdate = await prisma.sppd.update({
      where: {
        id: Number(id),
      },
      data: {
        nosppd, tglsppd, idSpt
      },
    });
    if (!sppdUpdate) {
      return NextResponse.json(
        { message: "Sppd not found", err },
        { status: 404 }
      );
    }

    return NextResponse.json(sppdUpdate);
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const { id } = params;

    await prisma.sppd.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json("SPPD telah dihapus");
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};
