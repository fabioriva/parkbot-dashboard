import { useTranslations } from "next-intl";
import { BoltIcon } from "@heroicons/react/24/solid";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Badge,
  Card,
  Flex,
} from "@tremor/react";
import Bit from "@/components/Bit";
import Position from "@/components/Position";

export default function Motor({ item }) {
  // console.log(item);
  const t = useTranslations("Device");

  return (
    <Accordion>
      <AccordionHeader>
        <Flex className="text-left">
          <div className="text-sm">
            {t(item.name.key, { ...item.name.query })}
          </div>
          {item.run.status ? (
            <Badge color="yellow" icon={BoltIcon}>
              {t(item.message)}
            </Badge>
          ) : (
            <Badge color="slate">{t(item.message)}</Badge>
          )}
        </Flex>
      </AccordionHeader>
      <AccordionBody>
        <div className="grid grid-cols-6 gap-1">
          {item.io !== undefined &&
            item.io.map((item, key) => <Bit bit={item} key={key} />)}
        </div>
        {item.encoders !== undefined &&
          item.encoders.map((item, key) => <Position item={item} key={key} />)}
      </AccordionBody>
    </Accordion>
  );
}
