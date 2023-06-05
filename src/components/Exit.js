import { Fragment, useState } from "react";
import { useTranslations } from "next-intl";
import { Button, Flex, Text, TextInput } from "@tremor/react";
import Dialog from "@/components/Dialog";

export default function Exit({ action, aps, user, token }) {
  const t = useTranslations("Exit");

  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState({ status: false, message: "" });
  const [value, setValue] = useState(1);

  const handleConfirm = async () => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${aps}/system/operation`;
    console.log(url, token);
    const res = await fetch(url, {
      method: "POST",
      // withCredentials: true,
      // credentials: "include",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ card: value, id: 0 }),
    });
    console.log(res);
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
        className="mt-6 min-w-full"
        onClick={handleOpen}
        disabled={
          !user.rights.some((right) => right === "exit") ||
          !action.enable.status
        }
      >
        {t("buttonExit")}
      </Button>
      <Dialog isOpen={isOpen} title={t("dialogTitle")}>
        <div className="mt-3">
          <Text>{t("dialogText", { min: action.min, max: action.max })}</Text>
        </div>
        <TextInput
          className="mt-3"
          placeholder={t("dialogTextInput", {
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
        <Flex justifyContent="end" className="space-x-1.5 mt-6">
          <Button variant="secondary" onClick={() => setIsOpen(false)}>
            {t("dialogCancel")}
          </Button>
          <Button
            variant="primary"
            onClick={handleConfirm}
            disabled={error.status}
          >
            {t("dialogConfirm")}
          </Button>
        </Flex>
      </Dialog>
    </Fragment>
  );
}
