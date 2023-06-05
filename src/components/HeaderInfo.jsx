import Link from "next-intl/link";
import { useTranslations } from "next-intl";
import { Badge } from "@tremor/react";
import {
  BellAlertIcon,
  BellSlashIcon,
  SignalIcon,
  SignalSlashIcon,
  UserIcon,
  UserMinusIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";

export default function HeaderInfo({
  aps,
  alarms,
  cars,
  comm,
  entries,
  exits,
}) {
  const t = useTranslations("Layout.Header");

  return (
    <>
      <Badge
        className="sm:ml-3"
        icon={alarms > 0 ? BellAlertIcon : BellSlashIcon}
        color={alarms > 0 ? "red" : "emerald"}
        tooltip={t("alarms", { numAlarms: alarms })}
      >
        {alarms}
      </Badge>
      <Link href={`${aps.ns}/overview`}>
        <Badge
          className="sm:ml-3 cursor-pointer "
          icon={UserPlusIcon}
          color="sky"
          tooltip={t("entries", { numEntries: entries })}
        >
          {entries}
        </Badge>
      </Link>
      <Link href={`${aps.ns}/overview`}>
        <Badge
          className="sm:ml-3 cursor-pointer"
          icon={UserMinusIcon}
          color="violet"
          tooltip={t("exits", { numExits: exits })}
        >
          {exits}
        </Badge>
      </Link>
      <Link href={`${aps.ns}/map`}>
        <Badge
          className="sm:ml-3 cursor-pointer"
          icon={UserIcon}
          color="amber"
          tooltip={t("cars", { numCars: cars })}
        >
          {cars}
        </Badge>
      </Link>
      <Badge
        className="sm:ml-3"
        icon={comm ? SignalIcon : SignalSlashIcon}
        color={comm ? "emerald" : "red"}
        tooltip={comm ? "ONLINE" : "OFFLINE"}
      >
        PLC
      </Badge>
    </>
  );
}
