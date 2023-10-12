"use client";

import { useTranslations } from "next-intl";
import { format, isValid, endOfDay, startOfDay } from "date-fns";
import { /*Fragment, */ useEffect, useState } from "react";
import { ListBulletIcon, TableCellsIcon } from "@heroicons/react/24/solid";
import { Card, Text, Title, Flex, Tab, TabList, TabGroup } from "@tremor/react";
import List from "@/components/HistoryList";
import Table from "@/components/HistoryTable";
import { useDateRangePicker } from "@/hooks/useDateRangePicker";
import { useFuzzySearch } from "@/hooks/useFuzzySearch";

export default function History({ aps, json, token }) {
  const t = useTranslations("History");

  const [history, setHistory] = useState(json);
  const [view, setView] = useState(0); // 0=List view, 1=Table view
  const { dateRange, dateRangePicker } = useDateRangePicker();

  useEffect(() => {
    async function handleQuery() {
      const strFrom = format(startOfDay(dateRange.from), "yyyy-MM-dd HH:mm:ss");
      const strTo = format(endOfDay(dateRange.to), "yyyy-MM-dd HH:mm:ss");
      const filter = "a";
      const query = `system=0&dateFrom=${strFrom}&dateTo=${strTo}&filter=${filter}&device=0&number=0`;
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${aps}/history?${query}`;
      const res = await fetch(url, {
        cache: "no-store",
        headers: { Authorization: "Bearer " + token },
      });
      const json = await res.json();
      setHistory(json);
    }
    if (isValid(dateRange.from) && isValid(dateRange.to)) {
      handleQuery();
    }
  }, [dateRange, aps, token]);

  const { fuzzySearchInput, results } = useFuzzySearch(
    history.query,
    {
      includeScore: true,
      keys: ["alarm.id", "card", "stall", "device.key"],
    },
    t("search")
  );

  const data = (history, results) =>
    results.length === 0 ? history.query : results.map(({ item }) => item);

  return (
    <Card className="p-3 sm:p-6">
      <div className="hidden sm:block">
        <Flex>
          <div className="grow">
            <Title className="grow">{t("title")}</Title>
            <Text className="hidden sm:block grow truncate">
              {t("subtitle", {
                from: history.dateFrom,
                to: history.dateTo,
                count: history.count,
              })}
            </Text>
          </div>
          <div className="mr-3">
            <TabGroup index={view} onIndexChange={(index) => setView(index)}>
              <TabList variant="solid">
                <Tab icon={ListBulletIcon}>{t("view-list")}</Tab>
                <Tab icon={TableCellsIcon}>{t("view-table")}</Tab>
              </TabList>
            </TabGroup>
          </div>
          {dateRangePicker}
        </Flex>
      </div>
      <div className="block sm:hidden mt-3">
        {dateRangePicker}
        <Title className="mt-6 grow">{t("title")}</Title>
        <Text className="hidden sm:block grow truncate">
          {t("subtitle", {
            from: history.dateFrom,
            to: history.dateTo,
            count: history.count,
          })}
        </Text>
      </div>
      <div className="my-6">{fuzzySearchInput}</div>
      <div className="block sm:hidden">
        <List data={data(history, results)} />
      </div>
      <div className="hidden sm:block">
        {view === 0 ? (
          <List data={data(history, results)} />
        ) : (
          <Table data={data(history, results)} />
        )}
      </div>
    </Card>
  );
}
