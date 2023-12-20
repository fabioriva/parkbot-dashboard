"use client";

import { Fragment, useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import {
  MagnifyingGlassIcon,
  FingerPrintIcon,
  // TagIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import {
  Card,
  Metric,
  Text,
  Bold,
  Icon,
  Flex,
  Grid,
  Badge,
} from "@tremor/react";
import { useData } from "@/hooks/useWebSocket";
import { useFuzzySearch } from "@/hooks/useFuzzySearch";

function Tag({ item }) {
  // console.log(item);
  const t = useTranslations("Tags");
  const color = item.status === 0 ? "sky" : "violet";
  const uid =
    item.uid !== "" ? (
      <span>UID {item.uid}</span>
    ) : (
      <span>{t("notIssued")}</span>
    );

  return (
    <Card decoration="left" decorationColor={color}>
      <div className="space-y-1">
        <Flex alignItems="start">
          {item.uid !== undefined && <Text> RFID tag {uid}</Text>}
          {item.uid !== undefined && <Badge icon={XCircleIcon}>Clear</Badge>}
        </Flex>
        <Flex>
          <Metric>{t("card", { nr: item.nr })}</Metric>
          {item.code !== "" && (
            <Badge color={color} icon={FingerPrintIcon} size="xl">
              <Bold>{item.code}</Bold>
            </Badge>
          )}
        </Flex>
        <Text>
          {item.status === 0
            ? t("valid", { from: item.from, to: item.to })
            : t("stall", { nr: item.status })}
        </Text>
      </div>
    </Card>
  );

  // return (
  //   <Card
  //     decoration="left"
  //     decorationColor={item.status === 0 ? "indigo" : "amber"}
  //   >
  //     <Flex justifyContent="start" className="space-x-4">
  //       <Icon
  //         icon={TagIcon}
  //         variant="light"
  //         size="xl"
  //         color={item.status === 0 ? "indigo" : "amber"}
  //       />
  //       <div className="truncate">
  //         <Text>
  //           <Bold>{t("card", { nr: item.nr })}</Bold>
  //         </Text>
  //         <Flex
  //           justifyContent="start"
  //           alignItems="baseline"
  //           className="truncate space-x-3"
  //         >
  //           <Metric>{item.code}</Metric>
  //           <Text className="truncate">
  //             {item.status === 0
  //               ? t("valid", { from: item.from, to: item.to })
  //               : t("stall", { nr: item.status })}
  //           </Text>
  //         </Flex>
  //       </div>
  //     </Flex>
  //   </Card>
  // );
}

export default function Tags({ aps, json }) {
  const t = useTranslations("Tags");

  const [cards, setCards] = useState(json);

  const url = `${process.env.NEXT_PUBLIC_WEBSOCK_URL}/${aps}/cards`;
  const { data, loading } = useData(url, {
    initialData: cards,
  });
  useEffect(() => setCards(data), [data]);

  const { fuzzySearchInput, results } = useFuzzySearch(
    cards,
    {
      includeScore: true,
      keys: ["code", "nr"], // Search array in `code` and in `nr`
    },
    t("search")
  );

  return (
    <Fragment>
      {fuzzySearchInput}
      <Grid numItemsSm={2} numItemsMd={3} numItemsLg={4} className="gap-6 mt-6">
        {results.length === 0
          ? cards.map((item, key) => <Tag item={item} key={key} />)
          : results.map(({ item }, key) => <Tag item={item} key={key} />)}
      </Grid>
    </Fragment>
  );
}
