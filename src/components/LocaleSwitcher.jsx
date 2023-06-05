"use client";

// import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { SelectBox, SelectBoxItem } from "@tremor/react";
import i18n from "@/constants/i18n";

export default function LocaleSwitcher() {
  // console.log(context);
  const t = useTranslations("LocaleSwitcher");
  const pathname = usePathname();

  const redirectedPathName = (locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    // if (segments[1] === "aps") {
    //   segments.splice(1, 0, locale);
    //   return segments.join("/");
    // }
    segments[1] = locale;
    return segments.join("/");
  };

  const router = useRouter();
  // const { locale, locales, route } = useRouter();
  // console.log(locale, locales, route);
  return (
    <div>
      <p className="max-w-xs mx-auto">Locale switcher:</p>
      <SelectBox
        className="max-w-xs mx-auto"
        onValueChange={(value) => console.log("the new value is", value)}
        defaultValue="en"
      >
        {i18n.locales.map((locale) => {
          return (
            <SelectBoxItem
              value={locale}
              text={locale}
              key={locale}
              onClick={() => router.push(redirectedPathName(locale))}
            />
          );
        })}
      </SelectBox>
      {/* //   <ul>
    //     {i18n.locales.map((locale) => {
    //       return (
    //         <li key={locale}>
    //           <Link href={redirectedPathName(locale)}>
    //             {locale} {redirectedPathName(locale)}
    //           </Link>
    //         </li>
    //       );
    //     })}
    //   </ul> */}
    </div>
  );
}
