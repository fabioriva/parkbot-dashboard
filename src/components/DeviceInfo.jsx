import { useTranslations } from "next-intl";
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  WrenchIcon,
} from "@heroicons/react/24/solid";
import { Callout } from "@tremor/react";
import { getAlarm, getInfo } from "@/lib/localize";

export default function Info({ device }) {
  const t = useTranslations("Log");
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
            {alarms.map((item, key) => (
              <span key={key}>
                AL{item.id}&nbsp;
                {getAlarm(item, t)}
                <br />
              </span>
            ))}
          </Callout>
        </div>
      ) : (
        <div className="mt-6">
          {mode?.id !== 8 && (
            <Callout
              className="mt-3"
              title={t("device-man")}
              color="yellow"
              icon={WrenchIcon}
            />
          )}
          {mode?.id === 8 && operation === 0 && (
            <Callout
              className="mt-3 py-3"
              title={t("device-auto")}
              color="emerald"
              icon={CheckCircleIcon}
            />
          )}
          {mode?.id === 8 && operation === 1 && (
            <Callout className="mt-3" title={getInfo(device, t)} color="sky" />
          )}
          {mode?.id === 8 && operation === 2 && (
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
