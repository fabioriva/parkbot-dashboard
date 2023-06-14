import { useRouter } from "next-intl/client";
import { useTranslations } from "next-intl";
import { Select, SelectItem } from "@tremor/react";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/20/solid";
import pages from "@/constants/pages";

export default function Menu({ aps, user }) {
  const router = useRouter();
  const t = useTranslations("Layout.Header.Menu");
  const handleLogout = () => {
    window.localStorage.setItem("logout", Date.now());
    fetch("/api/signout", { method: "POST" }).then(() => router.refresh());
  };

  return (
    <Select
      className="max-w-xs ml-3"
      // defaultValue="dashboard"
      placeholder={t("selectPlaceholder")}
    >
      {pages.map((item, key) => (
        <SelectItem
          disabled={!user.roles.some((role) => role === item.role)}
          icon={item.icon}
          value={item.role}
          onClick={() => router.push(`/${aps.ns}/${item.role}`)}
          key={key}
        >
          {t(item.role)}
        </SelectItem>
      ))}
      <SelectItem icon={ArrowLeftOnRectangleIcon} onClick={handleLogout}>
        {t("logout")}
      </SelectItem>
    </Select>
  );
}
