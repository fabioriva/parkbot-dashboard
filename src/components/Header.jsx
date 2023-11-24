"use client";

import { useTranslations } from "next-intl";
import { Flex } from "@tremor/react";
import Info from "@/components/HeaderInfo";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import Mode from "@/components/ModeToggler";
import Title from "@/components/HeaderTitle";
import Toast from "@/components/Toast";
// import MenuDesktop from "@/components/UserMenuSelect";
import UserMenu from "@/components/UserMenu";
import { useInfo } from "@/hooks/useWebSocket";

export default function Header({ aps, payload }) {
  const t = useTranslations("Layout.Header");

  const { comm, diag, map, message, operations } = useInfo(
    `${process.env.NEXT_PUBLIC_WEBSOCK_URL}/${aps.ns}/info`
  );
  const alarms = diag || 0;
  const cars = map[0]?.value || 0;
  const entries = operations?.entries.length || 0;
  const exits = operations?.exits.length | 0;

  return (
    <header>
      <Toast message={message} />
      <Flex>
        <Title aps={aps} />
        <Flex className="flex justify-end">
          {/* Desktop */}
          <div className="hidden md:inline-flex md:space-x-2">
            <Info
              aps={aps}
              alarms={alarms}
              cars={cars}
              comm={comm}
              entries={entries}
              exits={exits}
            />
          </div>
          <LocaleSwitcher />
          <Mode />
          {/* <MenuDesktop aps={aps} user={payload} /> */}
          <UserMenu aps={aps} user={payload} />
        </Flex>
      </Flex>
      {/* Mobile */}
      <Flex className="inline-flex md:hidden mt-3">
        <Info
          aps={aps}
          alarms={alarms}
          cars={cars}
          comm={comm}
          entries={entries}
          exits={exits}
        />
      </Flex>
    </header>
  );
}
