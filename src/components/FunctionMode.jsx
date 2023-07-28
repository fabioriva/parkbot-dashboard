import { useTranslations } from "next-intl";

export default function Mode({ mode }) {
  const t = useTranslations("Mode");
  return <span>{t(mode.key)}</span>;
}
