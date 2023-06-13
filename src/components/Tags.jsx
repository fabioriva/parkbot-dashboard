"use client";

import clsx from "clsx";
import { Fragment, useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { MagnifyingGlassIcon, TagIcon } from "@heroicons/react/24/solid";
import {
  Card,
  Metric,
  Text,
  TextInput,
  Bold,
  Icon,
  Flex,
  Grid,
} from "@tremor/react";
import { useData } from "@/hooks/useWebSocket";

function Tag({ item }) {
  const t = useTranslations("Tags");

  return (
    <Card
      // className={clsx("hover:cursor-pointer", {
      //   "hover:bg-amber-50": item.stall !== 0,
      //   "hover:bg-indigo-50": item.stall === 0,
      // })}
      decoration="left"
      decorationColor={item.status === 0 ? "indigo" : "amber"}
    >
      <Flex justifyContent="start" className="space-x-4">
        <Icon
          icon={TagIcon}
          variant="light"
          size="xl"
          color={item.status === 0 ? "indigo" : "amber"}
        />
        <div className="truncate">
          <Text>
            <Bold>{t("card", { nr: item.nr })}</Bold>
          </Text>
          <Flex
            justifyContent="start"
            alignItems="baseline"
            className="truncate space-x-3"
          >
            <Metric>{item.code}</Metric>
            <Text className="truncate">
              {item.status === 0
                ? t("valid", { from: item.from, to: item.to })
                : t("stall", { nr: item.status })}
            </Text>
          </Flex>
        </div>
      </Flex>
    </Card>
  );
}

export default function Tags({ aps, json }) {
  const t = useTranslations("Tags");

  const [cards, setCards] = useState(json);
  const [results, setResults] = useState([]);

  const url = `${process.env.NEXT_PUBLIC_WEBSOCK_URL}/${aps}/cards`;
  const { data, loading } = useData(url, {
    initialData: cards,
  });
  useEffect(() => setCards(data), [data]);

  return (
    <Fragment>
      <TextInput
        icon={MagnifyingGlassIcon}
        placeholder={t("search")}
        onChange={async (e) => {
          const { value } = e.currentTarget;
          // Dynamically load fuse.js
          const Fuse = (await import("fuse.js")).default;
          const options = {
            includeScore: true,
            // Search in `code` and in `nr` array
            keys: ["code", "nr"],
          };
          const fuse = new Fuse(cards, options);
          setResults(fuse.search(value));
        }}
      />
      <Grid numItemsSm={2} numItemsMd={3} numItemsLg={4} className="gap-6 mt-6">
        {results.length === 0
          ? cards.map((item, key) => <Tag item={item} key={key} />)
          : results.map(({ item }, key) => <Tag item={item} key={key} />)}
      </Grid>
    </Fragment>
  );
}
