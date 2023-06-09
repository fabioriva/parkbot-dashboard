export function getLog(log, t) {
  const { alarm, card, operation, mode, stall } = log;
  switch (operation.id) {
    case 1:
      return t("op-id-1", { id: alarm.id });
    case 2:
      return t("op-id-2", { id: alarm.id });
    case 3:
      return t("op-id-3", { id: mode.id, label: t(mode.key) });
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
    default:
      return `Operation ${operation.id}`;
  }
}

export function getInfo(data, t) {
  const { card, mode, name, operation, size, stall } = data;
  if (mode.id === 8) {
    switch (operation) {
      case 1:
        if (card !== 0 && stall !== 0) return t("device-ce-2", { card, stall });
        if (card !== 0) return t("device-ce-1", { card });
        return t("device-ce-0");
      case 2:
        if (card !== 0 && stall !== 0) return t("device-cu-2", { card, stall });
        if (card !== 0) return t("device-cu-1", { card });
        return t("device-cu-0");
      default:
        return t("device-auto");
    }
  } else {
    return t("device-man");
  }
}
