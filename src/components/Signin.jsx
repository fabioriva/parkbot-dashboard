"use client";

import { useState } from "react";
// import { useRouter } from "next-intl/client";
import { useRouter } from "@/navigation";
import { useTranslations } from "next-intl";

export default function Signin({ locales }) {
  const router = useRouter();
  const [error, setError] = useState(null);
  const { forgot, message, password, signin, username } = locales;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch("/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: event.target.username.value,
          password: event.target.password.value,
        }),
      });
      if (res.ok) {
        const { aps, locale } = await res.json();
        const url = aps !== undefined ? `/${aps}/dashboard` : "/";
        router.push(url);
      } else {
        throw new Error();
      }
    } catch (e) {
      setError(message);
    }
  };

  return (
    <form
      className="space-y-6"
      action="#"
      method="POST"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6">
          {username}
        </label>
        <div className="mt-2">
          <input
            id="username"
            name="username"
            type="email"
            autoComplete="email"
            required
            className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <span className="text-sm text-red-600">{error}</span>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6"
          >
            {password}
          </label>
          <div className="text-sm">
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              {forgot}
            </a>
          </div>
        </div>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <span className="text-sm text-red-600">{error}</span>
        </div>
      </div>

      <button
        type="submit"
        className="flex w-full justify-center rounded-md bg-indigo-600 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {signin}
      </button>
    </form>
  );
}
