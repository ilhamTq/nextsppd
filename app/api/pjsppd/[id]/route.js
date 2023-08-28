// url: http://localhost:3000/api/jurusan/12345
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    const { id } = params;

    const pejabat = await prisma.pjsppd.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!pejabat) {
      return NextResponse.json(
        { message: "Pejabat not found", err },
        { status: 404 }
      );
    }

    return NextResponse.json(pejabat);
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  try {
    const body = await request.json();
    const { nip, nama, jabatan, idGolongan } = body;

    const { id } = params;

    const pejabatUpdate = await prisma.pjsppd.update({
      where: {
        id: Number(id),
      },
      data: {
        nip,
        nama,
        jabatan,
        idGolongan,
      },
    });
    if (!pejabatUpdate) {
      return NextResponse.json(
        { message: "Pejabatan not found", err },
        { status: 404 }
      );
    }

    return NextResponse.json(pejabatUpdate);
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const { id } = params;

    await prisma.pjsppd.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json("Pejabat telah dihapus");
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};
