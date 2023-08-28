// url: http://localhost:3000/api/golongan/12345
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    const { id } = params;

    const golongann = await prisma.golongan.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!golongann) {
      return NextResponse.json(
        { message: "Golongan not found", err },
        { status: 404 }
      );
    }

    return NextResponse.json(golongann);
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  try {
    const body = await request.json();
    const { nama, ruang } = body;

    const { id } = params;

    const golonganUpdate = await prisma.golongan.update({
      where: {
        id: Number(id),
      },
      data: {
        nama,
        ruang,
      },
    });
    if (!golonganUpdate) {
      return NextResponse.json(
        { message: "Golongan not found", err },
        { status: 404 }
      );
    }

    return NextResponse.json(golonganUpdate);
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const { id } = params;

    await prisma.golongan.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json("Golongan telah dihapus");
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};
