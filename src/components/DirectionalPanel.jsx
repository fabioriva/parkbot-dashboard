import { Icon } from "@tremor/react";
import {
  ArrowSmallUpIcon,
  ArrowSmallDownIcon,
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
  StopCircleIcon,
} from "@heroicons/react/24/solid";
// import {
//   AccordionList,
//   Flex,
//   Text,
//   Accordion,
//   AccordionHeader,
//   AccordionBody,
// } from "@tremor/react";
// import Bit from "@/components/Bit";

const Signal = ({ color, icon, output }) => (
  <Icon
    // size="md"
    icon={icon}
    color={output.status ? color : "slate"}
    tooltip={`${output.addr} ${output.label} ${output.status ? "ON" : "OFF"}`}
  />
);

export default function DirectionalPanel({ outputs }) {
  const [L1, L2, L3, L4, L5] = outputs;

  return (
    <div className="grid grid-cols-3 place-items-center border border-solid border-gray-200 dark:border-gray-800 rounded-md ">
      <div />
      <Signal color="green" icon={ArrowSmallUpIcon} output={L1} />
      <div />
      <Signal color="green" icon={ArrowSmallLeftIcon} output={L4} />
      <Signal color="red" icon={StopCircleIcon} output={L3} />
      <Signal color="green" icon={ArrowSmallRightIcon} output={L5} />
      <div />
      <Signal color="green" icon={ArrowSmallDownIcon} output={L2} />
      <div />
    </div>
    // <Accordion>
    //   <AccordionHeader>
    //     <Flex>
    //       <div className="text-sm">{t(item.name)}</div>
    //       <Text className="text-right w-[30%]">{t(item.message)}</Text>
    //     </Flex>
    //   </AccordionHeader>
    //   <AccordionBody>
    //     <div className="grid grid-cols-6 gap-3">
    //       {item.data.map((item, key) => (
    //         <Bit bit={item} key={key} />
    //       ))}
    //     </div>
    //   </AccordionBody>
    // </Accordion>
  );
}
