import Image from "next/image";
import Link from "next-intl/link";
import { usePathname } from "next-intl/client";
import { useTranslations } from "next-intl";
import { Title, Text, Flex } from "@tremor/react";
import pages from "@/constants/pages";
import bot from "../../public/bot.svg";

export default function HeaderTitle({ aps }) {
  const pathname = usePathname();
  const page = pathname.split("/").slice(1)[1];
  const t = useTranslations("Layout.Header.Menu");

  return (
    <Flex justifyContent="start" alignItems="end">
      <Link href={`/${aps.ns}/dashboard`}>
        <Image
          className="hidden sm:inline mr-1.5"
          src={bot}
          alt="Parkbot"
          height={48}
          width={48}
        />
      </Link>
      <div className="truncate">
        <Title className="font-semibold text-xl tracking-tighter truncate">
          <span className="hidden sm:inline text-transparent bg-clip-text bg-gradient-to-br from-orange-800 to-orange-500">
            Parkbot
          </span>{" "}
          {pages.find((item) => item.role === page)?.role && t(page)}
        </Title>
        <Text className="truncate">{aps.name}</Text>
      </div>
    </Flex>
  );
}
