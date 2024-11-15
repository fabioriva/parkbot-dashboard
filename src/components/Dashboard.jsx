"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Button, Card, Title } from "@tremor/react";
import Device from "@/components/Device";
import HistoryList from "@/components/HistoryList";
import Loading from "@/components/Loading";
import Occupancy from "@/components/Occupancy";
import Operations from "@/components/OperationsChartView";
import { isAuthorized } from "@/lib/auth";
import fetcher from "@/lib/fetch";
import useSWR from "swr";

function More({ aps, role, roles }) {
  const router = useRouter();
  const t = useTranslations("Buttons");

  return (
    <Button
      className="mt-6"
      size="xs"
      variant="light"
      icon={ArrowRightIcon}
      iconPosition="right"
      disabled={!isAuthorized(role, roles)}
      onClick={() => router.push(`/${aps}/${role}`)}
    >
      {t("button-more")}
    </Button>
  );
}

export default function Dashboard({ aps, json, token, user }) {
  const t = useTranslations("Dashboard");

  const [dashboard, setDashboard] = useState(json);
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${aps}/dashboard`;
  const { data } = useSWR(url, fetcher, {
    fallbackData: dashboard,
    refreshInterval: 1000,
  });
  useEffect(() => setDashboard(data), [data]);

  return (
    <Suspense fallback={<Loading />}>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
        {dashboard.system.map((item, key) => (
          <Device aps={aps} data={item} token={token} user={user} key={key} />
        ))}
      </div>
      <div className="my-3" />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
        <Card className="p-3 sm:p-6 self-start">
          <Occupancy occupancy={dashboard.occupancy} />
          <More aps={aps} role="map" roles={user.roles} />
        </Card>
        <Card className="p-3 sm:p-6 self-start">
          <Title className="mb-3">{t("kpi-activity")}</Title>
          <HistoryList data={dashboard.activity.documents} />
          <More aps={aps} role="history" roles={user.roles} />
        </Card>
        <div className="xl:col-span-2">
          <Card className="p-3 sm:p-6 self-start">
            <Title className="mb-3">{t("kpi-operations")}</Title>
            <Operations data={dashboard.operations[0].data} stacked={true} />
            <More aps={aps} role="statistics" roles={user.roles} />
          </Card>
        </div>
      </div>
    </Suspense>
  );
}
