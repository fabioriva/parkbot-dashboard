import { BarChart } from "@tremor/react";

export default function OperationsChart({
  data,
  layout = "horizontal",
  stacked = false,
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
