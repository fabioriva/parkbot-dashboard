import clsx from "clsx";
import { useTranslations } from "next-intl";
import { CheckIcon, WrenchIcon } from "@heroicons/react/24/solid";
import { Badge, Card, Title, Tracker, Text, Flex } from "@tremor/react";
import Position from "@/components/Position";
import Silomat from "@/components/Silomat";
import { getInfo } from "@/lib/localize";

const steps = [
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "rose", tooltip: "Downtime" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "gray", tooltip: "Maintenance" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "yellow", tooltip: "Degraded" },
  { color: "emerald", tooltip: "Operational" },
];

const Info = ({ children, color, input }) => (
  <Badge
    className={clsx({
      [`bg-${color}-100 text-${color}-600`]: input.status,
      [`bg-slate-100 text-slate-600`]: !input.status,
    })}
    // color={color}
    tooltip={`${input.addr} ${input.label} ${input.status ? "ON" : "OFF"}`}
  >
    {children}
  </Badge>
);

export default function Device({ advanced, data }) {
  // console.log(data);
  const { card, mode, motor, name, operation, size, stall, step } = data.a;
  const [LS, LC, LA] = data.c;
  const t = useTranslations("Common");

  data.steps = steps;

  return (
    <Card className="self-start">
      <Flex>
        <Title>{name}</Title>
        <div className="flex items-center justify-center space-x-1">
          {/* {step !== 0 && <Badge>{step}</Badge>} */}
          <Badge
            color={mode.id !== 8 ? "yellow" : "blue"}
            icon={mode.id !== 8 ? WrenchIcon : CheckIcon}
            tooltip={t("device-mode")}
          >
            {t(mode.key)}
          </Badge>
          <Info color="red" input={LA}>
            LA
          </Info>
          <Info color="yellow" input={LC}>
            LC
          </Info>
          <Info color="green" input={LS}>
            LS
          </Info>
        </div>
      </Flex>
      <Flex>
        <Text className="mt-4">{getInfo(data.a, t)}</Text>
      </Flex>
      {data.steps !== undefined && <Tracker data={steps} className="mt-3" />}
      {advanced && motor === 0 && data.b.length > 0 && (
        <div className={clsx("mt-6", { "opacity-25": data.a.operation === 0 })}>
          {/* <Title>Positioning</Title> */}
          {data.b.map((item, key) => (
            // <Position barColor={operationColor} item={item} key={key} />
            <Position item={item} key={key} />
          ))}
        </div>
      )}
      {advanced && motor === 1 && data.e.length > 0 && (
        <Silomat data={data.e} />
      )}
    </Card>
  );
}
