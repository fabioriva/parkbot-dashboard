import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Card,
  Flex,
  Text,
} from "@tremor/react";
import Io from "@/components/DeviceIo";
import Position from "@/components/Position";

export default function Motor({ item }) {
  // console.log(item);
  const t = useTranslations("Log");

  return (
    <Accordion>
      <AccordionHeader>
        <Flex>
          <div className="text-sm">{t(item.name)}</div>
          <Text>
            {t(item.status)}
            {item.drive !== undefined && (
              <span className="ml-3 text-slate-50">{item.drive.speed}Hz</span>
            )}
          </Text>
        </Flex>
      </AccordionHeader>
      <AccordionBody>
        <div className="grid grid-cols-6 gap-3">
          {item.io !== undefined &&
            item.io.map((item, key) => <Io item={item} key={key} />)}
        </div>
        {item.encoders !== undefined &&
          item.encoders.map((item, key) => <Position item={item} key={key} />)}
      </AccordionBody>
    </Accordion>
  );
}
