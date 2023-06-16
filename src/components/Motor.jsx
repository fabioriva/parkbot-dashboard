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
  return (
    <Accordion>
      <AccordionHeader>
        <Flex>
          <div className="text-sm">{item.name}</div>
          <Text>{item.status}</Text>
        </Flex>
      </AccordionHeader>
      <AccordionBody>
        <div class="grid grid-cols-6 gap-3">
          {item.io.map((item, key) => (
            <Io item={item} key={key} />
          ))}
        </div>
        {item.encoders.map((item, key) => (
          <Position item={item} key={key} />
        ))}
      </AccordionBody>
    </Accordion>
    // <Card className="mt-3 p-3">
    //   <Flex>
    //     <div className="text-sm">{item.name}</div>
    //     <Text>{item.status}</Text>
    //   </Flex>
    //   <div class="grid grid-cols-6 gap-3 mt-3">
    //     {item.io.map((item, key) => (
    //       <Io item={item} key={key} />
    //     ))}
    //   </div>
    //   {item.encoders.map((item, key) => (
    //     <Position item={item} key={key} />
    //   ))}
    // </Card>
  );
}
