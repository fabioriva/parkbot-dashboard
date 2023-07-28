import { useTranslations } from "next-intl";
import Tooltip from "./Tooltip";

export default function BitInfo({ bit }) {
  const t = useTranslations("Bit");
  const tooltip = (
    <ul>
      <li>{bit.addr}</li>
      <li>{bit.label}</li>
      <li>{t(bit.label)}</li>
      <li className={bit.status ? "text-green-500" : "text-red-500"}>
        {bit.status ? "ON" : "OFF"}
      </li>
    </ul>
  );
  return tooltip;
}
