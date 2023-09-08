import { useTranslations } from "next-intl";
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  WrenchIcon,
} from "@heroicons/react/24/solid";
import { Callout } from "@tremor/react";
import { getInfo } from "@/lib/localize";
import Alarm from "@/components/Alarm";

export default function Info({ device }) {
  const t = useTranslations("Device");
  const { alarms, mode, operation } = device;

  return (
    <>
      {alarms !== undefined && alarms.length > 0 ? (
        <div className="mt-6">
          <Callout
            className="mt-3"
            title={t("al-active", { count: alarms.length })}
            color="rose"
            icon={ExclamationTriangleIcon}
          >
            <ul className="list-none">
              {alarms.map((item, key) => (
                <li key={key}>
                  <Alarm alarm={item} />
                </li>
              ))}
            </ul>
          </Callout>
        </div>
      ) : (
        <div className="mt-6">
          {mode.id !== 8 && (
            <Callout
              className="mt-3"
              title={t("man")}
              color="yellow"
              icon={WrenchIcon}
            />
          )}
          {mode.id === 8 && operation === 0 && (
            <Callout
              className="mt-3 py-3"
              title={t("auto")}
              color="emerald"
              icon={CheckCircleIcon}
            />
          )}
          {mode.id === 8 && operation === 1 && (
            <Callout className="mt-3" title={getInfo(device, t)} color="sky" />
          )}
          {mode.id === 8 && operation === 2 && (
            <Callout
              className="mt-3"
              title={getInfo(device, t)}
              color="violet"
            />
          )}
        </div>
      )}
    </>
  );
}
