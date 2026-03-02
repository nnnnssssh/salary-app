import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, password } = body;

  if (!name || !email || !password) {
    return NextResponse.json(
      { message: "Semua field wajib diisi" },
      { status: 400 }
    );
  }

  return NextResponse.json({
    message: "Register berhasil",
  });
}