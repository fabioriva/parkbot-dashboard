import { useState } from "react";
import { addDays, subDays } from "date-fns";
import { useTranslations } from "next-intl";
import { DateRangePicker } from "@tremor/react";

export function useDateRangePicker() {
  const [dateRange, setDateRange] = useState({
    from: subDays(new Date(), 1),
    to: new Date(),
  });

  const t = useTranslations("DateRangePicker");

  const dateRangePicker = (
    <DateRangePicker
      className="max-w-sm"
      // locale={it}
      maxDate={addDays(dateRange.from, 30)}
      options={[
        {
          value: "tdy",
          text: t("dateRangeOptionToday"),
          startDate: new Date(),
        },
        {
          value: "w",
          text: t("dateRangeOptionWeekly"),
          startDate: subDays(new Date(), 7),
          endDate: new Date(),
        },
        {
          value: "t",
          text: t("dateRangeOptionMonthly"),
          startDate: subDays(new Date(), 30),
          endDate: new Date(),
        },
      ]}
      selectPlacehoder={t("dateRangeDropdownPlaceholder")}
      placeholder={t("dateRangePlaceholder")}
      value={dateRange}
      onValueChange={setDateRange}
    />
  );

  return {
    dateRangePicker,
    dateRange,
  };
}
