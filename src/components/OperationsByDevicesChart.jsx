import { Card, Title, Text, Legend, DonutChart } from "@tremor/react";

export default function Chart(props) {
  // console.log(props);
  const { data, query } = props.data;
  return (
    <Card className="p-3 sm:p-6 mt-3">
      <Title>{props.title}</Title>
      <Text>{query.date}</Text>
      <DonutChart
        className="mt-6"
        category={props.category}
        data={data}
        index="name"
        valueFormatter={(n) => Intl.NumberFormat("en-US").format(n)}
        showAnimation
      />
      <Legend className="mt-3" categories={data.map((d) => d.name)} />
    </Card>
  );
}
