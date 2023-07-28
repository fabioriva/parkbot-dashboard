import { Badge } from "@tremor/react";
import { useTranslations } from "next-intl";
import Tooltip from "./Tooltip";

export default function Bit({ bit }) {
  const t = useTranslations("Bit");
  const tooltip = (
    <ul>
      <li>{bit.addr}</li>
      <li>{bit.label}</li>
      <li>{t(bit.label)}</li>
      <li className={bit.status ? "text-green-500" : "text-red-500"}>
        {bit.status ? "ON" : "OFF"}
      </li>
    </ul>
  );
  return (
    <Tooltip tooltip={tooltip}>
      <Badge
        // className="w-full"
        color={bit.status ? "emerald" : "slate"}
        // tooltip={tooltip}
      >
        <span className="text-[0.75rem]">{bit.label}</span>
      </Badge>
    </Tooltip>
  );
}
