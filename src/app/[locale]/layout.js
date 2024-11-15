import "../globals.css";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
// import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "parkbot",
  description: "parkbot dashboard",
};

export default async function RootLayout({ children, params: { locale } }) {
  // const locale = useLocale();
  // Show a 404 error if the user requests an unknown locale
  // if (params.locale !== locale) {
  //   notFound();
  // }

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

// import {notFound} from 'next/navigation';

// export default async function LocaleLayout({
//   children,
//   params: {locale}
// }: {
//   children: React.ReactNode;
//   params: {locale: string};
// }) {
//   // Ensure that the incoming `locale` is valid
//   if (!routing.locales.includes(locale as any)) {
//     notFound();
//   }

//   // Providing all messages to the client
//   // side is the easiest way to get started
//   const messages = await getMessages();

//   return (
//     <html lang={locale}>
//       <body className={inter.className}>
//         <NextIntlClientProvider messages={messages}>
//           {children}
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }
