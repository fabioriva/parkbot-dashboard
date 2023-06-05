"use client";

import { format, isValid } from "date-fns";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
  Card,
  // BarChart,
  Text,
  Title,
  Flex,
  Toggle,
  ToggleItem,
} from "@tremor/react";
import BarChart from "@/components/OperationsBarChart";
import Table from "@/components/StatisticsTable";
import { useDateRangePicker } from "@/hooks/useDateRangePicker";

export default function Statistics({ aps, data, token }) {
  const [operations, setOperations] = useState(data);
  const [stack, setStack] = useState(false);
  // const categories = ["entries", "exits", "total"];
  const colors = ["sky", "violet", "fuchsia"];
  const { dateRange, dateRangePicker } = useDateRangePicker();
  const t = useTranslations("Statistics");

  useEffect(() => {
    async function handleQuery() {
      const strFrom = format(dateRange[0], "yyyy-MM-dd");
      const strTo = format(dateRange[1], "yyyy-MM-dd");
      const query = `dateFrom=${strFrom}&dateTo=${strTo}`;
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${aps}/statisticsByRange?${query}`;
      const res = await fetch(url, {
        cache: "no-store",
        headers: { Authorization: "Bearer " + token },
      });
      const json = await res.json();
      // console.log(json);
      setOperations(json);
    }
    // console.log(dateRange);
    if (isValid(dateRange[0]) && isValid(dateRange[1])) {
      handleQuery();
    }
  }, [dateRange, aps, token]);

  return (
    <Card className="p-3 sm:p-6">
      <div className="hidden sm:block">
        <Flex>
          <div>
            <Title className="grow">{t("title")}</Title>
            <Text>{operations.query.date}</Text>
          </div>
          {dateRangePicker}
        </Flex>
        <Flex className="mt-6 justify-end">
          <Toggle
            color="zinc"
            defaultValue={false}
            onValueChange={(value) => setStack(value)}
          >
            <ToggleItem value={false} text={t("toggleItemStandard")} />
            <ToggleItem value={true} text={t("toggleItemStacked")} />
          </Toggle>
        </Flex>
        <div className="hidden sm:block mt-6">
          <BarChart data={operations.data} stacked={stack} />
        </div>
      </div>
      <div className="block sm:hidden">
        {dateRangePicker}
        <Title className="mt-6 grow">{t("title")}</Title>
        <Text>{operations.query.date}</Text>
        <Table colors={colors} data={operations.data} />
      </div>
    </Card>
  );
}
