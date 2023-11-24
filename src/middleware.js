import createIntlMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import apsList from "@/constants/aps";
// import i18n from "@/constants/i18n";
import { isAuthorized, verifyAuth } from "@/lib/auth";
import { locales } from "@/navigation";

const redirect = (req) => NextResponse.redirect(new URL("/", req.url));

export async function middleware(request) {
  // const handleI18nRouting = createIntlMiddleware(i18n);
  const handleI18nRouting = createIntlMiddleware({
    locales,
    localePrefix: "always",
    defaultLocale: "en",
  });
  const response = handleI18nRouting(request);
  const segments = request.nextUrl.pathname.split("/");
  const aps = apsList.find((item) => item.ns === segments[2]);
  if (aps) {
    const token = request.cookies.get(process.env.USER_TOKEN);
    if (!token?.value) return redirect(request);
    const verified = await verifyAuth(token.value).catch((e) =>
      console.error(e)
    );
    if (!verified) return redirect(request);
    if (verified.payload.aps !== aps.ns) return redirect(request); // verify aps
    if (!isAuthorized(segments[3], verified.payload.roles))
      return redirect(request); // verify page role
  }
  return response;
}

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - api (API routes)
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      */
//     // "/((?!api|_next/static|_next/image|car.png|silomat.png|bot.svg|favicon.ico).*)",
//     "/((?!api|_next|.*\\..*).*)",
//   ],
// };

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|it)/:path*"],
};
