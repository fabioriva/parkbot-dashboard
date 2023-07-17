import { Fragment, useState } from "react";
import { useTranslations } from "next-intl";
import { Button, Flex, Text, TextInput } from "@tremor/react";
import Dialog from "@/components/Dialog";
import fetch, { actionResponse } from "@/lib/fetch";

export default function Operation({ action, aps, disabled, token }) {
  const t = useTranslations("Dialog");

  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState({ status: false, message: "" });
  const [value, setValue] = useState(1);

  const handleConfirm = async () => {
    console.log(action);
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${aps}/operation/entry`;
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

  const handleOnChange = (e) => {
    const n = parseInt(e.target.value);
    n < action.min || n > action.max
      ? setError({ status: true, message: t("errorText") })
      : setError({ status: false, message: "" });
    setValue(e.target.value);
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
        <TextInput
          className="mt-3"
          placeholder={t("Operation.dialogTextInput", {
            min: action.min,
            max: action.max,
          })}
          type="number"
          error={error.status}
          errorMessage={error.message}
          min={action.min}
          max={action.max}
          value={value}
          onChange={handleOnChange}
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
