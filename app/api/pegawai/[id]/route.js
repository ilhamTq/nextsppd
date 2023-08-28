// url: http://localhost:3000/api/pegawai/12345
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    const { id } = params;

    const pegawaii = await prisma.pegawai.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!pegawaii) {
      return NextResponse.json(
        { message: "Pegawai not found", err },
        { status: 404 }
      );
    }

    return NextResponse.json(pegawaii);
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  try {
    const body = await request.json();
    const {
      nip,
      nama,
      // alamat,
      // telp,
      tmptlahir,
      tgllahir,
      idGolongan,
      idJabatan,
      // idLatjabatan,
      // idJenispdd,
      // idJurusan,
      agama,
    } = body;

    const { id } = params;

    const pegawaiUpdate = await prisma.pegawai.update({
      where: {
        id: Number(id),
      },
      data: {
        nip,
        nama,
        // alamat,
        // telp,
        tmptlahir,
        tgllahir,
        idGolongan,
        idJabatan,
        // idLatjabatan,
        // idJenispdd,
        // idJurusan,
        agama,
      },
    });
    if (!pegawaiUpdate) {
      return NextResponse.json(
        { message: "User not found", err },
        { status: 404 }
      );
    }

    return NextResponse.json(pegawaiUpdate);
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const { id } = params;

    await prisma.pegawai.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json("Pegawai telah dihapus");
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};
