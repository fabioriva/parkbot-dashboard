"use client";

import clsx from "clsx";
import Link from "next-intl/link";
import { Fragment, useEffect, useState } from "react";
import { Grid, Flex, Card, Text, Metric, Badge } from "@tremor/react";
import fetcher from "@/lib/fetch";
import useSWR from "swr";

export default function Racks({ aps, json }) {
  // console.log(data);
  const [racks, setRacks] = useState(json);
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${aps}/racks`;
  const { data } = useSWR(url, fetcher, {
    fallbackData: racks,
    refreshInterval: 1000,
  });
  useEffect(() => setRacks(data), [data]);

  return (
    <Grid numItemsSm={2} numItemsMd={3} numItemsLg={4} className="gap-6 mt-6">
      {data.map((item, key) => (
        <Link href={`/${aps}/racks/${key}`} key={key}>
          <Card
            className={clsx("max-w-sm mx-auto", {
              "hover:bg-emerald-50": item.online.status,
              "hover:bg-rose-50": !item.online.status,
            })}
            decoration="left"
            decorationColor={item.online.status ? "emerald" : "rose"}
          >
            <Flex>
              <div className="truncate">
                <Text>PLC Rack # {item.nr}</Text>
                <Metric>{item.title}</Metric>
              </div>
              <Badge color={item.online.status ? "emerald" : "rose"}>
                {item.online.status ? (
                  <span>ONLINE</span>
                ) : (
                  <span>OFFLINE</span>
                )}
              </Badge>
            </Flex>
          </Card>
        </Link>
      ))}
    </Grid>
  );
}
