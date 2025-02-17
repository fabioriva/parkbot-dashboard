import { Inter } from "next/font/google";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function Index({ params }) {
  const t = useTranslations("Index");
  return (
    // <body className={inter.className}>
    <main className="flex flex-col items-center justify-center min-h-screen bg-slate-950">
      <div className="text-center">
        <div className="w-max mx-auto mb-10 py-1 border border-blue-500 rounded-full">
          <span className="px-3 text-sm text-slate-100 tracking-tighter">
            UI redesigned from ground up. Light/Dark theme.
          </span>
        </div>
        <span className="font-extrabold text-7xl sm:text-9xl text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-800 tracking-tight">
          Parkbot
        </span>
        <p className="py-6 font-bold text-3xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-slate-50 to-slate-400 tracking-tighter">
          {t("title")}
        </p>
      </div>
      <div className="max-w-sm">
        <Link href="/signin">
          <button className="w-32 bg-slate-50 text-slate-950 hover:bg-slate-950 border hover:border-slate-50 hover:text-slate-50 font-semibold text-base m-6 p-3 rounded-lg">
            {t("start")}
          </button>
        </Link>
        <Link href="https://www.sotefin.com/">
          <button className="w-32 bg-slate-950 border border-slate-400 hover:border-slate-50 text-slate-500 hover:text-slate-50 font-semibold text-base m-6 p-3 rounded-lg">
            Sotefin
          </button>
        </Link>
      </div>
      <footer className="mt-6 text-center text-slate-500 text-sm tracking-tighter">
        {"© "}
        {new Date().getFullYear()}{" "}
        <Link
          className="hover:underline hover:text-blue-600"
          href="https://www.sotefin.com/"
        >
          Sotefin.
        </Link>{" "}
        All rights reserved.
        <br className="inline sm:hidden" /> Made with ❤️. No cookies.
      </footer>
    </main>
    // </body>
  );
}
