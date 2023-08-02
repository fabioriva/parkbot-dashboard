import { useState } from "react";
import { useParams } from "next/navigation";
import { /*addDays,*/ subDays } from "date-fns";
import { enUS, it } from "date-fns/locale";
import { useTranslations } from "next-intl";
import { DateRangePicker } from "@tremor/react";

const locales = {
  en: enUS,
  it,
};

export function useDateRangePicker() {
  const [dateRange, setDateRange] = useState({
    from: subDays(new Date(), 1),
    to: new Date(),
  });

  const { locale } = useParams();
  const t = useTranslations("DateRangePicker");

  const dateRangePicker = (
    <DateRangePicker
      className="max-w-sm"
      locale={locales[locale]}
      // maxDate={addDays(dateRange.from, 30)}
      // options={[
      //   {
      //     value: "tdy",
      //     text: t("dateRangeOptionToday"),
      //     startDate: new Date(),
      //   },
      //   {
      //     value: "w",
      //     text: t("dateRangeOptionWeekly"),
      //     startDate: subDays(new Date(), 7),
      //     endDate: new Date(),
      //   },
      //   {
      //     value: "t",
      //     text: t("dateRangeOptionMonthly"),
      //     startDate: subDays(new Date(), 30),
      //     endDate: new Date(),
      //   },
      // ]}
      selectPlaceholder={t("dateRangeDropdownPlaceholder")}
      placeholder={t("dateRangePlaceholder")}
      // defaultValue={dateRange}
      value={dateRange}
      onValueChange={setDateRange}
    />
  );

  return {
    dateRangePicker,
    dateRange,
  };
}
