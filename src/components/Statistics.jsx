"use client";

import { format, isValid } from "date-fns";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Card, Text, Title, Tab, TabList, TabGroup } from "@tremor/react";
import BarChart from "@/components/OperationsBarChart";
import Table from "@/components/OperationsTable";
import { useDateRangePicker } from "@/hooks/useDateRangePicker";

import Chart from "@/components/OperationsByDevicesChart";

export default function Statistics({ aps, data, token }) {
  // console.log(data);
  const [devices, setDevices] = useState(data.devices);
  const [operations, setOperations] = useState(data.operations);
  const [stacked, setStacked] = useState(false);
  const { dateRange, dateRangePicker } = useDateRangePicker(2);

  const t = useTranslations("Statistics");

  useEffect(() => {
    async function handleQuery() {
      const strFrom = format(dateRange.from, "yyyy-MM-dd");
      const strTo = format(dateRange.to, "yyyy-MM-dd");
      const query = `dateFrom=${strFrom}&dateTo=${strTo}`;
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${aps}/statistics?${query}`;
      const res = await fetch(url, {
        cache: "no-store",
        headers: { Authorization: "Bearer " + token },
      });
      const json = await res.json();
      // console.log(json);
      setDevices(json.devices);
      setOperations(json.operations);
    }
    // console.log(dateRange);
    if (isValid(dateRange.from) && isValid(dateRange.to)) {
      handleQuery();
    }
  }, [dateRange, aps, token]);

  const Toggler = () => (
    <TabGroup
      className="mx-6 w-fit"
      index={stacked}
      onIndexChange={(index) => setStacked(index)}
    >
      <TabList variant="solid">
        <Tab>{t("toggleItemStandard")}</Tab>
        <Tab>{t("toggleItemStacked")}</Tab>
      </TabList>
    </TabGroup>
  );

  return (
    <>
      <Card className="p-3 sm:p-6">
        <div className="hidden sm:block">
          <div className="flex items-center">
            <div className="grow">
              <Title>{t("title")}</Title>
              <Text>{operations.query.date}</Text>
            </div>
            <Toggler />
            {dateRangePicker}
          </div>
          <BarChart data={operations.data} stacked={stacked} />
        </div>
        <div className="block sm:hidden">
          {dateRangePicker}
          <Title className="mt-3">{t("title")}</Title>
          <Text>{operations.query.date}</Text>
          <Table data={operations.data} />
          {/* <BarChart data={operations.data} layout="vertical" stacked={true} /> */}
        </div>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <Chart data={devices} category="total" title={t("devicesTotal")} />
        <Chart data={devices} category="entries" title={t("devicesEntries")} />
        <Chart data={devices} category="exits" title={t("devicesExits")} />
      </div>
    </>
  );
}
