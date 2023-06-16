import { Badge } from "@tremor/react";

export default function Io({ item }) {
  // console.log(item);
  return (
    <Badge
      className="w-full"
      color={item.status ? "emerald" : "slate"}
      tooltip={`${item.addr} ${item.label} ${item.status ? "ON" : "OFF"}`}
    >
      <span className="text-[0.7rem]">{item.label}</span>
    </Badge>
  );
}
