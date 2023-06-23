"use client";

import { Fragment, useEffect, useState } from "react";
import { TrashIcon, UserIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  Flex,
  Icon,
  List,
  ListItem,
  Text,
  TextInput,
  Title,
  Bold,
  Button,
} from "@tremor/react";
import Confirm from "@/components/ConfirmDialog";
import fetcher from "@/lib/fetch";
import useSWR from "swr";

export default function MailingList({ aps, json, token, user }) {
  // console.log(json, user);
  const t = (t) => t;
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState(json);
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${aps}/dashboard`;
  const { data } = useSWR(url, fetcher, {
    fallbackData: notifications,
    refreshInterval: 1000,
  });
  useEffect(() => setNotifications(data), [data]);

  const handleCancel = () => {
    setIsOpen(false);
    // setQueueItem({ card: 0, index: 0 });
  };

  const handleConfirm = async () => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${aps}/mailingList/remove`;
    console.log(url);
    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     Authorization: "Bearer " + token,
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ card: queueItem.card, index: queueItem.index }),
    // });
    // console.log(res);
    setIsOpen(false);
  };

  const handleOpen = (item, index) => {
    console.log(item, index);
    setIsOpen(true);
    // setQueueItem({ card, index });
  };

  return (
    <Card>
      <Flex>
        <div>
          <Title>{t("title")}</Title>
          <Text className="hidden sm:block truncate">
            Recipients count: 1 (Max 3)
            {/* {t("subtitle", {
              from: history.dateFrom,
              to: history.dateTo,
              count: history.count,
            })} */}
          </Text>
        </div>
        <Flex justifyContent="end" className="space-x-3">
          <TextInput className="max-w-xs" placeholder="Name" type="text" />
          <TextInput
            className="max-w-xs"
            placeholder="e-mail address"
            type="email"
          />
          <Button icon={UserPlusIcon} variant="light">
            Add recipient
          </Button>
        </Flex>
      </Flex>
      <List className="mt-3">
        {notifications.mailingList.map((item, key) => (
          <ListItem key={key}>
            <Flex>
              <Flex justifyContent="start" className="truncate space-x-4">
                <Icon
                  size="md"
                  variant="light"
                  icon={UserIcon}
                  // color={icons.find((ico) => ico.id === item.operation.id)?.color}
                />
                <div>
                  <Text className="truncate">
                    <Bold>{item.name}</Bold>
                  </Text>
                  <div className="truncate text-slate-50">{item.email}</div>
                </div>
              </Flex>
              <Button
                icon={TrashIcon}
                variant="light"
                onClick={() => handleOpen(item, key)}
              >
                Delete
              </Button>
            </Flex>
          </ListItem>
        ))}
      </List>
      <Confirm
        handleCancel={handleCancel}
        handleConfirm={handleConfirm}
        isOpen={isOpen}
        title="MY title"
      >
        <Text>Are you sure?</Text>
      </Confirm>
    </Card>
  );
}
