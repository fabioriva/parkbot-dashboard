import { BarChart } from "@tremor/react";

export default function Chart({
  data,
  layout = "horizontal",
  stacked = "true",
}) {
  return (
    <BarChart
      data={data}
      index="name"
      categories={["entries", "exits", "total"]}
      colors={["sky", "violet", "fuchsia"]}
      layout={layout}
      stack={stacked}
    />
  );
}
