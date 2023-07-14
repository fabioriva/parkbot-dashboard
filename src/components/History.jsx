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
// import { useTimeoutFn } from "react-use";
// import { Transition } from "@headlessui/react";

export default function History({ aps, data, token }) {
  const t = useTranslations("History");

  const [history, setHistory] = useState(data);

  const [view, setView] = useState(0); // 0=List view, 1=Table view
  // let [isShowing, setIsShowing] = useState(true);
  // let [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500);
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
            <TabGroup
              index={view}
              onIndexChange={(index) => {
                // setIsShowing(false);
                // resetIsShowing();
                setView(index);
              }}
            >
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
        {/* <Transition
          as={Fragment}
          show={isShowing}
          // enter="transition ease-out duration-100"
          // enterFrom="transform opacity-0 scale-95"
          // enterTo="transform opacity-100 scale-100"
          // leave="transition ease-in duration-75"
          // leaveFrom="transform opacity-100 scale-100"
          // leaveTo="transform opacity-0 scale-95"
          enter="transition-opacity duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-0"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {(ref) => (
            <div ref={ref}> */}
        {view === 0 ? (
          <List
            data={
              results.length === 0
                ? history.query
                : results.map(({ item }) => item)
            }
          />
        ) : (
          <Table
            data={
              results.length === 0
                ? history.query
                : results.map(({ item }) => item)
            }
          />
        )}
        {/* </div>
          )}
        </Transition> */}
      </div>
    </Card>
  );
}
