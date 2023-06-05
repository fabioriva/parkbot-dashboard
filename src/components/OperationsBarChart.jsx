import { BarChart } from "@tremor/react";

export default function Chart({ data, stacked }) {
  const categories = ["entries", "exits", "total"];
  const colors = ["sky", "violet", "fuchsia"];

  return (
    <BarChart
      data={data}
      index="name"
      categories={categories}
      colors={colors}
      stack={stacked}
    />
  );
}
