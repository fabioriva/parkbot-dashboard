import { cookies } from "next/headers";
import Error from "@/components/Error";
import Profinet from "@/components/Profinet";
import fetch from "@/lib/fetch";

import { Grid, Flex, Card, Text, Metric, Badge } from "@tremor/react";

export default async function Page({ params }) {
  const token = cookies().get(process.env.USER_TOKEN).value;
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${params.aps}/pn`;
  const json = await fetch(url, {
    cache: "no-store",
    headers: { Authorization: "Bearer " + token },
  });
  if (!json) {
    return <Error />;
  }
  return <Profinet aps={params.aps} json={json} />;
  // return (
  //   <Grid numItemsSm={2} numItemsMd={3} numItemsLg={4} className="gap-6 mt-6">
  //     {json.map((item, key) => (
  //       <Card
  //         // className={clsx("max-w-sm mx-auto", {
  //         //   "hover:bg-emerald-50": item.online.status,
  //         //   "hover:bg-rose-50": !item.online.status,
  //         // })}
  //         className={`max-w-sm mx-auto ${
  //           item.online.status ? "hover:bg-emerald-50" : "hover:bg-rose-50"
  //         }`}
  //         decoration="left"
  //         decorationColor={item.online.status ? "emerald" : "rose"}
  //         key={key}
  //       >
  //         <Flex>
  //           <Text>Profinet device # {item.deviceNr}</Text>
  //           <Badge color={item.online.status ? "emerald" : "rose"}>
  //             {item.online.status ? <span>ONLINE</span> : <span>OFFLINE</span>}
  //           </Badge>
  //           {/* <div className="truncate">
  //             <Text>Profinet device # {item.deviceNr}</Text>
  //             <Metric>{item.deviceName}</Metric>
  //           </div> */}
  //         </Flex>
  //         <Flex
  //           justifyContent="start"
  //           alignItems="baseline"
  //           className="truncate space-x-3"
  //         >
  //           {/* <Badge color={item.online.status ? "emerald" : "rose"}>
  //             {item.online.status ? <span>ONLINE</span> : <span>OFFLINE</span>}
  //           </Badge> */}
  //           <Metric>{item.deviceName}</Metric>
  //           <Text>{item.type}</Text>
  //           <Text>{item.key}</Text>
  //         </Flex>
  //       </Card>
  //     ))}
  //   </Grid>
  // );
}
