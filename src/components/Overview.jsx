"use client";

import { useEffect, useState } from "react";
import { Grid, Col } from "@tremor/react";
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

  return (
    <Grid numItemsSm={1} numItemsLg={3} className="gap-6">
      <Col numColSpanLg={2}>
        <div className="space-y-6">
          {overview.devices.map((item, key) => (
            <Grid
              numItemsMd={1}
              numItemsLg={item.length}
              className="gap-6 items-stretch"
              key={key}
            >
              {item.map((device, key) => (
                <Device
                  advanced
                  aps={aps}
                  data={device}
                  token={token}
                  user={user}
                  key={key}
                />
              ))}
            </Grid>
          ))}
        </div>
      </Col>
      <Queue aps={aps} data={overview.exitQueue} token={token} user={user} />
    </Grid>
  );
}
