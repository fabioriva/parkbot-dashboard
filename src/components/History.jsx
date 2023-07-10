"use client";

import { format, isValid, endOfDay, startOfDay } from "date-fns";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Card, Text, Title, Flex } from "@tremor/react";
import List from "@/components/HistoryList";
import Table from "@/components/HistoryTable";
import { useDateRangePicker } from "@/hooks/useDateRangePicker";
import { useFuzzySearch } from "@/hooks/useFuzzySearch";

export default function History({ aps, data, token }) {
  const t = useTranslations("History");

  const [history, setHistory] = useState(data);

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
      // console.log(json);
      setHistory(json);
    }
    if (isValid(dateRange.from) && isValid(dateRange.to)) {
      handleQuery();
    }
  }, [dateRange, aps, token]);

  const { results, textInput } = useFuzzySearch(
    history.query,
    {
      includeScore: true,
      keys: ["card", "stall", "device.key"],
    },
    t("search")
  );

  return (
    <Card className="p-3 sm:p-6">
      <div className="hidden sm:block">
        <Flex>
          <div>
            <Title className="grow">{t("title")}</Title>
            <Text className="hidden sm:block grow truncate">
              {t("subtitle", {
                from: history.dateFrom,
                to: history.dateTo,
                count: history.count,
              })}
            </Text>
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
      <div className="my-6">{textInput}</div>
      <div className="block sm:hidden">
        <List
          data={
            results.length === 0
              ? history.query
              : results.map(({ item }) => item)
          }
        />
      </div>
      <div className="hidden sm:block">
        <Table
          data={
            results.length === 0
              ? history.query
              : results.map(({ item }) => item)
          }
        />
      </div>
    </Card>
  );
}
