"use client";

import React, { lazy, Suspense } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Flex, Button } from "@tremor/react";
import Loading from "@/components/Loading";
import { useData } from "@/hooks/useWebSocket";

const componentList = {
  et200m16: lazy(() => import("src/components/ET200M16")),
  et200m32: lazy(() => import("src/components/ET200M32")),
  et200s16: lazy(() => import("src/components/ET200S16")),
  et200s8: lazy(() => import("src/components/ET200S08")),
  et200m08f: lazy(() => import("src/components/ET200M08_FS")),
  et200m16f: lazy(() => import("src/components/ET200M16_FS")),
  et200s8f: lazy(() => import("src/components/ET200S08_FS")),
};

function Back({ aps }) {
  const router = useRouter();
  const t = useTranslations("Buttons");

  return (
    <Flex className="mt-6 pt-4 border-t">
      <Button
        size="xs"
        variant="light"
        icon={ArrowLeftIcon}
        iconPosition="left"
        onClick={() => router.push(`/${aps}/racks`)}
      >
        {t("button-back")}
      </Button>
    </Flex>
  );
}

export default function Rack({ aps, nr, json }) {
  // console.log(props);
  const [rack, setRack] = React.useState(json);
  const url = `${process.env.NEXT_PUBLIC_WEBSOCK_URL}/${aps}/racks/${nr}`;
  const { data } = useData(url, {
    initialData: rack,
  });
  React.useEffect(() => setRack(data), [data]);
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div
          className="overflow-scroll relative bg-transparent shadow w-full h-96 flex items-center justify-center"
          id={`rack-${rack.nr}`}
        >
          <span className="text-2xl dark:text-white font-medium">
            Simatic PLC Rack {nr}
          </span>
          {rack.cards.map((item, key) => {
            // console.log(item.module);
            const Module = componentList[item.module];
            return (
              <React.Fragment key={key}>
                {Module !== undefined && <Module key={key} module={item} />}
              </React.Fragment>
            );
          })}
        </div>
      </Suspense>
      <Back aps={aps} />
    </>
  );
}
