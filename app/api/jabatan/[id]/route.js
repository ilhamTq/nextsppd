// url: http://localhost:3000/api/jabatan/12345
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    const { id } = params;

    const jabatann = await prisma.jabatan.findUnique({
      where: {
        id: Number(id)
      },
    });

    if (!jabatann) {
      return NextResponse.json(
        { message: "Jabatan not found", err },
        { status: 404 }
      );
    }

    return NextResponse.json(jabatann);
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  try {
    const body = await request.json();
    const { nama } = body;

    const { id } = params;

    const jabatanUpdate = await prisma.jabatan.update({
      where: {
        id: Number(id),
      },
      data: {
        nama,
      },
    });
    if (!jabatanUpdate) {
      return NextResponse.json(
        { message: "Golongan not found", err },
        { status: 404 }
      );
    }

    return NextResponse.json(jabatanUpdate);
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
    try {
      const { id } = params;
  
      await prisma.jabatan.delete({
        where: {
          id: Number(id)
        },
      });
  
      return NextResponse.json("Jabatan telah dihapus");
    } catch (err) {
      return NextResponse.json({ message: "Error", err }, { status: 500 });
    }
  };