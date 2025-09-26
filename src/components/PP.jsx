import { Fragment, useState } from "react";
import { useTranslations } from "next-intl";
import { Button, Divider, Flex, Text, NumberInput } from "@tremor/react";
import Dialog from "@/components/Dialog";
import Tooltip from "@/components/Tooltip";
import fetch, { actionResponse } from "@/lib/fetch";

const Confirm = ({ aps, isOpen, setIsOpen, token, value }) => {
  const t = useTranslations("Dialog");
  const handleConfirm = async () => {
    console.log("Confirm", value);
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${aps}/operation/pp`;
    const json = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });
    actionResponse(json);
    setIsOpen(false);
  };
  return (
    <Dialog
      isOpen={isOpen}
      title="Confirm"
      // title={t("PP.dialogTitle", { operation: t(action.key) })}
    >
      <Text className="mt-6">
        Send request for step by step operation{" "}
        <span className="font-bold">
          {value.value} + {value.key}
        </span>{" "}
        ?
      </Text>
      <Flex justifyContent="end" className="space-x-3 mt-6">
        <Button variant="secondary" onClick={() => setIsOpen(false)}>
          {t("cancel")}
        </Button>
        <Button variant="primary" onClick={handleConfirm}>
          {t("confirm")}
        </Button>
      </Flex>
    </Dialog>
  );
};

export default function Operation({ action, aps, disabled, token }) {
  const t = useTranslations("Dialog");
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState({ status: false, message: "" });
  const [dest, setDest] = useState(1);
  // Confirm dialog
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [value, setValue] = useState({ key: "", value: "" });

  const handleConfirm = async (item) => {
    console.log(item);
    // setValue(item)
    if (item.key === "B") {
      setValue({ key: item.key, value: item.value });
    } else {
      setValue({ key: item.key, value: dest });
    }
    setIsOpen(false);
    setIsConfirmOpen(true);
  };

  const handleOnValueChange = (dest) => {
    const n = parseInt(dest);
    n < action.min || n > action.max
      ? setError({ status: true, message: t("PP.errorText") })
      : setError({ status: false, message: "" });
    setDest(dest);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <Fragment>
      <Button
        className="mt-3 min-w-full"
        onClick={handleOpen}
        disabled={disabled || !action.enable.status}
      >
        {t(action.key)}
      </Button>
      <Dialog
        isOpen={isOpen}
        title={t("PP.dialogTitle", { operation: t(action.key) })}
        onClose={() => console.log("close")}
      >
        <Divider />
        <div className="grid grid-cols-8 gap-1 mt-6">
          {action.buttons.map((item, key) => {
            if (item.key === "B")
              return (
                <Tooltip tooltip={item.tooltip}>
                  <Button variant="primary" onClick={() => handleConfirm(item)}>
                    {item.value}+{item.key}
                  </Button>
                </Tooltip>
              );
          })}
        </div>
        <Divider>operations</Divider>
        {/* <Text className="mt-6">
          {t("PP.dialogText", { min: action.min, max: action.max })}
        </Text> */}
        <NumberInput
          className="mt-3"
          placeholder={t("PP.dialogTextInput", {
            min: action.min,
            max: action.max,
          })}
          error={error.status}
          errorMessage={error.message}
          min={action.min}
          max={action.max}
          dest={dest}
          onValueChange={handleOnValueChange}
        />
        <div className="flex gap-3 mt-6">
          {action.buttons.map((item, key) => {
            if (item.key === "D" || item.key === "E" || item.key === "F")
              return (
                <Tooltip tooltip={item.tooltip}>
                  <Button
                    variant="primary"
                    onClick={() => handleConfirm(item)}
                    disabled={error.status}
                  >
                    DESTINATION + {item.key}
                  </Button>
                </Tooltip>
              );
          })}
        </div>
        <Flex justifyContent="end" className="space-x-3 mt-6">
          <Button variant="secondary" onClick={() => setIsOpen(false)}>
            {t("cancel")}
          </Button>
        </Flex>
      </Dialog>
      <Confirm
        aps={aps}
        isOpen={isConfirmOpen}
        setIsOpen={setIsConfirmOpen}
        token={token}
        value={value}
      />
    </Fragment>
  );
}
