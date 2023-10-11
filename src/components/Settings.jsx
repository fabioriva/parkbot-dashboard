"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Button, Text, TextInput, Title } from "@tremor/react";
import { KeyIcon, UserIcon } from "@heroicons/react/20/solid";
import fetch, { actionResponse } from "@/lib/fetch";

const initialState = {
  error: false,
  errorMessage: "",
  value: "",
};

const pattern =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-,;.:]).{8,}$/;

export default function Settings({ aps, token, user }) {
  const t = useTranslations("Settings");

  const [currentPassword, setCurrentPassword] = useState(initialState);
  const [newPassword, setNewPassword] = useState(initialState);
  const [confirmPassword, setConfirmPassword] = useState(initialState);

  const handleCurrentPassword = (e) => {
    setCurrentPassword({
      ...currentPassword,
      error: false,
      errorMessage: "",
      value: e.target.value,
    });
  };

  const handleNewPassword = (e) => {
    pattern.test(e.target.value)
      ? setNewPassword({
          ...newPassword,
          error: false,
          errorMessage: "",
          value: e.target.value,
        })
      : setNewPassword({
          ...newPassword,
          error: true,
          errorMessage: t("errorStrength"),
          value: e.target.value,
        });
  };

  const handleConfirmPassword = (e) => {
    pattern.test(e.target.value)
      ? setConfirmPassword({
          ...confirmPassword,
          error: false,
          errorMessage: "",
          value: e.target.value,
        })
      : setConfirmPassword({
          ...confirmPassword,
          error: true,
          errorMessage: t("errorStrength"),
          value: e.target.value,
        });
  };

  const handleChangePassowrd = async () => {
    if (currentPassword.value === "") {
      setCurrentPassword({
        ...currentPassword,
        error: true,
        errorMessage: t("errorRequired"),
      });
      return;
    }
    if (newPassword.value === "") {
      setNewPassword({
        ...newPassword,
        error: true,
        errorMessage: t("errorRequired"),
      });
      return;
    }
    if (confirmPassword.value === "") {
      setConfirmPassword({
        ...confirmPassword,
        error: true,
        errorMessage: t("errorRequired"),
      });
      return;
    }
    if (newPassword.value !== confirmPassword.value) {
      setConfirmPassword({
        ...confirmPassword,
        error: true,
        errorMessage: t("errorMatch"),
      });
      return;
    }
    const res = await global.fetch("/api/password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user.username,
        current: currentPassword.value,
        password: newPassword.value,
      }),
    });
    const json = await res.json();
    actionResponse({
      message: res.ok
        ? t("success", { username: user.username })
        : json.message,
      severity: res.ok ? "success" : "warning",
    });
    resetAll();
  };

  const resetAll = () => {
    setCurrentPassword(initialState);
    setNewPassword(initialState);
    setConfirmPassword(initialState);
  };

  return (
    <div className="max-w-sm mt-3">
      <Text className="text-black dark:text-white">
        {t("text1")} <span className="text-blue-500">{user.username}</span>
      </Text>
      <Text className="mt-3">
        {t("text2")}: <span>{t("text3")}</span>
      </Text>
      <TextInput
        className="mt-3"
        icon={KeyIcon}
        type="password"
        placeholder={t("placeholderCurrent")}
        error={currentPassword.error}
        errorMessage={currentPassword.errorMessage}
        value={currentPassword.value}
        onChange={handleCurrentPassword}
      />
      <TextInput
        className="mt-3"
        icon={KeyIcon}
        type="password"
        placeholder={t("placeholderNew")}
        error={newPassword.error}
        errorMessage={newPassword.errorMessage}
        value={newPassword.value}
        onChange={handleNewPassword}
      />
      <TextInput
        className="mt-3"
        icon={KeyIcon}
        type="password"
        placeholder={t("placeholderConfirm")}
        error={confirmPassword.error}
        errorMessage={confirmPassword.errorMessage}
        value={confirmPassword.value}
        onChange={handleConfirmPassword}
      />
      <Button
        className="mt-3 w-full"
        disabled={
          currentPassword.error || newPassword.error || confirmPassword.error
        }
        onClick={handleChangePassowrd}
      >
        {t("buttonChange")}
      </Button>
    </div>
  );
}
