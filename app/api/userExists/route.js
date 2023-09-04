import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function POST(req) {
  try {
    const { username } = await req.json();
    const exists = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });
    console.log("username :", exists);
    return NextResponse.json({ exists });
  } catch (error) {
    console.log(error);
  }
}
