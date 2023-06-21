import { useTranslations } from "next-intl";
import {
  ArrowPathIcon,
  BellAlertIcon,
  BellSlashIcon,
  BookmarkIcon,
  TagIcon,
  UserMinusIcon,
  UserPlusIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";
import { Bold, Flex, Icon, List, ListItem, Text } from "@tremor/react";
import { getLog } from "@/lib/localize";

const icons = [
  {
    id: 1,
    icon: BellAlertIcon,
    color: "red",
  },
  {
    id: 2,
    icon: BellSlashIcon,
    color: "emerald",
  },
  {
    id: 3,
    icon: WrenchScrewdriverIcon,
    color: "yellow",
  },
  {
    id: 4,
    icon: TagIcon,
    color: "indigo",
  },
  {
    id: 5,
    icon: UserPlusIcon,
    color: "sky",
  },
  {
    id: 6,
    icon: UserMinusIcon,
    color: "violet",
  },
  {
    id: 7,
    icon: ArrowPathIcon,
    color: "sky",
  },
  {
    id: 8,
    icon: ArrowPathIcon,
    color: "violet",
  },
  {
    id: 9,
    icon: BookmarkIcon,
    color: "amber",
  },
  {
    id: 10,
    icon: BookmarkIcon,
    color: "amber",
  },
  {
    id: 11,
    icon: BookmarkIcon,
    color: "amber",
  },
  {
    id: 12,
    icon: BookmarkIcon,
    color: "amber",
  },
  {
    id: 13,
    icon: BookmarkIcon,
    color: "amber",
  },
];

export default function HistoryList({ data }) {
  // console.log(data);
  const t = useTranslations("Log");

  return (
    <>
      {data.length > 0 ? (
        <List>
          {data.map((item, key) => (
            <ListItem key={key}>
              <Flex justifyContent="start" className="truncate space-x-4">
                <Icon
                  size="md"
                  variant="light"
                  icon={icons.find((ico) => ico.id === item.operation.id)?.icon}
                  color={
                    icons.find((ico) => ico.id === item.operation.id)?.color
                  }
                />
                <div className="truncate">
                  <Text className="truncate">
                    <Bold>
                      {item.device.key} - {t(item.mode.key)}
                    </Bold>
                  </Text>
                  <Text className="truncate">{getLog(item, t)}</Text>
                </div>
              </Flex>
              <Text className="text-right">
                {item.date.slice(0, 10)}
                <br />
                {item.date.slice(11, 19)}
              </Text>
            </ListItem>
          ))}
        </List>
      ) : (
        <Text className="p-10 text-center">No data</Text>
      )}
    </>
  );
}
