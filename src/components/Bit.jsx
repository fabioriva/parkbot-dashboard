import { Badge } from "@tremor/react";
import { useTranslations } from "next-intl";

export default function Bit({ bit }) {
  const t = useTranslations("Bit");
  const tooltip = `${bit.addr} ${bit.label} ${bit.status ? "ON" : "OFF"}`;
  return (
    <Badge
      // className="w-full"
      color={bit.status ? "emerald" : "slate"}
      tooltip={tooltip}
    >
      <span className="text-[0.75rem]">{bit.label}</span>
    </Badge>
  );
}
