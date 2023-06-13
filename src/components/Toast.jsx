import { useEffect } from "react";
import { useTranslations } from "next-intl";
import toast, { Toaster } from "react-hot-toast";
import { getLog } from "@/lib/localize";

export default function Toast({ message }) {
  const t = useTranslations("Common");

  useEffect(() => {
    // console.log(message);
    if (message !== undefined) {
      const { alarm, card, operation, mode, stall } = message;
      switch (operation.id) {
        case 1:
          toast.error(getLog(message, t));
          return;
        case 2:
          toast.success(getLog(message, t));
          return;
        case 3:
          toast(getLog(message, t), {
            icon: "🪪",
          });
        case 4:
          toast(getLog(message, t), {
            icon: "🔧",
          });
        case 5:
          toast(getLog(message, t), {
            icon: "🚗",
          });
          return;
        case 6:
          toast(getLog(message, t), {
            icon: "🚗",
          });
          return;
        case 7:
          toast(getLog(message, t), {
            icon: "🚗",
          });
          return;
        case 8:
          toast(getLog(message, t), {
            icon: "🚗",
          });
          return;
        case 9:
          toast(getLog(message, t), {
            icon: "🔖",
          });
          return;
        case 10:
          toast(getLog(message, t), {
            icon: "👤",
          });
          return;
        case 11:
          toast(getLog(message, t), {
            icon: "👤",
          });
          return;
        default:
          toast(getLog(message, t), {
            icon: "💀",
          });
      }
    }
  }, [message, t]);

  return (
    <Toaster
      toastOptions={{
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
