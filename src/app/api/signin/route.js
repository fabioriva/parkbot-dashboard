import { NextResponse } from "next/server";
import { setUserCookie } from "@/lib/auth";

export async function POST(request) {
  const { username, password } = await request.json();
  const response = await fetch(`${process.env.AUTH_PROVIDER}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  if (!response.ok)
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401, statusText: "Unauthorized" }
    );
  const json = await response.json();
  return await setUserCookie(json, NextResponse.json({ ...json }));
}
