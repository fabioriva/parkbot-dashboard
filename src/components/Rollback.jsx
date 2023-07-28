import { Fragment, useState } from "react";
import { useTranslations } from "next-intl";
import { Button, Text } from "@tremor/react";
import Confirm from "@/components/ConfirmDialog";

export default function RollbackDialog({ action, aps, disabled, token }) {
  const t = useTranslations("Dialog");

  const [isOpen, setIsOpen] = useState(false);

  const handleCancel = () => setIsOpen(false);

  const handleConfirm = async () => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${aps}/operation/rollback`;
    const FALSE = Buffer.alloc(1, 0, "hex");
    const TRUE = Buffer.alloc(1, 1, "hex");
    const buffer = Buffer.alloc(1, TRUE, "hex").toJSON();
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ buffer, writeArea: action.writeArea }),
    });
    console.log(res);
    setIsOpen(false);
  };

  return (
    <Fragment>
      <Button
        className="mt-3 min-w-full"
        onClick={() => setIsOpen(true)}
        disabled={disabled || !action.enable.status}
      >
        {t(action.key)}
      </Button>
      <Confirm
        handleCancel={handleCancel}
        handleConfirm={handleConfirm}
        isOpen={isOpen}
        title={t("Rollback.dialogTitle")}
      >
        <Text>{t("Rollback.dialogText")}</Text>
      </Confirm>
    </Fragment>
  );
}
