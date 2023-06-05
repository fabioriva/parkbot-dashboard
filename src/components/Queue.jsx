// import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowUpIcon, UserIcon, TrashIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Bold,
  Card,
  Flex,
  Icon,
  List,
  ListItem,
  Subtitle,
  Title,
  Text,
} from "@tremor/react";
import Dialog from "@/components/Dialog";
import Exit from "@/components/Exit";

export default function Queue({ aps, data, token, user }) {
  // console.log(data);
  const [isOpen, setIsOpen] = useState(false);
  const [queueItem, setQueueItem] = useState({ card: 0, index: 0 });

  const handleCancel = () => {
    setIsOpen(false);
    setQueueItem({ card: 0, index: 0 });
  };

  const handleConfirm = async () => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${aps}/system/queue/delete`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ card: queueItem.card, index: queueItem.index }),
    });
    console.log(res);
    setIsOpen(false);
  };

  const handleOpen = (card, index) => {
    setIsOpen(true);
    setQueueItem({ card, index });
  };

  const t = useTranslations("Queue");

  const queue = data.queueList.filter((item) => item.card !== 0);

  return (
    <Card className="max-w-sm self-start">
      <Title>{t("title")}</Title>
      <Subtitle>{t("subtitle", { numOp: queue.length })}</Subtitle>
      <List className="mt-3">
        {queue.map((item, key) => (
          <ListItem key={key}>
            <Flex justifyContent="start" className="truncate space-x-4">
              <Icon
                variant="light"
                icon={item.id === 1 ? ArrowUpIcon : UserIcon}
                size="md"
                // color={item.id === 1 ? "red" : "yellow"}
              />
              <div className="truncate">
                <Text className="truncate">
                  <Bold>{t("itemTextOne", { id: item.id })}</Bold>
                </Text>
                <Text className="truncate">
                  {t("itemTextTwo", { card: item.card, stall: item.stall })}
                </Text>
              </div>
            </Flex>
            <Icon
              className="hover:cursor-pointer"
              icon={TrashIcon}
              onClick={() => handleOpen(item.card, key)}
            />
          </ListItem>
        ))}
      </List>
      <Dialog isOpen={isOpen} title={t("Delete.dialogTitle")}>
        <div className="mt-2">
          <Text>{t("Delete.dialogText", { card: queueItem.card })}</Text>
        </div>
        <Flex justifyContent="end" className="space-x-3 mt-2">
          <Button
            // size="xs"
            variant="secondary"
            onClick={handleCancel}
          >
            {t("Delete.dialogCancel")}
          </Button>
          <Button
            // size="xs"
            variant="primary"
            onClick={handleConfirm}
          >
            {t("Delete.dialogConfirm")}
          </Button>
        </Flex>
      </Dialog>
      <Exit aps={aps} action={data.exitButton} token={token} user={user} />
    </Card>
  );
}
