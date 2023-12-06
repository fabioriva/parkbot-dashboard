import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  WrenchIcon,
} from "@heroicons/react/24/solid";
import { Callout } from "@tremor/react";
import { getInfo } from "@/lib/localize";
import Alarm from "@/components/Alarm";

function renderAut(device, t, user) {
  const { id, messages, operation } = device;
  switch (operation) {
    case 1:
      return (
        <Callout className="mt-3" title={getInfo(device, t)} color="sky">
          {user.rights.some((right) => right === "mqtt") && (
            <MqttMessages id={id} messages={messages} />
          )}
        </Callout>
      );
    case 2:
      return (
        <Callout className="mt-3" title={getInfo(device, t)} color="violet">
          {user.rights.some((right) => right === "mqtt") && (
            <MqttMessages id={id} messages={messages} />
          )}
        </Callout>
      );
    case 3:
      return (
        <Callout className="mt-3" title={getInfo(device, t)} color="emerald">
          {user.rights.some((right) => right === "mqtt") && (
            <MqttMessages id={id} messages={messages} />
          )}
        </Callout>
      );
    case 4:
      return (
        <Callout className="mt-3" title={getInfo(device, t)} color="orange">
          {user.rights.some((right) => right === "mqtt") && (
            <MqttMessages id={id} messages={messages} />
          )}
        </Callout>
      );
    default:
      return (
        <Callout
          className="mt-3"
          title={t("auto")}
          color="emerald"
          icon={CheckCircleIcon}
        />
      );
  }
}

function renderInfo(device, t, user) {
  const { id, messages, mode, stall } = device;
  const [LS, ,] = device.c;
  if (!LS.status) {
    return (
      <Callout
        className="mt-3"
        title={t("off")}
        color="yellow"
        icon={ExclamationCircleIcon}
      />
    );
  } else {
    switch (mode.id) {
      case 0:
        return (
          <Callout
            className="mt-3"
            title={t("mode-no")}
            color="yellow"
            icon={ExclamationCircleIcon}
          />
        );
      case 6:
        return (
          <Callout
            className="mt-3"
            title={stall === 0 ? t("pp-0") : t("pp-1", { stall })}
            color="yellow"
            icon={WrenchIcon}
          >
            {user.rights.some((right) => right === "mqtt") && (
              <MqttMessages id={id} messages={messages} />
            )}
          </Callout>
        );
      case 8:
        return renderAut(device, t, user);
      default:
        return (
          <Callout
            className="mt-3"
            title={t("man")}
            color="yellow"
            icon={WrenchIcon}
          />
        );
    }
  }
}

function MqttMessages({ id, messages }) {
  const [checked, setChecked] = useState(true);
  useEffect(() => {
    const div = document.getElementById(`mqtt-${id}`);
    if (checked && div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [checked, id, messages]);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <>
      {messages !== undefined && messages.length > 0 && (
        <div className="h-14 overflow-y-scroll" id={`mqtt-${id}`}>
          <ul className="list-none">
            {messages.map((item, key) => (
              <li key={key}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="mt-1">
        <label className="flex items-center">
          <input type="checkbox" checked={checked} onChange={handleChange} />
          <span className="pl-1">Scroll to bottom</span>
        </label>
      </div>
    </>
  );
}

export default function Info({ device, user }) {
  const t = useTranslations("Device");
  const { alarms, id, messages, mode, operation } = device;

  return (
    <>
      <div className="mt-3">{renderInfo(device, t, user)}</div>
      {alarms !== undefined && alarms.length > 0 && (
        <Callout
          className="mt-3"
          title={t("al-active", { count: alarms.length })}
          color="rose"
          icon={ExclamationTriangleIcon}
        >
          <ul className="list-none">
            {alarms.map((item, key) => (
              <li key={key}>
                <Alarm alarm={item} />
              </li>
            ))}
          </ul>
        </Callout>
      )}
      {user.rights.some((right) => right === "mqtt") && (
        <Callout className="mt-3" title="MQTT messages" color="indigo">
          <MqttMessages id={id} messages={messages} />
        </Callout>
      )}
    </>
  );
}

// export default function Info({ device }) {
//   const t = useTranslations("Device");
//   const { alarms, mode, operation } = device;

//   return (
//     <>
//       {alarms !== undefined && alarms.length > 0 ? (
//         <div className="mt-3">
//           <Callout
//             className="mt-3"
//             title={t("al-active", { count: alarms.length })}
//             color="rose"
//             icon={ExclamationTriangleIcon}
//           >
//             <ul className="list-none">
//               {alarms.map((item, key) => (
//                 <li key={key}>
//                   <Alarm alarm={item} />
//                 </li>
//               ))}
//             </ul>
//           </Callout>
//         </div>
//       ) : (
//         <div className="mt-3">{renderInfo(device, t)}</div>
//       )}
//     </>
//   );
// }
