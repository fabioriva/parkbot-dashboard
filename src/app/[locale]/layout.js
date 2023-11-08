import "../globals.css";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { useLocale } from "next-intl";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "parkbot",
  description: "parkbot dashboard",
};

export default function RootLayout({ children, params }) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
