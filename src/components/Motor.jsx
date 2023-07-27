import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Card,
  Flex,
  Text,
} from "@tremor/react";
import Drive from "@/components/DriveKPI";
import Io from "@/components/DeviceIo";
import Position from "@/components/Position";

export default function Motor({ item }) {
  // console.log(item);
  const t = useTranslations("Log.Device");

  return (
    <Accordion>
      <AccordionHeader>
        <Flex className="text-left">
          <div className="text-sm">
            {t(item.name.key, { ...item.name.query })}
          </div>

          {item.run.status ? (
            <div className="text-right text-sm">{t(item.message)}</div>
          ) : (
            <Text className="text-right">{t(item.message)}</Text>
          )}
        </Flex>
      </AccordionHeader>
      <AccordionBody>
        {item.encoders !== undefined &&
          item.encoders.map((item, key) => <Position item={item} key={key} />)}
        <div className="mt-3 grid grid-cols-6 gap-3">
          {item.io !== undefined &&
            item.io.map((item, key) => <Io item={item} key={key} />)}
        </div>
      </AccordionBody>
    </Accordion>
  );
}
