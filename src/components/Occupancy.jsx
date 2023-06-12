import { useTranslations } from "next-intl";
import {
  DonutChart,
  Flex,
  Text,
  Title,
  Legend,
  List,
  ListItem,
  Icon,
  TabList,
  Tab,
  TabGroup,
  TabPanels,
  TabPanel,
} from "@tremor/react";
import {
  ChartPieIcon,
  ListBulletIcon,
  StarIcon,
  LockClosedIcon,
  TruckIcon,
} from "@heroicons/react/24/solid";
import React from "react";

export default function Occupancy({ occupancy }) {
  // console.log(occupancy);
  const t = useTranslations("Occupancy");

  const [selectedView, setSelectedView] = React.useState("chart");
  const values = occupancy.map((item) => item.value);
  const total = values.reduce((partialSum, a) => partialSum + a, 0);

  const colors = ["red", "emerald", "violet"];
  const icons = [TruckIcon, StarIcon, LockClosedIcon];
  const texts = [t("busy"), t("free"), t("lock")];
  const categories = [
    {
      id: "busy",
      icon: icons[0],
      color: colors[0],
      text: texts[0],
    },
    {
      id: "free",
      icon: icons[1],
      color: colors[1],
      text: texts[1],
    },
    {
      id: "lock",
      icon: icons[2],
      color: colors[2],
      text: texts[2],
    },
  ];

  return (
    <TabGroup>
      <Flex className="space-x-8" justifyContent="between" alignItems="center">
        <div>
          <Title>{t("title")}</Title>
          <Text>{t("subtitle", { total })}</Text>
        </div>
        <TabList variant="solid">
          <Tab icon={ChartPieIcon} />
          <Tab icon={ListBulletIcon} />
        </TabList>
      </Flex>

      <TabPanels>
        <TabPanel>
          <div className="mt-10">
            <Legend categories={texts} colors={colors} className="mt-3" />
            <DonutChart
              className="mt-6"
              data={occupancy}
              category="value"
              index="id"
              colors={colors}
              label={total}
              showLabel
              showAnimation
              // variant="Pie"
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="mt-10">
            <List className="mt-6">
              {occupancy.map((item, key) => (
                <ListItem key={key}>
                  <Flex justifyContent="start" className="truncate space-x-4">
                    <Icon
                      variant="light"
                      icon={categories.find((ico) => ico.id === item.id)?.icon}
                      color={
                        categories.find((ico) => ico.id === item.id)?.color
                      }
                      size="md"
                    />
                    <Text className="capitalize">
                      {categories.find((ico) => ico.id === item.id)?.text}
                    </Text>
                  </Flex>
                  <Text>{item.value}</Text>
                </ListItem>
              ))}
            </List>
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
}
