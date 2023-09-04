// url: http://localhost:3000/api/users
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"

export const POST = async (request) => {
  try {
    const body = await request.json();
    const { name, email, username, password } = body;
    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        username,
        password: hashedPassword,
      },
    });
    return NextResponse.json(newUser);
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};