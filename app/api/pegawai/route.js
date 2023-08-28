// url: http://localhost:3000/api/pegawai
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export const POST = async (request) => {
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
      golongan,
      // tmtGolongan,
      jabatan,
      idJabatan,
      // tmtJabatan,
      // masaKerja,
      // idLatjabatan,
      // latJabatan,
      // idJenispdd,
      // jenispdd,
      // idJurusan,
      // jurusan,
      // tahunlulus,
      agama,
      // tahunLatjab
    } = body;

    const newPegawai = await prisma.pegawai.create({
      data: {
        nip,
      nama,
      // alamat,
      // telp,
      tmptlahir,
      tgllahir,
      idGolongan,
      golongan,
      // tmtGolongan,
      jabatan,
      idJabatan,
      // tmtJabatan,
      // masaKerja,
      // idLatjabatan,
      // latJabatan,
      // idJenispdd,
      // jenispdd,
      // idJurusan,
      // jurusan,
      // tahunlulus,
      agama,
      // tahunLatjab
      },
    });
    return NextResponse.json(newPegawai);
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    const pegawaii = await prisma.pegawai.findMany();
    return NextResponse.json(pegawaii);
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};
