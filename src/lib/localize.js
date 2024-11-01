import Alarm from "@/components/Alarm";

export function getInfo(data, t) {
  const { card, mode, name, operation, size, stall } = data;
  if (mode.id === 8) {
    switch (operation) {
      case 1:
        if (card !== 0 && stall !== 0) return t("ce-2", { card, stall });
        if (card !== 0) return t("ce-1", { card });
        return t("ce-0");
      case 2:
        if (card !== 0 && stall !== 0) return t("cu-2", { card, stall });
        if (card !== 0) return t("cu-1", { card });
        return t("cu-0");
      case 3:
        return t("idle-0");
      case 4:
        if (card !== 0 && stall !== 0) return t("swap-2", { card, stall });
        if (card !== 0) return t("swap-1", { card });
        return t("swap-0");
      default:
        return t("auto");
    }
  } else {
    return t("man");
  }
}

export function getLog(log, t) {
  const { alarm, card, operation, mode, stall, uid } = log;
  switch (operation.id) {
    case 1:
      // return t("op-id-1", { id: alarm.id });
      return <Alarm alarm={alarm} />;
    case 2:
      // return t("op-id-2", { id: alarm.id });
      return <Alarm alarm={alarm} />;
    case 3:
      return t("op-id-3", { id: mode.id });
    case 4:
      return t("op-id-4", { card });
    case 5:
      return t("op-id-5", { card, stall });
    case 6:
      return t("op-id-6", { card, stall });
    case 7:
      return t("op-id-7", { card, stall });
    case 8:
      return t("op-id-8", { card, stall });
    case 9:
      return t("op-id-9", { stall });
    case 10:
      return t("op-id-10", { card });
    case 11:
      return t("op-id-11", { card });
    case 12:
      return t("op-id-12", { card });
    case 13:
      return t("op-id-13", { card });
    case 14:
      return t("op-id-14", { card });
    default:
      return `Operation ${operation.id}`;
  }
}
