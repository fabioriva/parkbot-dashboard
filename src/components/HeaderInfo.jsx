import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Badge } from "@tremor/react";
import {
  // BellAlertIcon,
  // BellSlashIcon,
  // SignalIcon,
  // SignalSlashIcon,
  // UserIcon,
  UserMinusIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";

import {
  RiCarFill,
  RiNotificationOffLine,
  RiNotification4Line,
  RiRouterLine,
  // RiUserReceivedLine,
  // RiUserSharedLine,
} from "@remixicon/react";

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
      <Link href={`/${aps.ns}/overview`}>
        <Badge
          className="cursor-pointer"
          // icon={alarms > 0 ? BellAlertIcon : BellSlashIcon}
          icon={alarms > 0 ? RiNotification4Line : RiNotificationOffLine}
          color={alarms > 0 ? "red" : "emerald"}
          tooltip={t("alarms", { numAlarms: alarms })}
        >
          {alarms}
        </Badge>
      </Link>
      <Link href={`/${aps.ns}/overview`}>
        <Badge
          className="cursor-pointer"
          icon={UserPlusIcon}
          // icon={RiUserReceivedLine}
          color="sky"
          tooltip={t("entries", { numEntries: entries })}
        >
          {entries}
        </Badge>
      </Link>
      <Link href={`/${aps.ns}/overview`}>
        <Badge
          className="cursor-pointer"
          icon={UserMinusIcon}
          // icon={RiUserSharedLine}
          color="violet"
          tooltip={t("exits", { numExits: exits })}
        >
          {exits}
        </Badge>
      </Link>
      <Link href={`/${aps.ns}/map`}>
        <Badge
          className="cursor-pointer"
          icon={RiCarFill}
          color="amber"
          tooltip={t("cars", { numCars: cars })}
        >
          {cars}
        </Badge>
      </Link>
      <Link href={`/${aps.ns}/racks`}>
        <Badge
          className="cursor-pointer"
          // icon={comm ? SignalIcon : SignalSlashIcon}
          icon={comm ? RiRouterLine : RiRouterLine}
          color={comm ? "emerald" : "red"}
          tooltip={comm ? "ONLINE" : "OFFLINE"}
        >
          PLC
        </Badge>
      </Link>
    </>
  );
}
