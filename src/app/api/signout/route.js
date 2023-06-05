import { NextResponse } from "next/server";
import { expireUserCookie } from "@/lib/auth";

export async function POST(request) {
  return expireUserCookie(
    NextResponse.json({ success: true }, { status: 200 })
  );
}
