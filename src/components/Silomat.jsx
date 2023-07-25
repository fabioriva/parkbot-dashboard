// import Image from "next/image";
import clsx from "clsx";
import { Card, Text } from "@tremor/react";
import Tooltip from "./Tooltip";

const Sensor = ({ name, sensor }) => (
  <Tooltip
    tooltip={`${sensor.addr} ${sensor.label} ${sensor.status ? "ON" : "OFF"}`}
  >
    <div
      className={clsx(
        `${name} w-4 h-4 rounded-full border-solid border absolute`,
        {
          [`bg-green-500`]: sensor.status,
          [`bg-green-200`]: !sensor.status,
        }
      )}
    />
  </Tooltip>
);

export default function Silomat({ sensors }) {
  // console.log(data);
  // const inputs = data.slice(0, 8);
  // const outputs = data.slice(8);

  return (
    // <Card className="mt-3 p-3">
    <div className="border-solid border mt-6 relative">
      <Sensor sensor={sensors[0]} name="mv" />
      <Sensor sensor={sensors[1]} name="mh" />
      <Sensor sensor={sensors[2]} name="es" />
      <Sensor sensor={sensors[3]} name="eh" />
      <Sensor sensor={sensors[5]} name="eav1" />
      <Sensor sensor={sensors[4]} name="ecv" />
      <Sensor sensor={sensors[5]} name="eav2" />
      <Sensor sensor={sensors[6]} name="eah1" />
      <Sensor sensor={sensors[7]} name="ech" />
      <Sensor sensor={sensors[6]} name="eah2" />
      <img src={"/Silomat.png"} alt="Silomat" height={"100%"} width={"100%"} />
      <style jsx global>{`
        .mv {
          left: 38%;
          top: 14%;
        }
        .mh {
          left: 43%;
          top: 14%;
        }
        .es {
          left: 43%;
          top: 32%;
        }
        .eh {
          left: 43%;
          top: 54%;
        }
        .eav1 {
          left: 16.5%;
          top: 12%;
        }
        .ecv {
          left: 16.5%;
          top: 42%;
        }
        .eav2 {
          left: 16.5%;
          top: 76%;
        }
        .eah1 {
          left: 66.5%;
          top: 12%;
        }
        .ech {
          left: 66.5%;
          top: 42%;
        }
        .eah2 {
          left: 66.5%;
          top: 76%;
        }
      `}</style>
    </div>
    // </Card>
  );
}
