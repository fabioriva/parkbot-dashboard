import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { setUserCookie } from "@/lib/auth";

export async function POST(request) {
  const { username, current, password } = await request.json();
  const token = cookies().get(process.env.USER_TOKEN).value;
  const response = await fetch(`${process.env.AUTH_PROVIDER}/password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: JSON.stringify({ token }),
    },
    body: JSON.stringify({ username, current, password }),
  });
  const json = await response.json();
  return NextResponse.json(json, { status: response.status });
}
