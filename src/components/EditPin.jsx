import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Button, Text, TextInput } from "@tremor/react";
import Dialog from "@/components/Dialog";

export default function Pin({ handleConfirm, isOpen, setIsOpen, tag }) {
  const t = useTranslations("Tags");

  const [error, setError] = useState({ status: false, message: "" });
  const [value, setValue] = useState(tag.code);

  useEffect(() => setValue(tag.code), [tag.code]);

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

  return (
    <Dialog isOpen={isOpen} title={t("editPinTitle", { nr: tag.nr })}>
      <div className="mt-3">
        <Text>{t("editPinText", { nr: tag.nr })}</Text>
      </div>
      <TextInput
        className="mt-3"
        placeholder={t("editPinTextInput", {
          nr: tag.nr,
        })}
        error={error.status}
        errorMessage={error.message}
        maxLength="3"
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
          onClick={() => handleConfirm({ ...tag, code: value })}
          disabled={error.status}
        >
          {t("dialogConfirm")}
        </Button>
      </div>
    </Dialog>
  );
}
