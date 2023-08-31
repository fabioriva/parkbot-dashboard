import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { setUserCookie } from "@/lib/auth";

export async function POST(request) {
  const { username, current, password } = await request.json();
  const token = cookies().get(process.env.USER_TOKEN).value;
  console.log(username, current, password, token);
  const response = await fetch(`${process.env.AUTH_PROVIDER}/password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: JSON.stringify({ token }),
    },
    body: JSON.stringify({ username, current, password }),
  });
  if (!response.ok)
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401, statusText: "Unauthorized" }
    );
  const json = await response.json();
  return NextResponse.json({ success: true }, { status: 200 });
}
