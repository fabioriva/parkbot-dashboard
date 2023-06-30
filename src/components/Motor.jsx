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
  const t = useTranslations("Log");

  return (
    <Accordion>
      <AccordionHeader>
        <Flex className="text-left">
          <div className="text-sm grow">
            {t(item.name.key, { ...item.name.query })}
          </div>
          {/* {item.drive !== undefined && (
            <span className="text-sm px-3">{item.drive.speed}&nbsp;Hz</span>
          )} */}
          {item.run.status ? (
            <div className="text-sm text-right w-[30%]">{t(item.message)}</div>
          ) : (
            <Text className="text-right w-[30%]">{t(item.message)}</Text>
          )}
        </Flex>
      </AccordionHeader>
      <AccordionBody>
        <div className="space-y-6">
          {/* {item.drive !== undefined && <Drive item={item.drive} />} */}
          <div>
            {item.encoders !== undefined &&
              item.encoders.map((item, key) => (
                <Position item={item} key={key} />
              ))}
          </div>
          <div className="grid grid-cols-6 gap-3">
            {item.io !== undefined &&
              item.io.map((item, key) => <Io item={item} key={key} />)}
          </div>
        </div>
      </AccordionBody>
    </Accordion>
  );
}
