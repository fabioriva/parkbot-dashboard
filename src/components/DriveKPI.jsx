import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Flex,
  Tracker,
  Text,
  Title,
} from "@tremor/react";
import Bit from "@/components/Bit";

export default function Drive({ item }) {
  // console.log(item);
  const { enable } = item;
  const statusWord = [...(item.status >>> 0).toString(2).padEnd(16, "0")].map(
    (b, key) => ({
      color: b === "1" ? "emerald" : "slate",
      tooltip: `Bit ${key}`,
    })
  );

  return (
    <Accordion>
      <AccordionHeader>
        <Flex className="text-sm text-left space-x-3">
          <div className="w-full">{item.name}</div>
          <div>{item.speed}&nbsp;Hz</div>
          <div>{item.current}&nbsp;A</div>
          <Bit bit={enable} />
          {/* <Badge
            color={enable.status ? "emerald" : "slate"}
            tooltip={`${enable.addr} ${enable.label} ${
              enable.status ? "ON" : "OFF"
            }`}
          >
            <span className="text-[0.7rem]">{enable.label}</span>
          </Badge> */}
        </Flex>
      </AccordionHeader>
      <AccordionBody>
        <Flex justifyContent="between" className="mt-1">
          <Text>0</Text>
          <Text>status word</Text>
          <Text>15</Text>
        </Flex>
        <Tracker data={statusWord} className="h-[0.5rem] mt-1" />
        <div className="grid grid-cols-4 gap-3 mt-3">
          <div>
            <Text>{"Speed"}</Text>
            <Title>{item.speed}&nbsp;Hz</Title>
          </div>
          <div>
            <Text>{"Current"}</Text>
            <Title>{item.current}&nbsp;A</Title>
          </div>
          <div>
            <Text>{"Load"}</Text>
            <Title>{item.load}&nbsp;%</Title>
          </div>
          <div>
            <Text>{"Last trip"}</Text>
            <Title>{item.trip}</Title>
          </div>
        </div>
      </AccordionBody>
    </Accordion>
  );
}
