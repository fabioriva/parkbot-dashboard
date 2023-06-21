import clsx from "clsx";
import { useTranslations } from "next-intl";
import { WrenchIcon } from "@heroicons/react/24/solid";
import { Badge, Card, Flex, Title } from "@tremor/react";
import Entry from "@/components/Entry";
import Info from "@/components/DeviceInfo";
import View from "@/components/DeviceView";
import { getInfo } from "@/lib/localize";

const Led = ({ children, color, input }) => (
  <Badge
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
    <Card className="p-3 self-start">
      <Flex>
        <Title>{name}</Title>
        <Badge
          color={mode.id !== 8 ? "yellow" : "blue"}
          icon={mode.id !== 8 && WrenchIcon}
          // tooltip={t("device-mode")}
        >
          {t(mode.key)}
        </Badge>
        <div className="flex items-center justify-center space-x-1">
          <Led color="red" input={LA}>
            LA
          </Led>
          <Led color="yellow" input={LC}>
            LC
          </Led>
          <Led color="green" input={LS}>
            LS
          </Led>
        </div>
      </Flex>
      <Info alarms={data.alarms} device={data.a} />
      {advanced && <View data={data} />}
      {data.d.map((item, key) => (
        <Entry aps={aps} action={item} token={token} user={user} key={key} />
      ))}
    </Card>
  );
}
