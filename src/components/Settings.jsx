"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Button, Text, TextInput, Title } from "@tremor/react";
import { KeyIcon, UserIcon } from "@heroicons/react/20/solid";

const initialState = {
  error: false,
  errorMessage: "",
  // isValid: false,
  value: "",
};

// Minimum eight characters, at least one letter, one number and one special character:
const pattern =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

export default function Settings({ aps, token, user }) {
  const [currentPassword, setCurrentPassword] = useState(initialState);
  const [newPassword, setNewPassword] = useState(initialState);
  const [confirmPassword, setConfirmPassword] = useState(initialState);

  const handleCurrentPassword = (e) => {
    setCurrentPassword({
      ...currentPassword,
      error: false,
      errorMessage: "",
      // isValid: true,
      value: e.target.value,
    });
  };

  const handleNewPassword = (e) => {
    pattern.test(e.target.value)
      ? setNewPassword({
          ...newPassword,
          error: false,
          errorMessage: "",
          // isValid: true,
          value: e.target.value,
        })
      : setNewPassword({
          ...newPassword,
          error: true,
          errorMessage:
            "Min 8 characters, 1 letter, 1 number and 1 special character",
          // isValid: false,
          value: e.target.value,
        });
  };

  const handleConfirmPassword = (e) => {
    pattern.test(e.target.value)
      ? setConfirmPassword({
          ...confirmPassword,
          error: false,
          errorMessage: "",
          // isValid: true,
          value: e.target.value,
        })
      : setConfirmPassword({
          ...confirmPassword,
          error: true,
          errorMessage:
            "Min 8 characters, 1 letter, 1 number and 1 special character",
          // isValid: false,
          value: e.target.value,
        });
  };

  const handleChangePassowrd = async () => {
    console.log(currentPassword.value);
    console.log(newPassword.value);
    console.log(confirmPassword.value);
    if (currentPassword.value === "") {
      setCurrentPassword({
        ...currentPassword,
        error: true,
        errorMessage: "Insert password",
      });
      return;
    }
    if (newPassword.value === "") {
      setNewPassword({
        ...newPassword,
        error: true,
        errorMessage: "Insert password",
      });
      return;
    }
    if (confirmPassword.value === "") {
      setConfirmPassword({
        ...confirmPassword,
        error: true,
        errorMessage: "Insert password",
      });
      return;
    }
    // if (!pattern.test(newPassword)) {
    //   setNewPassword({
    //     ...newPassword,
    //     error: true,
    //     errorMessage:
    //       "Min 8 characters, 1 letter, 1 number and 1 special character",
    //     // isValid: false,
    //   });
    // }
    if (newPassword.value !== confirmPassword.value) {
      setConfirmPassword({
        ...confirmPassword,
        error: true,
        errorMessage: "Password doesn't match",
        // isValid: false,
      });
      return;
    }

    console.log("ALL GOOD");
    // const res = await global.fetch("/api/password", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     username: user.username,
    //     current: currentPassword.value,
    //     password: newPassword.value,
    //   }),
    // });
    // const json = await res.json();
    // console.log(json);
    resetAll();
  };

  const resetAll = () => {
    setCurrentPassword(initialState);
    setNewPassword(initialState);
    setConfirmPassword(initialState);
  };

  return (
    <div className="max-w-sm mt-3">
      <Text>
        Change password for user{" "}
        <span className="text-blue-500">{user.username}</span>
      </Text>
      <TextInput
        className="mt-3"
        icon={KeyIcon}
        type="password"
        placeholder="Current password"
        error={currentPassword.error}
        errorMessage={currentPassword.errorMessage}
        value={currentPassword.value}
        onChange={handleCurrentPassword}
      />
      <TextInput
        className="mt-3"
        icon={KeyIcon}
        // type="password"
        placeholder="New password"
        error={newPassword.error}
        errorMessage={newPassword.errorMessage}
        value={newPassword.value}
        onChange={handleNewPassword}
      />
      <TextInput
        className="mt-3"
        icon={KeyIcon}
        // type="password"
        placeholder="Confirm password"
        error={confirmPassword.error}
        errorMessage={confirmPassword.errorMessage}
        value={confirmPassword.value}
        onChange={handleConfirmPassword}
      />
      <Button
        className="mt-3 w-full"
        // disabled={
        //   currentPassword.error || newPassword.error || confirmPassword.error
        // }
        onClick={handleChangePassowrd}
      >
        Change password
      </Button>
    </div>
  );
}
