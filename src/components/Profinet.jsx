"use client";

import { useTranslations } from "next-intl";
import { Fragment, useEffect, useState } from "react";
import { Grid, Flex, Card, Text, Metric, Badge } from "@tremor/react";
import fetcher from "@/lib/fetch";
import useSWR from "swr";

export default function Profinet({ aps, json }) {
  const t = useTranslations("Profinet");
  const [devices, setDevices] = useState(json);
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${aps}/pn`;
  const { data } = useSWR(url, fetcher, {
    fallbackData: devices,
    refreshInterval: 1000,
  });
  useEffect(() => setDevices(data), [data]);

  return (
    <Grid numItemsSm={2} numItemsMd={3} numItemsLg={4} className="gap-6 mt-6">
      {data.map((item, key) => {
        const status = item.online !== undefined ? item.online.status : true;
        return (
          <Card
            className={`max-w-sm mx-auto ${
              status ? "hover:bg-emerald-50" : "hover:bg-rose-50"
            }`}
            decoration="left"
            decorationColor={status ? "emerald" : "rose"}
            key={key}
          >
            <Flex>
              <div>
                <Text>Profinet device # {item.deviceNr}</Text>
                <Text className="text-xs">{item.type}</Text>
              </div>
              <Badge color={status ? "emerald" : "rose"}>
                {status ? <span>ONLINE</span> : <span>OFFLINE</span>}
              </Badge>
            </Flex>
            <Flex
              justifyContent="start"
              alignItems="baseline"
              className="truncate space-x-3"
            >
              <Metric>{item.deviceName}</Metric>
              <Text>{t(item.key, item.query)}</Text>
            </Flex>
          </Card>
        );
      })}
    </Grid>
  );
}
