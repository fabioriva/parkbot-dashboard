import { useEffect, useState } from "react";
import { Text, Flex, ProgressBar } from "@tremor/react";

export default function Position({ item }) {
  // console.log(item);
  const [distance, setDistance] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // console.log(item.name, "destination:", item.destination);
    setDistance(Math.abs(item.destination - item.position));
  }, [item.destination, setDistance]);

  useEffect(() => {
    function percentageValue(partialValue, totalValue) {
      // console.log(partialValue, totalValue);
      return totalValue === 0
        ? 100
        : 100 - Math.round((100 * partialValue) / totalValue);
    }

    item.position === 0
      ? setPercentage(0)
      : distance <= 10
      ? setPercentage(100)
      : setPercentage(
          percentageValue(
            Math.abs(Math.abs(item.destination - item.position)),
            distance
          )
        );
  }, [item.destination, item.position, distance, setPercentage]);

  return (
    <div className="mt-3">
      <Flex>
        <Text>
          {item.name} &#x3D; {item.position} &rarr; {item.destination}
        </Text>
        <Text>{percentage}%</Text>
      </Flex>
      <ProgressBar
        className="mt-1"
        // color={barColor}
        value={percentage}
        showAnimation={false}
      />
    </div>
  );
}
