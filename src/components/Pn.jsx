"use client";

import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Fragment, useEffect, useState } from "react";
import { Grid, Flex, Card, Text, Metric, Badge, Button } from "@tremor/react";
import fetcher from "@/lib/fetch";
import useSWR from "swr";

function More({ href }) {
  const router = useRouter();
  const t = useTranslations("Buttons");

  return (
    <Button
      className="pr-1"
      size="xs"
      variant="light"
      icon={ArrowRightIcon}
      iconPosition="right"
      // disabled={!isAuthorized(role, roles)}
      onClick={() => router.push(href)}
    >
      {t("button-more")}
    </Button>
  );
}

export default function Pn({ aps, item }) {
  const t = useTranslations("Profinet");
  const status = item.online !== undefined ? item.online.status : true;
  return (
    <Card
      // className={`max-w-sm mx-auto ${
      //   status ? "hover:bg-emerald-50" : "hover:bg-rose-50"
      // }`}
      className="max-w-sm mx-auto"
      decoration="top"
      decorationColor={status ? "emerald" : "rose"}
    >
      <Flex>
        <div>
          <Text>Profinet device # {item.deviceNr}</Text>
          <Text className="text-black text-xs">{item.type}</Text>
        </div>
        <Badge color={status ? "emerald" : "rose"}>
          {status ? <span>ONLINE</span> : <span>OFFLINE</span>}
        </Badge>
      </Flex>
      <Flex
        justifyContent="start"
        alignItems="baseline"
        className="truncate space-x-3 mt-3"
      >
        <Metric>{item.deviceName}</Metric>
        <Text className="grow">{t(item.key, item.query)}</Text>
        {item?.rack && (
          <More
            href={`/${aps}/racks/${item.rack.nr - 1}?deviceName=${
              item.deviceName
            }&deviceNr=${item.deviceNr}`}
          />
        )}
      </Flex>
    </Card>
  );
}

// export default function Profinet({ aps, json }) {
//   const [devices, setDevices] = useState(json);
//   const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${aps}/racks`; // pn`;
//   const { data } = useSWR(url, fetcher, {
//     fallbackData: devices,
//     refreshInterval: 1000,
//   });
//   useEffect(() => setDevices(data), [data]);

//   return (
//     <Grid numItemsSm={2} numItemsMd={3} numItemsLg={4} className="gap-6 mt-6">
//       {data.map((item, key) => (
//         <Pn aps={aps} item={item} key={key} />
//       ))}
//     </Grid>
//   );
// }
