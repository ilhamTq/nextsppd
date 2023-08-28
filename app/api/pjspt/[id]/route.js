// url: http://localhost:3000/api/jurusan/12345
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    const { id } = params;

    const pjsptt = await prisma.pjspt.findUnique({
      where: {
        id: Number(id)
      },
    });

    if (!pjsptt) {
      return NextResponse.json(
        { message: "Jabatan not found", err },
        { status: 404 }
      );
    }

    return NextResponse.json(pjsptt);
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  try {
    const body = await request.json();
    const { idPegawai } = body;

    const { id } = params;

    const pjsptUpdate = await prisma.pjspt.update({
      where: {
        id: Number(id),
      },
      data: {
        idPegawai
      },
    });
    if (!pjsptUpdate) {
      return NextResponse.json(
        { message: "Pejabat not found", err },
        { status: 404 }
      );
    }

    return NextResponse.json(pjsptUpdate);
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
    try {
      const { id } = params;
  
      await prisma.pjspt.delete({
        where: {
          id: Number(id)
        },
      });
  
      return NextResponse.json("Pejabat telah dihapus");
    } catch (err) {
      return NextResponse.json({ message: "Error", err }, { status: 500 });
    }
  };