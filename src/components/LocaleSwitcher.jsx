import { useLocale } from "next-intl";
import { Fragment, useTransition } from "react";
import { Menu, Transition } from "@headlessui/react";
import { LanguageIcon } from "@heroicons/react/20/solid";
import { useRouter, usePathname } from "@/navigation";
import { locales } from "@/navigation";

export default function LocaleSwitcher() {
  const locale = useLocale();

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  // function onSelectChange(event) {
  //   const nextLocale = event.target.value;
  //   startTransition(() => {
  //     router.replace(pathname, { locale: nextLocale });
  //   });
  // }

  // return (
  //   <select
  //     className="uppercase ml-3 w-max-[5rem] p-1.5 text-sm rounded-md bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  //     defaultValue={locale}
  //     disabled={isPending}
  //     onChange={onSelectChange}
  //   >
  //     {locales.map((cur) => (
  //       <option key={cur} value={cur}>
  //         {cur}
  //       </option>
  //     ))}
  //   </select>
  // );

  function onSelectChange(locale) {
    const nextLocale = locale;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <Menu as="div" className="relative inline-block z-10">
      <Menu.Button className="inline-flex w-full justify-center rounded-md px-2 py-2 hover:text-neutral-300 text-neutral-500 text-sm font-medium hover:bg-opacity-30">
        <span className="uppercase">{locale}</span>
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
        <Menu.Items className="absolute right-0 mt-2 w-20 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            {locales.map((cur) => (
              <Menu.Item key={cur}>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-neutral-500 text-white" : "text-neutral-900"
                    } group flex w-full items-center rounded-md px-2 py-2 uppercase`}
                    onClick={() => onSelectChange(cur)}
                  >
                    {/* {active ? (
                      <LanguageIcon
                        className="mr-2 h-5 w-5 text-neutral-100"
                        aria-hidden="true"
                      />
                    ) : (
                      <LanguageIcon
                        className="mr-2 h-5 w-5 text-neutral-400"
                        aria-hidden="true"
                      />
                    )} */}
                    {
                      <LanguageIcon
                        className={`mr-2 h-5 w-5 ${
                          active ? "text-neutral-100" : "text-neutral-400"
                        }`}
                        aria-hidden="true"
                      />
                    }
                    {cur}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
