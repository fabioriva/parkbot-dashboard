import { useTranslations } from "next-intl";
import { WrenchIcon } from "@heroicons/react/24/solid";
import { Badge, Card, Flex, Title } from "@tremor/react";
import Entry from "@/components/OperationDialog";
import Info from "@/components/DeviceInfo";
import Rollback from "@/components/Rollback";
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
  const t = useTranslations("Log");
  const { card, mode, motor, name, operation, size, stall, step, steps } =
    data.a;
  // const { card, mode, motor, name, operation, size, stall, step, steps } = data;
  const [LS, LC, LA] = data.c;

  return (
    <Card className="max-w-sm p-3 self-start">
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
      {/* <Info alarms={data.alarms} device={data} /> */}
      {advanced && <View data={data} />}
      {advanced &&
        data.d.map((action, key) => {
          switch (action.key) {
            case "action-entry":
              return (
                <Entry
                  aps={aps}
                  action={action}
                  disabled={!user.rights.some((right) => right === "entry")}
                  // id={data.a.id}
                  operation="action-entry"
                  token={token}
                  key={key}
                />
              );
            case "action-rollback":
              return (
                <Rollback
                  aps={aps}
                  action={action}
                  disabled={!user.rights.some((right) => right === "rollback")}
                  token={token}
                  key={key}
                />
              );
          }
        })}
    </Card>
  );
}
