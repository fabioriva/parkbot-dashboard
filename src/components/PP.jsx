import { Fragment, useState } from "react";
import { useTranslations } from "next-intl";
import { Button, Flex, Text, NumberInput } from "@tremor/react";
import Dialog from "@/components/Dialog";
import Tooltip from "@/components/Tooltip";
import fetch, { actionResponse } from "@/lib/fetch";

const Confirm = ({ aps, device, isOpen, setIsOpen, token, value }) => {
  const t = useTranslations("Dialog");
  const handleConfirm = async () => {
    // console.log("Confirm", value);
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
    <Dialog isOpen={isOpen} title={t("PP.confirmDialogTitle", { device })}>
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

export default function Operation({ action, aps, device, disabled, token }) {
  const t = useTranslations("Dialog");
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState({ status: false, message: "" });
  const [dest, setDest] = useState(0);
  // Confirm dialog
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [value, setValue] = useState({ device: "", key: "", value: "" });

  const handleConfirm = async (item) => {
    console.log(item);
    if (item.key === "B") {
      setValue({ device: action.device, key: item.key, value: item.value });
    } else {
      setValue({ device: action.device, key: item.key, value: dest });
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
      <Button onClick={handleOpen} disabled={disabled || !action.enable.status}>
        {t(action.key)}
      </Button>
      <Dialog
        isOpen={isOpen}
        title={t("PP.dialogTitle", { operation: t(action.key), device })}
      >
        {action.buttons.some((b) => b.key === "A" || b.key === "B") && (
          <div className="grid grid-cols-8 gap-1 mt-6">
            {action.buttons.map((item, key) => {
              if (item.key === "A" || item.key === "B")
                return (
                  <Tooltip tooltip={item.tooltip} key={key}>
                    <Button
                      variant="primary"
                      onClick={() => handleConfirm(item)}
                    >
                      {item.value}+{item.key}
                    </Button>
                  </Tooltip>
                );
            })}
          </div>
        )}
        {action.buttons.some((b) => b.key !== "A" && b.key !== "B") && (
          <div className="mt-6">
            {/* <Text className="mt-6">{t("PP.dialogText", { min: action.min, max: action.max })}</Text> */}
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
                    <Tooltip tooltip={item.tooltip} key={key}>
                      <Button
                        variant="primary"
                        onClick={() => handleConfirm(item)}
                        disabled={
                          !(dest > 0 && dest <= action.max) || error.status
                        }
                      >
                        DESTINATION + {item.key}
                      </Button>
                    </Tooltip>
                  );
              })}
            </div>
          </div>
        )}
        <Flex justifyContent="end" className="space-x-3 mt-6">
          <Button variant="secondary" onClick={() => setIsOpen(false)}>
            {t("cancel")}
          </Button>
        </Flex>
      </Dialog>
      <Confirm
        aps={aps}
        device={device}
        isOpen={isConfirmOpen}
        setIsOpen={setIsConfirmOpen}
        token={token}
        value={value}
      />
    </Fragment>
  );
}
