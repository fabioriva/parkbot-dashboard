import { useLocale } from "next-intl";
import { ChangeEvent, ReactNode, useTransition } from "react";
import { useRouter, usePathname } from "@/navigation";
// import { Select, SelectItem } from "@tremor/react";
import { locales } from "@/navigation";

export default function LocaleSwitcher() {
  const locale = useLocale();

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  // function onSelectChange(value) {
  //   console.log(value);
  //   const nextLocale = value;
  //   startTransition(() => {
  //     router.replace(pathname, { locale: nextLocale });
  //   });
  // }

  function onSelectChange(event) {
    console.log(event.target.value);
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    // <Select
    //   className="hidden sm:inline ml-3 max-w-[10rem]"
    //   defaultValue={locale}
    //   disabled={isPending}
    //   enableClear={false}
    //   onChange={onSelectChange}
    // >
    //   {["en", "it"].map((cur) => (
    //     <SelectItem key={cur} value={cur}>
    //       {cur}
    //     </SelectItem>
    //   ))}
    // </Select>
    <select
      className="uppercase ml-3 w-max-[5rem] p-1.5 text-sm rounded-md bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      defaultValue={locale}
      disabled={isPending}
      onChange={onSelectChange}
    >
      {locales.map((cur) => (
        <option key={cur} value={cur}>
          {cur}
        </option>
      ))}
    </select>
  );
}
