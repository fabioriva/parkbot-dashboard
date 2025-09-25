"use client";

import { useEffect, useState } from "react";
import Device from "@/components/Device";
import Queue from "@/components/Queue";
import { useData } from "@/hooks/useWebSocket";

export default function Overview({ aps, json, token, user }) {
  const [overview, setOverview] = useState(json);
  const url = `${process.env.NEXT_PUBLIC_WEBSOCK_URL}/${aps}/overview`;
  const { data } = useData(url, {
    initialData: overview,
  });
  useEffect(() => setOverview(data), [data]);

  if (aps === "bugrashov")
    return (
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 items-stretch gap-3">
        {overview.devices.flat(1).map((device, key) => (
          <Device
            advanced
            aps={aps}
            data={device}
            token={token}
            user={user}
            key={key}
          />
        ))}
        <Queue aps={aps} data={overview.exitQueue} token={token} user={user} />
      </div>
    );

  return (
    // <div className="grid lg:grid-cols-3 gap-3">
    //   <div className="lg:col-span-2 space-y-3">
    //     {overview.devices.map((devices, key) => (
    //       <div
    //         className={`grid lg:grid-cols-${
    //           devices.length <= 3 ? devices.length : 3
    //         }`}
    //       >
    //         {devices.map((device, key) => (
    //           <Device
    //             advanced
    //             aps={aps}
    //             data={device}
    //             token={token}
    //             user={user}
    //             key={key}
    //           />
    //         ))}
    //       </div>
    //     ))}
    //   </div>
    //   <Queue aps={aps} data={overview.exitQueue} token={token} user={user} />
    // </div>

    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
      <div className="xl:col-span-2 grid xl:grid-cols-2 2xl:grid-cols-3 items-stretch gap-3">
        {overview.devices.flat(1).map((device, key) => (
          <Device
            advanced
            aps={aps}
            data={device}
            token={token}
            user={user}
            key={key}
          />
        ))}
      </div>
      <Queue aps={aps} data={overview.exitQueue} token={token} user={user} />
    </div>

    // <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
    //   {overview.devices.flat(1).map((device, key) => (
    //     <Device
    //       advanced
    //       aps={aps}
    //       data={device}
    //       token={token}
    //       user={user}
    //       key={key}
    //     />
    //   ))}
    //   <Queue aps={aps} data={overview.exitQueue} token={token} user={user} />
    // </div>
  );
}
