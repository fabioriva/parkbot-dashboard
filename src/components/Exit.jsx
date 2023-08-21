import { Fragment, useState } from "react";
import { useTranslations } from "next-intl";
import { Button, Flex, Text, NumberInput } from "@tremor/react";
import Dialog from "@/components/Dialog";
import fetch, { actionResponse } from "@/lib/fetch";

export default function Operation({ action, aps, disabled, token }) {
  const t = useTranslations("Dialog");

  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState({ status: false, message: "" });
  const [value, setValue] = useState(1);

  const handleConfirm = async () => {
    console.log(action);
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${aps}/operation/exit`;
    const json = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ card: value, writeArea: action.writeArea }),
    });
    actionResponse(json);
    setIsOpen(false);
  };

  const handleOnValueChange = (value) => {
    const n = parseInt(value);
    n < action.min || n > action.max
      ? setError({ status: true, message: t("Operation.errorText") })
      : setError({ status: false, message: "" });
    setValue(value);
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
        title={t("Operation.dialogTitle", { operation: t(action.key) })}
      >
        <div className="mt-3">
          <Text>
            {t("Operation.dialogText", { min: action.min, max: action.max })}
          </Text>
        </div>
        <NumberInput
          className="mt-3"
          placeholder={t("Operation.dialogTextInput", {
            min: action.min,
            max: action.max,
          })}
          error={error.status}
          errorMessage={error.message}
          min={action.min}
          max={action.max}
          value={value}
          onValueChange={handleOnValueChange}
        />
        <Flex justifyContent="end" className="space-x-3 mt-6">
          <Button variant="secondary" onClick={() => setIsOpen(false)}>
            {t("cancel")}
          </Button>
          <Button
            variant="primary"
            onClick={handleConfirm}
            disabled={error.status}
          >
            {t("confirm")}
          </Button>
        </Flex>
      </Dialog>
    </Fragment>
  );
}
