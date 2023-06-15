import clsx from "clsx";
import { useTranslations } from "next-intl";
import { CheckIcon, WrenchIcon } from "@heroicons/react/24/solid";
import { Badge, Card, Title, Tracker, Text, Flex } from "@tremor/react";
import Entry from "@/components/Entry";
import Position from "@/components/Position";
import Silomat from "@/components/Silomat";
import { getInfo } from "@/lib/localize";

const Info = ({ children, color, input }) => (
  <Badge
    // className={clsx({
    //   [`bg-${color}-100 text-${color}-600`]: input.status,
    //   [`bg-slate-100 text-slate-600`]: !input.status,
    // })}
    color={input.status ? color : "slate"}
    tooltip={`${input.addr} ${input.label} ${input.status ? "ON" : "OFF"}`}
  >
    {children}
  </Badge>
);

export default function Device({ advanced, aps, data, token, user }) {
  // console.log(data);
  const { card, mode, motor, name, operation, size, stall, step, steps } =
    data.a;
  const [LS, LC, LA] = data.c;
  const t = useTranslations("Log");
  return (
    <Card className="self-start">
      <Flex>
        <Title>{name}</Title>
        <div className="flex items-center justify-center space-x-1">
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
      {steps !== undefined && steps.length > 0 && (
        <Tracker data={steps} className="mt-3" />
      )}
      {advanced && motor === 0 && data.b.length > 0 && (
        <div className={clsx("mt-6", { "opacity-25": data.a.operation === 0 })}>
          {data.b.map((item, key) => (
            <Position item={item} key={key} />
          ))}
        </div>
      )}
      {advanced && motor === 1 && data.e.length > 0 && (
        <Silomat data={data.e} />
      )}

      {data.d.map((item, key) => (
        <Entry aps={aps} action={item} token={token} user={user} key={key} />
      ))}
    </Card>
  );
}
