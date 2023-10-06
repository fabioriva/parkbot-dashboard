import { Fragment } from "react";
import { useRouter } from "next-intl/client";
import { useTranslations } from "next-intl";
import { Menu, Transition } from "@headlessui/react";
import {
  ArrowLeftOnRectangleIcon,
  // HomeIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import { Icon } from "@tremor/react";
import pages from "@/constants/pages";

export default function MainMenu({ aps, user }) {
  const router = useRouter();
  const t = useTranslations("Layout.Header.Menu");
  const handleLogout = () => {
    window.localStorage.setItem("logout", Date.now());
    fetch("/api/signout", { method: "POST" }).then(() => router.refresh());
  };

  return (
    <Menu as="div" className="relative inline-block z-10 sm:hidden">
      <Menu.Button className="inline-flex w-full justify-center rounded-md px-2 py-2 hover:text-neutral-300 text-neutral-500 text-sm font-medium hover:bg-opacity-30">
        {/* {user.username} */}
        <UserCircleIcon className="ml-1.5 -mr-1 h-6 w-6" aria-hidden="true" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            {pages.map((item, key) => (
              <Menu.Item
                disabled={!user.roles.some((role) => role === item.role)}
                key={key}
              >
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? "bg-neutral-400 text-white"
                        : user.roles.some((role) => role === item.role)
                        ? "text-neutral-900"
                        : "text-neutral-200 cursor-default"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={() => router.push(`/${aps.ns}/${item.role}`)}
                    key={key}
                  >
                    {active ? (
                      <Icon
                        className="mr-2 p-0 text-neutral-100"
                        aria-hidden="true"
                        icon={item.icon}
                      />
                    ) : (
                      <Icon
                        className="mr-2 p-0 text-neutral-400"
                        aria-hidden="true"
                        icon={item.icon}
                      />
                    )}
                    {t(item.role)}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-neutral-500 text-white" : "text-neutral-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  onClick={handleLogout}
                >
                  {active ? (
                    <ArrowLeftOnRectangleIcon
                      className="mr-2 h-5 w-5 text-neutral-100"
                      aria-hidden="true"
                    />
                  ) : (
                    <ArrowLeftOnRectangleIcon
                      className="mr-2 h-5 w-5 text-neutral-400"
                      aria-hidden="true"
                    />
                  )}
                  {t("logout")}
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
