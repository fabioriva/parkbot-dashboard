import createIntlMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import apsList from "@/constants/aps";
import i18n from "@/constants/i18n";
import { verifyAuth } from "@/lib/auth";

const redirect = (req) => NextResponse.redirect(new URL("/", req.url));
// const redirect = (req) =>
//   new NextResponse(
//     JSON.stringify({ success: false, message: "authentication failed" }),
//     { status: 401, headers: { "content-type": "application/json" } }
//   );

export async function middleware(request) {
  const handleI18nRouting = createIntlMiddleware(i18n);
  const response = handleI18nRouting(request);
  const segments = request.nextUrl.pathname.split("/");
  const aps = apsList.find((item) => item.ns === segments[2]);
  // Check protected pages
  if (aps) {
    // get token
    const token = request.cookies.get(process.env.USER_TOKEN);
    if (!token?.value) return redirect(request);
    // verify token
    const verified = await verifyAuth(token.value).catch((e) =>
      console.error(e)
    );
    if (!verified) return redirect(request);
    // verify aps
    if (verified.payload.aps !== aps.ns) return redirect(request);
    // verify page role
    if (
      segments[3] !== "home" &&
      !verified.payload.roles.some((role) => role === segments[3]) // _page)
    )
      return redirect(request);
  }
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|Silomat.png|bot.svg|favicon.ico).*)",
  ],
};
