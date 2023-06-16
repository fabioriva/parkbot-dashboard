import { Card, Flex, Text } from "@tremor/react";
import Io from "@/components/DeviceIo";
import Position from "@/components/Position";

export default function Motor({ item }) {
  // console.log(item);
  return (
    <Card className="mt-3 p-3">
      <Flex>
        <Text>{item.name}</Text>
        <Text>{item.status}</Text>
      </Flex>
      <div class="grid grid-cols-6 gap-3 mt-3">
        {item.io.map((item, key) => (
          <Io item={item} key={key} />
        ))}
      </div>
      {item.encoders.map((item, key) => (
        <Position item={item} key={key} />
      ))}
    </Card>
  );
}
