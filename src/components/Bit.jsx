import { Badge } from "@tremor/react";
import BitInfo from "@/components/BitInfo";

export default function Bit({ bit }) {
  const tooltip = <BitInfo bit={bit} />;

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
