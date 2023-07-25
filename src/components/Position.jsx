import { useEffect, useReducer, useState } from "react";
import { Text, Flex, ProgressBar } from "@tremor/react";

const initialState = {
  isRunning: false,
  destination: 0,
  position: 0,
  distance: 0,
  percent: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "start":
      // console.log("start", state, action);
      return {
        ...state,
        isRunning: true,
        distance: Math.abs(action.destination - action.position),
        destination: action.destination,
        position: action.position,
        percent: 0,
      };
    case "reset":
      return initialState;

    case "tick":
      // console.log("tick", state, action);
      const actual = Math.abs(state.destination - action.position);
      const percent =
        // action.position === 0
        // ? 0
        actual <= 10 ? 100 : 100 - Math.round((actual * 100) / state.distance);
      return {
        ...state,
        percent,
      };
    default:
      throw new Error();
  }
}

export default function Position({ item }) {
  // console.log(item);
  // const [distance, setDistance] = useState(0);
  // const [percentage, setPercentage] = useState(0);

  // useEffect(() => {
  //   // console.log(item.name, "destination:", item.destination);
  //   setDistance(Math.abs(item.destination - item.position));
  // }, [item.destination, setDistance]);

  // useEffect(() => {
  //   function percentageValue(partialValue, totalValue) {
  //     // console.log(partialValue, totalValue);
  //     return totalValue === 0
  //       ? 100
  //       : 100 - Math.round((100 * partialValue) / totalValue);
  //   }

  //   item.position === 0
  //     ? setPercentage(0)
  //     : distance <= 10
  //     ? setPercentage(100)
  //     : setPercentage(
  //         percentageValue(
  //           Math.abs(Math.abs(item.destination - item.position)),
  //           distance
  //         )
  //       );
  // }, [item.destination, item.position, distance, setPercentage]);

  const { destination, position } = item;
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(
    () => dispatch({ type: "start", destination, position }),
    [destination]
  );

  useEffect(() => {
    position === 0
      ? dispatch({ type: "reset" })
      : dispatch({ type: "tick", position });
  }, [position]);

  return (
    <div className="mt-3">
      <Flex>
        <div className="text-sm dark:text-white">{item.name}</div>
        <Flex className="space-x-2" justifyContent="end">
          <Text>
            {item.position}&nbsp;&rarr;&nbsp;{item.destination}
          </Text>
          <Text>{state.percent}%</Text>
        </Flex>
      </Flex>
      <ProgressBar
        // className="mt-1"
        value={state.percent}
        showAnimation={false}
      />
    </div>
  );
}
