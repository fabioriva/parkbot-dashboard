import { useState } from "react";
import { useTranslations } from "next-intl";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Badge, Card, Flex, Title, Icon } from "@tremor/react";
import BitInfo from "@/components/BitInfo";
import Entry from "@/components/Entry";
import FunctionMode from "@/components/FunctionMode";
import Info from "@/components/DeviceInfo";
import Position from "@/components/Position";
import Rollback from "@/components/Rollback";
import View from "@/components/DeviceView";
import Tooltip from "@/components/Tooltip";

const Led = ({ children, bit, color }) => (
  <Badge color={bit.status ? color : "slate"} tooltip={<BitInfo bit={bit} />}>
    {children}
  </Badge>
);

export default function Device({ advanced, aps, data, token, user }) {
  const [more, setMore] = useState(advanced);
  const t = useTranslations("Device");
  const { card, mode, motor, name, operation, size, stall, step, steps } = data;
  const [LS, LC, LA] = data.c;
  const toggleAdvanced = (e) => {
    e.preventDefault();
    setMore(!more);
  };
  return (
    <Card className="max-w-sm p-3 self-start">
      <Flex>
        <Title>{name}</Title>
        <Badge color={mode.id !== 8 ? "yellow" : "blue"}>
          <FunctionMode mode={mode} />
        </Badge>
        {step !== 0 && <Badge color="orange">{step}</Badge>}
        <div className="flex items-center justify-center space-x-1">
          <Led bit={LA} color="red">
            LA
          </Led>
          <Led bit={LC} color="yellow">
            LC
          </Led>
          <Led bit={LS} color="green">
            LS
          </Led>
          {advanced && (
            <Tooltip tooltip={more ? t("view-less") : t("view-more")}>
              <button
                type="button"
                className="hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg"
                onClick={toggleAdvanced}
              >
                <Icon icon={more ? EyeIcon : EyeSlashIcon} />
              </button>
            </Tooltip>
          )}
        </div>
      </Flex>
      <Info device={data} user={user} />
      {advanced && more && <View data={data} />}
      {advanced &&
        data.d.map((action, key) => {
          switch (action.key) {
            case "action-entry":
              return (
                <Entry
                  aps={aps}
                  action={action}
                  disabled={
                    !user.rights.some(
                      (right) => right === "entry" || right === "actions"
                    )
                  }
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
