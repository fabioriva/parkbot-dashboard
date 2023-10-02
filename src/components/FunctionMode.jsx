import { useTranslations } from "next-intl";

export default function Mode({ mode }) {
  const t = useTranslations("Mode");
  return (
    <span>
      {mode.id} {t(mode.key)}
    </span>
  );
}
