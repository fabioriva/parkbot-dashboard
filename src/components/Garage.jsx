import clsx from "clsx";
import { Badge, Icon } from "@tremor/react";
import {
  ArrowSmallUpIcon,
  ArrowSmallDownIcon,
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
  StopCircleIcon,
} from "@heroicons/react/24/solid";
import Bit from "@/components/Bit";
import BitInfo from "@/components/BitInfo";
import DirectionalPanel from "./DirectionalPanel";

const Sensor = ({ name, sensor }) => (
  <Badge
    className={`${name} absolute`}
    color={sensor.status ? "green" : "slate"}
    tooltip={<BitInfo bit={sensor} />}
  >
    {/* <span className="text-[0.75rem]">{sensor.label}</span> */}
    <span className="text-[0.75rem]">{name}</span>
  </Badge>
);

export default function Garage({ panel, sensors }) {
  // console.log(sensors);
  const [EPZ, FPE, FLA, FLP, FDL, FDR] = sensors;
  const extra = sensors.slice(6);
  console.log(EPZ);
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="border border-solid border-gray-200 dark:border-gray-800 col-span-2 relative">
        <img src={"/car.png"} alt="car" height={"100%"} width={"100%"} />
        {EPZ.name === "EPZ" && <Sensor sensor={EPZ} name="EPZ" />}
        <Sensor sensor={FPE} name="FPE" />
        <Sensor sensor={FLA} name="FLA" />
        <Sensor sensor={FLP} name="FLP" />
        <Sensor sensor={FDL} name="FDL" />
        <Sensor sensor={FDR} name="FDR" />
        <style jsx global>{`
          .FLA {
            left: 41%;
            top: 8%;
          }
          .EPZ {
            // left: 70%;
            // top: 22%;
            left: 41%;
            top: 28%;
          }
          .FPE {
            left: 41%;
            top: 45%;
          }
          .FLP {
            left: 41%;
            top: 85%;
          }
          .FDL {
            left: 5%;
            top: 45%;
          }
          .FDR {
            left: 78%;
            top: 45%;
          }
        `}</style>
      </div>
      <div className="space-y-3">
        <DirectionalPanel outputs={panel} />
        <div className="grid grid-cols-2 gap-3 border border-solid border-gray-200 dark:border-gray-800 ">
          {extra.map((sensor, index) => (
            <Bit bit={sensor} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
