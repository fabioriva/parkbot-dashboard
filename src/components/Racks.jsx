"use client";

import clsx from "clsx";
import Link from "next-intl/link";
import { Fragment, useEffect, useState } from "react";
import { Grid, Flex, Card, Text, Metric, Badge } from "@tremor/react";
import Pn from "@/components/Profinet";
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
        <Pn aps={aps} item={item} key={key} />
      ))}
    </Grid>
  );

  // return (
  //   <Grid numItemsSm={2} numItemsMd={3} numItemsLg={4} className="gap-6 mt-6">
  //     {data.map((item, key) => {
  //       const status = item.online !== undefined ? item.online.status : true;
  //       return (
  //         <Link href={`/${aps}/racks/${key}`} key={key}>
  //           <Card
  //             className={clsx("max-w-sm mx-auto", {
  //               // "hover:bg-emerald-50": status,
  //               // "hover:bg-rose-50": !status,
  //             })}
  //             decoration="left"
  //             decorationColor={status ? "emerald" : "rose"}
  //           >
  //             <Flex>
  //               <div className="truncate">
  //                 <Text>PLC Rack # {item.nr}</Text>
  //                 <Metric>{item.title}</Metric>
  //               </div>
  //               <Badge color={status ? "emerald" : "rose"}>
  //                 {status ? <span>ONLINE</span> : <span>OFFLINE</span>}
  //               </Badge>
  //             </Flex>
  //           </Card>
  //         </Link>
  //       );
  //     })}
  //   </Grid>
  // );
}
