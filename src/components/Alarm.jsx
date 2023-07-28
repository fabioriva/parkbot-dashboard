import { useTranslations } from "next-intl";

export default function Alarm({ alarm }) {
  const t = useTranslations("Alarm");
  return <span>{t(alarm.key, alarm.query)}</span>;
}

// export function getAlarm(alarm, t) {
//   if (alarm === undefined) {
//     return t("al-fallback");
//   }
//   return t(alarm.key, alarm.query);
//   // console.log(alarm);
//   // const { id, key, query } = alarm;
//   // switch (key) {
//   //   case "al-fc":
//   //     return t("al-fc", {
//   //       id,
//   //       name1: query.name1,
//   //       name2: query.name2,
//   //       motor: t(query.motor, { numMotor: query.numMotor }),
//   //     });
//   //   case "al-th":
//   //     return t("al-th", {
//   //       id,
//   //       name: query.name,
//   //       motor: t(query.motor),
//   //     });
//   //   case "al-to":
//   //     return t("al-to", {
//   //       id,
//   //       motor: t(query.motor, { numMotor: query.numMotor }),
//   //     });
//   //   default:
//   //     // return t("op-id-1", { id });
//   //     return t(key, query);
//   // }
// }
