import { useTranslations } from "next-intl";
import { Button, Flex } from "@tremor/react";
import Dialog from "@/components/Dialog";

export default function Confirm({
  children,
  handleCancel,
  handleConfirm,
  isOpen,
  title,
}) {
  const t = useTranslations("Dialog");

  return (
    <Dialog isOpen={isOpen} title={title}>
      <div className="mt-3">{children}</div>
      <Flex justifyContent="end" className="space-x-3 mt-6">
        <Button
          // size="xs"
          variant="secondary"
          onClick={handleCancel}
        >
          {t("cancel")}
        </Button>
        <Button
          // size="xs"
          variant="primary"
          onClick={handleConfirm}
        >
          {t("confirm")}
        </Button>
      </Flex>
    </Dialog>
  );
}
