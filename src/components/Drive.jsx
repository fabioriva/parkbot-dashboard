import { Badge, Card, Flex, Tracker, Text, Title, Metric } from "@tremor/react";

export default function Drive({ item }) {
  // console.log(item);
  const { enable } = item;
  return (
    <Card className="max-w-sm">
      <Flex>
        <Title>Drive {item.name}</Title>
        <Badge
          color={enable.status ? "emerald" : "slate"}
          tooltip={`${enable.addr} ${enable.label} ${
            enable.status ? "ON" : "OFF"
          }`}
        >
          <span className="text-[0.7rem]">{enable.label}</span>
        </Badge>
      </Flex>
      <Flex justifyContent="between" className="mt-3">
        <Text>0</Text>
        <Text>status word</Text>
        <Text>16</Text>
      </Flex>
      <Tracker data={data} className="mt-1" />
      <div className="grid grid-cols-2 gap-3 mt-3">
        <div>
          <Text>{"Speed"}</Text>
          <Metric>{item.speed}&nbsp;Hz</Metric>
        </div>
        <div>
          <Text>{"Current"}</Text>
          <Metric>{item.current}&nbsp;A</Metric>
        </div>
        <div>
          <Text>{"Load"}</Text>
          <Metric>{item.load}&nbsp;%</Metric>
        </div>
        <div>
          <Text>{"Last trip"}</Text>
          <Metric>{item.trip}</Metric>
        </div>
      </div>
    </Card>
  );
}
