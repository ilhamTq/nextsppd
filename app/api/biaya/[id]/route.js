// url: http://localhost:3000/api/users/12345
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    const { id } = params;

    const biayaa = await prisma.biaya.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!biayaa) {
      return NextResponse.json({ message: "not found", err }, { status: 404 });
    }

    return NextResponse.json(biayaa);
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  try {
    const body = await request.json();
    const { biaya_berangkat, biaya_kembali, idSppd, uang_saku, penginapan } =
      body;

    const { id } = params;

    const biayaUpdate = await prisma.biaya.update({
      where: {
        id: Number(id),
      },
      data: {
        biaya_berangkat,
        biaya_kembali,
        idSppd,
        uang_saku,
        penginapan,
      },
    });
    if (!biayaUpdate) {
      return NextResponse.json(
        { message: "not found", err },
        { status: 404 }
      );
    }

    return NextResponse.json(biayaUpdate);
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const { id } = params;

    await prisma.biaya.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json("telah dihapus");
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};
