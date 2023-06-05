"use client";

import { Fragment, useState } from "react";
import { useTranslations } from "next-intl";
import {
  Dropdown,
  DropdownItem,
  Card,
  BarChart,
  Text,
  Title,
  Flex,
  Toggle,
  ToggleItem,
} from "@tremor/react";

export default function Statistics({ aps, data, token }) {
  const [operations, setOperations] = useState(data);
  const [stack, setStack] = useState("false");
  const [value, setValue] = useState("daily");
  const categories = ["entries", "exits", "total"];
  const colors = ["sky", "violet", "fuchsia"];

  const t = useTranslations("Statistics");

  return (
    <Card>
      <Flex>
        {operations
          .filter((item) => item.key === value)
          .map((item, key) => (
            <div key={key}>
              <Title className="grow">{t("title")}</Title>
              <Text className="hidden sm:inline">{item.query.date}</Text>
            </div>
          ))}
        <Dropdown className="max-w-max" value={value} onValueChange={setValue}>
          <DropdownItem value="daily" text={t("dropdownItemDaily")} />
          <DropdownItem value="weekly" text={t("dropdownItemWeekly")} />
          <DropdownItem value="monthly" text={t("dropdownItemMonthly")} />
          <DropdownItem value="yearly" text={t("dropdownItemYearly")} />
        </Dropdown>
      </Flex>
      {operations
        .filter((item) => item.key === value)
        .map((item, key) => (
          <Fragment key={key}>
            <Flex className="mt-6 justify-end">
              <Toggle
                color="zinc"
                defaultValue="false"
                onValueChange={(value) => setStack(value)}
              >
                <ToggleItem value="false" text={t("toggleItemStandard")} />
                <ToggleItem value="true" text={t("toggleItemStacked")} />
              </Toggle>
            </Flex>
            <BarChart
              className="mt-6"
              data={item.data}
              index="name"
              categories={categories}
              colors={colors}
              stack={stack === "true"}
            />
          </Fragment>
        ))}
    </Card>
  );
}
