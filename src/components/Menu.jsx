import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next-intl/client";
import { useTranslations } from "next-intl";
import { Select, SelectItem } from "@tremor/react";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/20/solid";
import pages from "@/constants/pages";
import { isAuthorized } from "@/lib/auth";

export default function Menu({ aps, user }) {
  const pathname = usePathname().split("/")[2];
  const router = useRouter();
  const t = useTranslations("Layout.Header.Menu");

  const [value, setValue] = useState(pathname);
  useEffect(() => setValue(pathname), [pathname]);

  const handleLogout = () => {
    window.localStorage.setItem("logout", Date.now());
    fetch("/api/signout", { method: "POST" }).then(() => router.refresh());
  };

  return (
    <Select
      className="max-w-xs ml-3"
      placeholder={t("selectPlaceholder")}
      value={value}
      onValueChange={setValue}
    >
      {pages.map((item, key) => (
        <SelectItem
          disabled={!isAuthorized(item.role, user.roles)}
          icon={item.icon}
          value={item.role}
          onClick={() => router.push(`/${aps.ns}/${item.role}`)}
          key={key}
        >
          <span
            className={
              isAuthorized(item.role, user.roles)
                ? "text-slate-600 dark:text-slate-300"
                : "text-slate-300 dark:text-slate-600"
            }
          >
            {t(item.role)}
          </span>
        </SelectItem>
      ))}
      <SelectItem icon={ArrowLeftOnRectangleIcon} onClick={handleLogout}>
        {t("logout")}
      </SelectItem>
    </Select>
  );
}
