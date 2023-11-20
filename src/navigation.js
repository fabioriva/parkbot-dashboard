import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "it"];
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });
