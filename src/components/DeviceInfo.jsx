import { useTranslations } from "next-intl";
import { Callout } from "@tremor/react";
import { getInfo } from "@/lib/localize";

export default function Info({ device }) {
  const t = useTranslations("Log");

  const { mode, operation } = device;

  return (
    <div className="mt-6">
      {mode.id !== 8 && (
        <Callout className="mt-3" title="Manual mode" color="yellow">
          {t("device-man")}
        </Callout>
      )}
      {mode.id === 8 && operation === 0 && (
        <Callout className="mt-3" title="System ready" color="emerald">
          {t("device-auto")}
        </Callout>
      )}
      {mode.id === 8 && operation === 1 && (
        <Callout className="mt-3" title="Entry in progress" color="blue">
          {getInfo(device, t)}
        </Callout>
      )}
      {mode.id === 8 && operation === 2 && (
        <Callout className="mt-3" title="Exit in progress" color="sky">
          {getInfo(device, t)}
        </Callout>
      )}
    </div>
  );
}
