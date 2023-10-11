import { useTranslations } from "next-intl";

export default function BitInfo({ bit }) {
  const t = useTranslations("Bit");
  // const t = useTranslations("Rack");
  const tooltip = (
    <ul>
      <li>{bit.addr}</li>
      <li>{bit.label}</li>
      <li>{t(bit.label)}</li>
      {/* <li>{bit.key ? t(bit.key, bit.query) : bit.label && t(bit.label)}</li> */}
      <li className={bit.status ? "text-green-500" : "text-red-500"}>
        {bit.status ? "ON" : "OFF"}
      </li>
    </ul>
  );
  return tooltip;
}
