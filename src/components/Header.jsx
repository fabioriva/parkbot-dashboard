"use client";

import { useTranslations } from "next-intl";
import { Flex } from "@tremor/react";
import Info from "@/components/HeaderInfo";
import Title from "@/components/HeaderTitle";
import Toast from "@/components/Toast";
import User from "@/components/UserMenu";
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
        <Flex className="justify-end">
          {/* Desktop */}
          <div className="hidden sm:inline-flex">
            <Info
              aps={aps}
              alarms={alarms}
              cars={cars}
              comm={comm}
              entries={entries}
              exits={exits}
            />
          </div>
          <User aps={aps} user={payload} />
        </Flex>
      </Flex>
      {/* Mobile */}
      <Flex className="inline-flex sm:hidden mt-3">
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
