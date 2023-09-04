// url: http://localhost:3000/api/users/12345
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    const { id } = params;

    const users = await prisma.user.findUnique({
      where: {
        id: Number(id)
      },
    });

    if (!users) {
      return NextResponse.json(
        { message: "User not found", err },
        { status: 404 }
      );
    }

    return NextResponse.json(users);
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  try {
    const body = await request.json();
    const { name, email, username, password } = body;

    const { id } = params;

    const userUpdate = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        email,
        username,
        password,
      },
    });
    if (!userUpdate) {
      return NextResponse.json(
        { message: "User not found", err },
        { status: 404 }
      );
    }

    return NextResponse.json(userUpdate);
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
    try {
      const { id } = params;
  
      await prisma.user.delete({
        where: {
          id: Number(id)
        },
      });
  
      return NextResponse.json("User telah dihapus");
    } catch (err) {
      return NextResponse.json({ message: "Error", err }, { status: 500 });
    }
  };