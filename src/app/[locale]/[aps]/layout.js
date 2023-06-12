import { cookies } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/Header";
import apsList from "@/constants/aps";
import { verifyAuth } from "@/lib/auth";

export default async function Layout({ children, params }) {
  let messages;
  try {
    messages = (await import(`../../../../messages/${params.locale}.json`))
      .default;
  } catch (error) {
    notFound();
  }

  const aps = apsList.find((aps) => aps.ns === params.aps);
  const token = cookies().get(process.env.USER_TOKEN).value;
  const { payload } = await verifyAuth(token);

  return (
    <NextIntlClientProvider locale={params.locale} messages={messages}>
      <main className="px-2 py-3 sm:p-6 flex flex-col min-h-screen">
        <Header aps={aps} payload={payload} />
        <div className="border-t my-3 py-6">{children}</div>
        <footer className="mt-auto text-center text-slate-600 text-sm">
          {"© "}
          {new Date().getFullYear()}{" "}
          <Link
            className="hover:underline hover:text-blue-600"
            href="https://www.sotefin.com/"
          >
            Sotefin.
          </Link>{" "}
          All rights reserved. No cookies.
        </footer>
      </main>
    </NextIntlClientProvider>
  );
}