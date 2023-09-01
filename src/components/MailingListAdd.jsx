import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  EnvelopeIcon,
  UserIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { Flex, TextInput, Button } from "@tremor/react";

const initialState = {
  error: false,
  errorMessage: "",
  isValid: false,
  value: "",
};

export default function MailingList({ aps, disabled, token }) {
  const t = useTranslations("MailingList");

  const [mail, setMail] = useState(initialState);
  const [name, setName] = useState(initialState);

  const handleAddItem = async () => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${aps}/mailingList/add`;
    const res = await fetch(url, {
      method: "POST",
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: mail.value, name: name.value }),
    });
    setMail(initialState);
    setName(initialState);
  };

  const handleMail = (e) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    pattern.test(e.target.value)
      ? setMail({
          ...mail,
          error: false,
          errorMessage: "",
          isValid: true,
          value: e.target.value,
        })
      : setMail({
          ...mail,
          error: true,
          errorMessage: t("mailError"),
          isValid: false,
          value: e.target.value,
        });
  };

  const handleName = (e) => {
    e.target.value.length > 0
      ? setName({
          ...name,
          error: false,
          errorMessage: "",
          isValid: true,
          value: e.target.value,
        })
      : setName({
          ...name,
          error: true,
          errorMessage: t("nameError"),
          isValid: false,
          value: e.target.value,
        });
  };

  return (
    <>
      <TextInput
        className="max-w-sm"
        placeholder={t("namePlaceholder")}
        icon={UserIcon}
        type="text"
        error={name.error}
        errorMessage={name.errorMessage}
        value={name.value}
        onChange={handleName}
      />
      <TextInput
        className="max-w-sm"
        placeholder={t("mailPlaceholder")}
        icon={EnvelopeIcon}
        type="email"
        error={mail.error}
        errorMessage={mail.errorMessage}
        value={mail.value}
        onChange={handleMail}
      />
      <Button
        icon={UserPlusIcon}
        onClick={handleAddItem}
        disabled={disabled || !mail.isValid || !name.isValid}
      >
        {t("add")}
      </Button>
    </>
  );
}
