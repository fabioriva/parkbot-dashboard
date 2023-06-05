"use client";

import clsx from "clsx";
import { Fragment, useState } from "react";
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

function Tag({ item }) {
  const t = useTranslations("Tags");

  return (
    <Card
      className={clsx("hover:cursor-pointer", {
        "hover:bg-amber-50": item.stall !== 0,
        "hover:bg-indigo-50": item.stall === 0,
      })}
      decoration="left"
      decorationColor={item.stall === 0 ? "indigo" : "amber"}
    >
      <Flex justifyContent="start" className="space-x-4">
        <Icon
          icon={TagIcon}
          variant="light"
          size="xl"
          color={item.stall === 0 ? "indigo" : "amber"}
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
              {t("valid", { from: item.from, to: item.to })}
            </Text>
          </Flex>
        </div>
      </Flex>
    </Card>
  );
}

export default function Tags(props) {
  const [results, setResults] = useState([]);
  const t = useTranslations("Tags");

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
          const fuse = new Fuse(props.data, options);
          setResults(fuse.search(value));
        }}
      />
      <Grid numColsSm={2} numColsMd={3} numColsLg={4} className="gap-6 mt-6">
        {results.length === 0
          ? props.data.map((item, key) => <Tag item={item} key={key} />)
          : results.map(({ item }, key) => <Tag item={item} key={key} />)}
      </Grid>
    </Fragment>
  );
}
