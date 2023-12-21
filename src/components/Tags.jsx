"use client";

import { Fragment, useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import {
  MagnifyingGlassIcon,
  PencilSquareIcon,
  // TagIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import {
  Card,
  Metric,
  Text,
  Icon,
  Grid,
  Badge,
  TextInput,
  Button,
} from "@tremor/react";
import Dialog from "@/components/Dialog";
import { useData } from "@/hooks/useWebSocket";
import { useFuzzySearch } from "@/hooks/useFuzzySearch";
import fetch, { actionResponse } from "@/lib/fetch";

function Tag({ item }) {
  // console.log(item);
  const t = useTranslations("Tags");
  const color = item.status === 0 ? "sky" : "violet";
  const uid =
    item.uid !== "0" ? (
      <span className="font-bold">{item.uid}</span>
    ) : (
      <span>{t("notIssued")}</span>
    );

  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState({ status: false, message: "" });
  const [value, setValue] = useState(item.code);

  const handleConfirm = async (data) => {
    console.log(data, typeof data.code);
    // const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${aps}/card/edit`;
    // const json = await fetch(url, {
    //   method: "POST",
    //   // withCredentials: true,
    //   // credentials: "include",
    //   headers: {
    //     Authorization: "Bearer " + token,
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ card: data.status, stall: data.nr }),
    // });
    // actionResponse(json);
    setIsOpen(false);
  };

  const handleOnValueChange = (value) => {
    const regexp = /^[a-fA-F0-9]{3}$/; // new RegExp('^[a-fA-F0-9]{3}$')
    !regexp.test(value) || value.length !== 3
      ? setError({
          status: true,
          message: "Not valid pattern. 3 digits, [a-fA-F0-9]",
        })
      : setError({ status: false, message: "" });
    setValue(value);
  };

  const handleOpen = () => {
    // if (user.rights.some((right) => right === "edit-stall")) {
    setIsOpen(true);
    // }
  };

  return (
    <Card decoration="left" decorationColor={color}>
      <div className="flex space-x-1">
        <Text className="grow">
          RFID tag {item.uid !== undefined && <span>UID {uid}</span>}
        </Text>
        {item.uid !== undefined && (
          <Badge
            className="cursor-pointer"
            color={color}
            icon={XCircleIcon}
            onClick={() => console.log("Clear clicked")}
            tooltip="Click to clear"
          >
            Clear
          </Badge>
        )}
        <Badge
          className="cursor-pointer"
          color={color}
          icon={PencilSquareIcon}
          onClick={handleOpen}
          tooltip="Click to edit PIN"
        >
          PIN
        </Badge>
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
      <Dialog isOpen={isOpen} title={t("dialogTitle", { nr: item.nr })}>
        <div className="mt-3">
          <Text>{t("dialogText", { nr: item.nr })}</Text>
        </div>
        {/* <pre className="mt-3">Card: {JSON.stringify(item, null, 2)}</pre> */}
        <TextInput
          className="mt-3"
          placeholder={t("dialogTextInput", {
            nr: item.nr,
          })}
          error={error.status}
          errorMessage={error.message}
          maxlength="3"
          value={value}
          onValueChange={handleOnValueChange}
        />
        <div className="flex flex-col sm:flex-row sm:space-x-3">
          <Button
            className="flex-1 mt-3"
            variant="secondary"
            onClick={() => setIsOpen(false)}
          >
            {t("dialogCancel")}
          </Button>
          <Button
            className="flex-1 mt-3"
            onClick={() => handleConfirm({ ...item, code: value })}
            disabled={error.status}
          >
            {t("dialogEdit")}
          </Button>
        </div>
      </Dialog>
    </Card>
  );

  // return (
  //   <Card
  //     decoration="left"
  //     decorationColor={item.status === 0 ? "indigo" : "amber"}
  //   >
  //     <Flex justifyContent="start" className="space-x-4">
  //       <Icon
  //         icon={TagIcon}
  //         variant="light"
  //         size="xl"
  //         color={item.status === 0 ? "indigo" : "amber"}
  //       />
  //       <div className="truncate">
  //         <Text>
  //           <Bold>{t("card", { nr: item.nr })}</Bold>
  //         </Text>
  //         <Flex
  //           justifyContent="start"
  //           alignItems="baseline"
  //           className="truncate space-x-3"
  //         >
  //           <Metric>{item.code}</Metric>
  //           <Text className="truncate">
  //             {item.status === 0
  //               ? t("valid", { from: item.from, to: item.to })
  //               : t("stall", { nr: item.status })}
  //           </Text>
  //         </Flex>
  //       </div>
  //     </Flex>
  //   </Card>
  // );
}

export default function Tags({ aps, json }) {
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
      keys: ["code", "nr", "uid"], // Search array in `code` and in `nr` or `uid`
    },
    t("search")
  );

  return (
    <Fragment>
      {fuzzySearchInput}
      <Grid numItemsSm={2} numItemsMd={3} numItemsLg={4} className="gap-6 mt-6">
        {results.length === 0
          ? cards.map((item, key) => <Tag item={item} key={key} />)
          : results.map(({ item }, key) => <Tag item={item} key={key} />)}
      </Grid>
    </Fragment>
  );
}
