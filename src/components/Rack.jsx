"use client";

import React, { lazy, Suspense } from "react";
import Loading from "@/components/Loading";
import { useData } from "@/hooks/useWebSocket";

const componentList = {
  et200m16: lazy(() => import("src/components/ET200M16")),
  et200m32: lazy(() => import("src/components/ET200M32")),
  et200s16: lazy(() => import("src/components/ET200S16")),
  et200s8: lazy(() => import("src/components/ET200S08")),
  // et200m08f: lazy(() => import("src/components/ET200M08_F")),
  // et200m16f: lazy(() => import("src/components/ET200M16_F")),
  // et200s8f: lazy(() => import("src/components/ET200S8_F")),
};

export default function Rack(props) {
  // console.log(props);
  const [rack, setRack] = React.useState(props.data);
  const url = `${process.env.NEXT_PUBLIC_WEBSOCK_URL}/${props.aps}/racks/${props.nr}`;
  const { data } = useData(url, {
    initialData: rack,
  });
  React.useEffect(() => setRack(data), [data]);
  return (
    <Suspense fallback={<Loading />}>
      <div
        className="overflow-scroll relative bg-white shadow w-full h-96 flex items-center justify-center"
        id={`rack-${rack.nr}`}
      >
        <span className="text-2xl">Simatic PLC Rack {props.nr}</span>
        {rack.cards.map((item, key) => {
          // console.log(item.module);
          const Module = componentList[item.module];
          return (
            <React.Fragment key={key}>
              {Module !== undefined && <Module key={key} module={item} />}
            </React.Fragment>
          );
        })}
      </div>
    </Suspense>
  );
}
