"use client";

import { useEffect, useState } from "react";
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
  // console.log(json, user);
  const t = (t) => t;
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
        <AddItem
          aps={aps}
          disabled={mailingList.length >= LIST_MAX}
          token={token}
        />
      </Flex>
      <List className="mt-3">
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
                    <div className="truncate text-slate-50">{item.email}</div>
                  </div>
                </Flex>
                <Button
                  icon={TrashIcon}
                  variant="light"
                  onClick={() => handleOpen(item)}
                >
                  Delete
                </Button>
              </Flex>
            </ListItem>
          ))}
      </List>
      <Confirm
        handleCancel={handleCancel}
        handleConfirm={handleRemoveItem}
        isOpen={isOpen}
        title="MY title"
      >
        <Text>Are you sure?</Text>
      </Confirm>
    </Card>
  );
}
