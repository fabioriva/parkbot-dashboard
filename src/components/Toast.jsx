import { useEffect } from "react";
import { useTranslations } from "next-intl";
import toast, { Toaster } from "react-hot-toast";
import { getLog } from "@/lib/localize";

export default function Toast({ message }) {
  const t = useTranslations("History.List");

  useEffect(() => {
    // console.log(message);
    if (message !== undefined) {
      const { operation } = message;
      const locale = <span>{getLog(message, t)}</span>;
      switch (operation.id) {
        case 1:
          toast.error(locale);
          return;
        case 2:
          toast.success(locale);
          return;
        case 3:
          toast(locale, {
            icon: "🔧",
          });
          return;
        case 4:
          toast(locale, {
            icon: "🪪",
          });
          return;
        case 5:
          toast(locale, {
            icon: "🚗",
          });
          return;
        case 6:
          toast(locale, {
            icon: "🚗",
          });
          return;
        case 7:
          toast(locale, {
            icon: "🚗",
          });
          return;
        case 8:
          toast(locale, {
            icon: "🚗",
          });
          return;
        case 9:
          toast(locale, {
            icon: "🔖",
          });
          return;
        case 10:
          toast(locale, {
            icon: "👤",
          });
          return;
        case 11:
          toast(locale, {
            icon: "👤",
          });
          return;
        case 12:
          toast(locale, {
            icon: "🪪",
          });
          return;
        default:
          toast(locale, {
            icon: "💀",
          });
      }
    }
  }, [message, t]);

  return (
    <Toaster
      toastOptions={{
        position: "bottom-left",
        style: {
          background: "black",
          borderRadius: "0.25rem" /* 4px */,
          color: "white",
        },
        success: {
          style: {
            background: "green",
          },
        },
        error: {
          style: {
            background: "red",
          },
        },
      }}
    />
  );
}
