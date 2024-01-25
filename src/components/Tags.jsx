"use client";

import { Fragment, useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useFuzzySearch } from "@/hooks/useFuzzySearch";
import { useData } from "@/hooks/useWebSocket";
import { Card, Metric, Text, Icon } from "@tremor/react";
import {
  BoltIcon,
  BoltSlashIcon,
  PencilSquareIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Confirm from "@/components/ConfirmDialog";
import Pin from "@/components/EditPin";
import fetch, { actionResponse } from "@/lib/fetch";

function Tag({ item, handlePin, handleType, handleDismiss }) {
  const t = useTranslations("Tags");
  const color =
    Number(item.uid) === 0 ? "slate" : item.status === 0 ? "sky" : "violet";

  return (
    <Card decoration="left" decorationColor={color}>
      <div className="flex items-center space-x-1.5">
        <Text className="grow">
          RFID Tag{" "}
          {item.uid !== undefined && Number(item.uid) === 0 ? (
            <span>{t("notIssued")}</span>
          ) : (
            <span>
              UID <span className="font-bold">{item.uid}</span>
            </span>
          )}
        </Text>
        <Icon
          className="cursor-pointer"
          color={color}
          icon={PencilSquareIcon}
          onClick={() => handlePin(item)}
          tooltip={t("editPinTooltip")}
          variant="solid"
        />
        {item.type !== undefined && (
          <Icon
            className="cursor-pointer"
            color={color}
            icon={item.type === 0 ? BoltSlashIcon : BoltIcon}
            onClick={() => handleType(item)}
            tooltip={t("editTypeTooltip")}
            variant="solid"
          />
        )}
        {item.uid !== undefined && (
          <Icon
            className="cursor-pointer"
            color={color}
            icon={XMarkIcon}
            onClick={() => handleDismiss(item)}
            tooltip={t("dismissTooltip")}
            variant="solid"
          />
        )}
      </div>
      <div className="flex items-baseline space-x-3">
        <Metric>{t("card", { nr: item.nr })}</Metric>
        <Text>
          PIN <span className="font-bold">{item.code}</span>
        </Text>
      </div>
      <Text className="mt-3">
        {item.status === 0
          ? t("valid", { from: item.from, to: item.to })
          : t("stall", { nr: item.status })}
      </Text>
    </Card>
  );
}

export default function Tags({ aps, json, token, user }) {
  const t = useTranslations("Tags");
  const [cards, setCards] = useState(json);

  const url = `${process.env.NEXT_PUBLIC_WEBSOCK_URL}/${aps}/cards`;
  const { data, loading } = useData(url, {
    initialData: cards,
  });
  useEffect(() => setCards(data), [data]);

  const { fuzzySearchInput, results } = useFuzzySearch(
    cards,
    {
      includeScore: true,
      keys: ["code", "nr", "type", "uid"], // Search array in `code` and ...
    },
    t("search")
  );

  const [tag, setTag] = useState({});

  const [isOpenDismiss, setIsOpenDismiss] = useState(false);
  const [isOpenPin, setIsOpenPin] = useState(false);

  const handleConfirm = async (data) => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${aps}/card/edit`;
    const json = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ card: data.nr, code: data.code }),
    });
    actionResponse(json);
    setIsOpenDismiss(false);
    setIsOpenPin(false);
  };

  const handleDismiss = (tag) => {
    setTag(tag);
    if (user.rights.some((right) => right === "edit-card")) {
      setIsOpenDismiss(true);
    }
  };

  const handlePin = (tag) => {
    setTag(tag);
    if (user.rights.some((right) => right === "edit-card")) {
      setIsOpenPin(true);
    }
  };

  const handleType = (tag) => console.log(tag);

  return (
    <Fragment>
      {fuzzySearchInput}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
        {results.length === 0
          ? cards.map((item, key) => (
              <Tag
                item={item}
                handlePin={handlePin}
                handleType={handleType}
                handleDismiss={handleDismiss}
                key={key}
              />
            ))
          : results.map(({ item }, key) => (
              <Tag
                item={item}
                handlePin={handlePin}
                handleType={handleType}
                handleDismiss={handleDismiss}
                key={key}
              />
            ))}
      </div>
      <Confirm
        handleCancel={() => setIsOpenDismiss(false)}
        handleConfirm={() => handleConfirm({ ...tag, code: -1 })} // write -1 to clear tag UID
        isOpen={isOpenDismiss}
        title={t("dismissTitle", { nr: tag.nr })}
      >
        <Text>{t("dismissText", { nr: tag.nr })}</Text>
      </Confirm>
      <Pin
        handleConfirm={handleConfirm}
        isOpen={isOpenPin}
        setIsOpen={setIsOpenPin}
        tag={tag}
      />
    </Fragment>
  );
}
