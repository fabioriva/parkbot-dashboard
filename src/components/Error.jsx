"use client";

import { useTranslations } from "next-intl";
import { Callout } from "@tremor/react";

export default function Error() {
  const t = useTranslations("Error");

  return (
    <Callout className="mt-3" color="red" title={t("title")}>
      {t("callout")}
    </Callout>
  );
}
