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

function renderAut(device, t) {
  switch (device.operation) {
    case 1:
      return (
        <Callout className="mt-3" title={getInfo(device, t)} color="sky" />
      );
    case 2:
      return (
        <Callout className="mt-3" title={getInfo(device, t)} color="violet" />
      );
    case 3:
      return (
        <Callout className="mt-3" title={getInfo(device, t)} color="emerald" />
      );
    case 4:
      return (
        <Callout className="mt-3" title={getInfo(device, t)} color="orange" />
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

function renderInfo(device, t) {
  const { mode, stall } = device;
  switch (mode.id) {
    case 0:
      return (
        <Callout
          className="mt-3"
          title={t("off")}
          color="yellow"
          icon={ExclamationCircleIcon}
        />
      );
    case 6:
      return (
        <Callout
          className="mt-3"
          title={stall === 0 ? t("pp-0") : t("pp-1")}
          color="yellow"
          icon={WrenchIcon}
        />
      );
    case 8:
      return renderAut(device, t);
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

export default function Info({ device }) {
  const t = useTranslations("Device");
  const { alarms, mode, operation } = device;

  return (
    <>
      <div className="mt-3">{renderInfo(device, t)}</div>
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
      {device.message && <Callout className="mt-3" title={device.message} />}
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
