import { useState } from "react";
import { useTranslations } from "next-intl";
import { EyeIcon, EyeSlashIcon, WrenchIcon } from "@heroicons/react/24/solid";
import { Badge, Card, Flex, Title, Icon } from "@tremor/react";
import Entry from "@/components/Entry"; // OperationDialog";
import Info from "@/components/DeviceInfo";
import Position from "@/components/Position";
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
  const [more, setMore] = useState(advanced);
  const t = useTranslations("Log");
  const { card, mode, motor, name, operation, size, stall, step, steps } =
    data.a;
  // const { card, mode, motor, name, operation, size, stall, step, steps } = data;
  const [LS, LC, LA] = data.c;
  const toggleAdvanced = (e) => {
    e.preventDefault();
    setMore(!more);
  };
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
          {advanced && (
            <button
              type="button"
              className="hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg"
              onClick={toggleAdvanced}
            >
              <Icon icon={more ? EyeIcon : EyeSlashIcon} />
            </button>
          )}
        </div>
      </Flex>

      <Info alarms={data.alarms} device={data.a} />
      {/* <Info alarms={data.alarms} device={data} /> */}

      {advanced && more && data.b !== undefined && (
        <div className="mt-6">
          {data.b.map((item, key) => (
            <Position item={item} key={key} />
          ))}
        </div>
      )}
      {advanced && more && (
        // data.views !== undefined &&
        // data.views.length > 0 &&
        <View data={data} />
      )}
      {advanced &&
        more &&
        data.d.map((action, key) => {
          switch (action.key) {
            case "action-entry":
              return (
                <Entry
                  aps={aps}
                  action={action}
                  disabled={!user.rights.some((right) => right === "entry")}
                  // id={data.a.id}
                  // id={data.id}
                  // operation="action-entry"
                  token={token}
                  key={key}
                />
              );
            case "action-rollback":
              return (
                <Rollback
                  aps={aps}
                  action={action}
                  disabled={!user.rights.some((right) => right === "exit")}
                  token={token}
                  key={key}
                />
              );
          }
        })}
    </Card>
  );
}
