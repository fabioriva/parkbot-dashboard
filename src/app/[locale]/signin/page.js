import Image from "next/image";
import { useTranslations } from "next-intl";
import Form from "@/components/Signin";

export default function Signin({ params }) {
  const t = useTranslations("Signin");

  return (
    <div className="h-screen flex flex-1 flex-col justify-center px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          className="mx-auto h-[64px] w-auto"
          src="/bot.svg"
          alt="Sotefin"
          height={64}
          width={64}
        />
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight">
          {t("title")}
        </h2>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form
          locales={{
            forgot: t("forgot"),
            message: t("message"),
            password: t("password"),
            signin: t("signin"),
            username: t("username"),
          }}
        />
        <p className="text-center text-sm text-gray-500 mt-10">{t("agree")}</p>
        {/* <p className="text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p> */}
      </div>
    </div>
  );
}
