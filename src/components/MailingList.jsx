"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { TrashIcon, UserIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  Flex,
  Icon,
  List,
  ListItem,
  Text,
  Title,
  Bold,
  Button,
} from "@tremor/react";
import Confirm from "@/components/ConfirmDialog";
import AddItem from "@/components/MailingListAdd";
import fetcher from "@/lib/fetch";
import useSWR from "swr";

const LIST_MAX = 3;

export default function MailingList({ aps, json, token, user }) {
  const t = useTranslations("MailingList");

  const [isOpen, setIsOpen] = useState(false);
  const [mailingList, setMailingList] = useState(json);
  const [recipient, setRecipient] = useState({});
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${aps}/mailingList`;
  const { data } = useSWR(url, fetcher, {
    fallbackData: mailingList,
    refreshInterval: 1000,
  });
  useEffect(() => setMailingList(data), [data]);

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleRemoveItem = async () => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${aps}/mailingList/remove`;
    // console.log(url);
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...recipient }),
    });
    console.log(res);
    setIsOpen(false);
  };

  const handleOpen = (item) => {
    setIsOpen(true);
    setRecipient(item);
  };

  return (
    <Card className="p-3 sm:p-6">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="w-full">
          <Title>{t("title")}</Title>
          <Text className="truncate">
            {t("count", { nr: mailingList.length, max: LIST_MAX })}
          </Text>
        </div>
        <AddItem
          aps={aps}
          disabled={mailingList.length >= LIST_MAX}
          token={token}
        />
      </div>
      <List className="mt-6">
        {mailingList.length > 0 &&
          mailingList.map((item, key) => (
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
                    <div className="truncate dark:text-slate-50">
                      {item.email}
                    </div>
                  </div>
                </Flex>
                <Button
                  icon={TrashIcon}
                  variant="light"
                  onClick={() => handleOpen(item)}
                >
                  {t("delete")}
                </Button>
              </Flex>
            </ListItem>
          ))}
      </List>
      <Confirm
        handleCancel={handleCancel}
        handleConfirm={handleRemoveItem}
        isOpen={isOpen}
        title={t("Delete.title")}
      >
        <Text>{t("Delete.text")}</Text>
      </Confirm>
    </Card>
  );
}
