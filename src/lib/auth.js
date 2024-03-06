import { SignJWT, jwtVerify } from "jose";
import { nanoid } from "nanoid";
import { getJwtSecretKey } from "@/constants/auth";

export class AuthError extends Error {}

/**
 * Verifies the user's JWT token and returns its payload if it's valid.
 */
export async function verifyAuth(token) {
  // const token = req.cookies.get(USER_TOKEN)?.value;

  if (!token) throw new AuthError("Missing user token");

  try {
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(getJwtSecretKey())
    );
    return verified;
  } catch (err) {
    throw new AuthError("Your token has expired.");
  }
}

/**
 * Adds the user token cookie to a response.
 */
export async function setUserCookie(payload, res) {
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setJti(nanoid())
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(new TextEncoder().encode(getJwtSecretKey()));

  res.cookies.set(process.env.USER_TOKEN, token, {
    httpOnly: true,
    maxAge: 60 * 60 * 2, // 2 hours in seconds
  });

  return res;
}

/**
 * Expires the user token cookie
 */
export function expireUserCookie(res) {
  res.cookies.set(process.env.USER_TOKEN, "", { httpOnly: true, maxAge: 0 });
  return res;
}

/**
 * Verifies user roles
 */
export const isAuthorized = (page, roles) =>
  page === "settings" || roles.some((role) => role === page);
